// SAPPORO FAMILY TRIP v5 · Supabase cloud adapter
window.SapporoCloud = (() => {
  let client = null;
  function config(){ return window.SAPPORO_SUPABASE || {}; }
  function configured(){ const c=config(); return Boolean(c.url && c.anonKey && !String(c.url).includes('PASTE_') && !String(c.anonKey).includes('PASTE_')); }
  function getClient(){
    if(!configured()) return null;
    if(client) return client;
    if(!window.supabase?.createClient) throw new Error('Supabase SDK not loaded');
    const c=config(); client=window.supabase.createClient(c.url,c.anonKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}); return client;
  }
  async function getSession(){ const c=getClient(); if(!c)return null; const {data,error}=await c.auth.getSession(); if(error)throw error; return data.session; }
  async function sendMagicLink(email){ const c=getClient(); if(!c)throw new Error('Supabase not configured'); const redirectTo=location.origin+location.pathname; const {error}=await c.auth.signInWithOtp({email,options:{emailRedirectTo:redirectTo}}); if(error)throw error; }
  async function signOut(){ const c=getClient(); if(!c)return; const {error}=await c.auth.signOut(); if(error)throw error; }
  function onAuthChange(fn){ const c=getClient(); if(!c)return; c.auth.onAuthStateChange((_event,session)=>fn(session)); }
  async function requireUser(){ const s=await getSession(); if(!s?.user)throw new Error('로그인이 필요합니다'); return s.user; }
  async function signedImage(path){ if(!path)return ''; const c=getClient(); const {data,error}=await c.storage.from('place-images').createSignedUrl(path,3600); if(error)return ''; return data.signedUrl||''; }
  async function listPlaces(){
    const c=getClient(); const user=await requireUser(); const {data,error}=await c.from('saved_places').select('*').eq('user_id',user.id).order('created_at',{ascending:false}); if(error)throw error;
    return Promise.all((data||[]).map(async r=>({...r,image_url:await signedImage(r.image_path)})));
  }
  async function savePlace(item,imageBlob,fileName='screenshot.jpg'){
    const c=getClient(); const user=await requireUser(); let imagePath='';
    if(imageBlob){ const safe=String(fileName).replace(/[^a-zA-Z0-9._-]+/g,'-'); imagePath=`${user.id}/${Date.now()}-${safe}`; const {error:upErr}=await c.storage.from('place-images').upload(imagePath,imageBlob,{contentType:imageBlob.type||'image/jpeg',upsert:false}); if(upErr)throw upErr; }
    const day=Number(String(item.dayCandidate||'').replace(/\D/g,''))||null;
    const payload={user_id:user.id,name:item.name,category:item.category,area:item.area||'',source_url:item.sourceUrl||'',source_type:item.sourceType||'',note:item.note||'',day_candidate:day,favorite:item.favorite!==false,image_path:imagePath||null};
    const {data,error}=await c.from('saved_places').insert(payload).select('*').single(); if(error)throw error; return {...data,image_url:imagePath?await signedImage(imagePath):''};
  }
  async function deletePlace(id,imagePath=''){
    const c=getClient(); await requireUser(); if(imagePath){const {error:sErr}=await c.storage.from('place-images').remove([imagePath]); if(sErr)console.warn(sErr)} const {error}=await c.from('saved_places').delete().eq('id',id); if(error)throw error;
  }
  return {configured,getSession,sendMagicLink,signOut,onAuthChange,listPlaces,savePlace,deletePlace};
})();
