// SAPPORO FAMILY TRIP v9 · Supabase cloud adapter · explicit auth callback handling
window.SapporoCloud = (() => {
  let client = null;
  let sdkPromise = null;
  function config(){ return window.SAPPORO_SUPABASE || {}; }
  function configured(){ const c=config(); return Boolean(c.url && c.anonKey && !String(c.url).includes('PASTE_') && !String(c.anonKey).includes('PASTE_')); }
  function ensureSdk(){
    if(window.supabase?.createClient) return Promise.resolve(window.supabase);
    if(sdkPromise) return sdkPromise;
    sdkPromise = new Promise((resolve,reject)=>{
      const script=document.createElement('script');
      script.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
      script.async=true;
      script.onload=()=>window.supabase?.createClient?resolve(window.supabase):reject(new Error('Supabase SDK load failed'));
      script.onerror=()=>reject(new Error('Supabase SDK network error'));
      document.head.appendChild(script);
    });
    return sdkPromise;
  }
  async function getClient(){
    if(!configured()) return null;
    if(client) return client;
    await ensureSdk();
    const c=config();
    client=window.supabase.createClient(c.url,c.anonKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}});
    return client;
  }
  async function getSession(){ const c=await getClient(); if(!c)return null; const {data,error}=await c.auth.getSession(); if(error)throw error; return data.session; }
  async function consumeAuthCallback(){
    // Capture the callback parameters before Supabase or the app router can touch the URL.
    const callbackUrl = new URL(window.location.href);
    const hash = new URLSearchParams((callbackUrl.hash || '').replace(/^#/, ''));
    const queryError = callbackUrl.searchParams.get('error_description') || callbackUrl.searchParams.get('error');
    const hashError = hash.get('error_description') || hash.get('error');
    if(queryError || hashError) throw new Error(decodeURIComponent(queryError || hashError));

    const code = callbackUrl.searchParams.get('code');
    const flowId = callbackUrl.searchParams.get('sb_flow_id');
    const accessToken = hash.get('access_token');
    const refreshToken = hash.get('refresh_token');
    const c = await getClient();
    if(!c) throw new Error('Supabase not configured');

    if(code){
      const {data,error}=await c.auth.exchangeCodeForSession(code, flowId ? {flowId} : undefined);
      if(error) throw error;
      return data?.session || null;
    }
    if(accessToken && refreshToken){
      const {data,error}=await c.auth.setSession({access_token:accessToken,refresh_token:refreshToken});
      if(error) throw error;
      return data?.session || null;
    }

    // Fallback for a callback already consumed by the SDK/storage.
    const {data,error}=await c.auth.getSession();
    if(error) throw error;
    return data?.session || null;
  }
  async function sendMagicLink(email){ const c=await getClient(); if(!c)throw new Error('Supabase not configured'); const redirectTo=location.origin+location.pathname; const {error}=await c.auth.signInWithOtp({email,options:{emailRedirectTo:redirectTo}}); if(error)throw error; }
  async function signOut(){ const c=await getClient(); if(!c)return; const {error}=await c.auth.signOut(); if(error)throw error; }
  async function onAuthChange(fn){ const c=await getClient(); if(!c)return; c.auth.onAuthStateChange((_event,session)=>fn(session)); }
  async function requireUser(){ const s=await getSession(); if(!s?.user)throw new Error('로그인이 필요합니다'); return s.user; }
  async function signedImage(path){ if(!path)return ''; const c=await getClient(); const {data,error}=await c.storage.from('place-images').createSignedUrl(path,3600); if(error)return ''; return data.signedUrl||''; }
  async function listPlaces(){
    const c=await getClient(); const user=await requireUser(); const {data,error}=await c.from('saved_places').select('*').eq('user_id',user.id).order('created_at',{ascending:false}); if(error)throw error;
    return Promise.all((data||[]).map(async r=>({...r,image_url:await signedImage(r.image_path)})));
  }
  async function savePlace(item,imageBlob,fileName='screenshot.jpg'){
    const c=await getClient(); const user=await requireUser(); let imagePath='';
    if(imageBlob){ const safe=String(fileName).replace(/[^a-zA-Z0-9._-]+/g,'-'); imagePath=`${user.id}/${Date.now()}-${safe}`; const {error:upErr}=await c.storage.from('place-images').upload(imagePath,imageBlob,{contentType:imageBlob.type||'image/jpeg',upsert:false}); if(upErr)throw upErr; }
    const day=Number(String(item.dayCandidate||'').replace(/\D/g,''))||null;
    const payload={user_id:user.id,name:item.name,category:item.category,area:item.area||'',source_url:item.sourceUrl||'',source_type:item.sourceType||'',note:item.note||'',day_candidate:day,favorite:item.favorite!==false,image_path:imagePath||null};
    const {data,error}=await c.from('saved_places').insert(payload).select('*').single(); if(error)throw error; return {...data,image_url:imagePath?await signedImage(imagePath):''};
  }

  async function analyzePlaceImage(imageDataUrl){
    const c=await getClient(); await requireUser();
    if(!imageDataUrl) throw new Error('분석할 사진이 없습니다');
    const {data,error}=await c.functions.invoke('analyze-place',{body:{imageDataUrl}});
    if(error) throw error;
    if(!data?.ok) throw new Error(data?.error||'AI 분석 응답이 올바르지 않습니다');
    return data.result||{};
  }

  async function deletePlace(id,imagePath=''){
    const c=await getClient(); await requireUser(); if(imagePath){const {error:sErr}=await c.storage.from('place-images').remove([imagePath]); if(sErr)console.warn(sErr)} const {error}=await c.from('saved_places').delete().eq('id',id); if(error)throw error;
  }
  return {configured,getSession,consumeAuthCallback,sendMagicLink,signOut,onAuthChange,listPlaces,savePlace,deletePlace,analyzePlaceImage};
})();
window.dispatchEvent(new Event('sapporo-cloud-ready'));
