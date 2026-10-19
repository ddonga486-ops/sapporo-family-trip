// SAPPORO FAMILY TRIP | 2026-10-19 itinerary and funding update
// Loaded after app.js. Does not remove locally saved memos, expenses or favorites.
(function(){
  'use strict';
  if(typeof days==='undefined'||typeof places==='undefined'||typeof routes==='undefined') return;
  const d=n=>days.find(x=>x.day===n);
  const edit=(day,title,changes)=>{const e=day.events.find(x=>x.title===title);if(e)Object.assign(e,changes);};
  const sort=day=>day.events.sort((a,b)=>a.time.localeCompare(b.time));
  const one=d(1);
  if(one){
    one.subtitle='오타루 · 잔기 점심 · 운하 노을 · 규카츠 저녁';
    edit(one,'나루토 본점 점심',{desc:'첫째가 먹고 싶어 한 잔기(홋카이도식 가라아게)와 닭튀김 · 가족 취향에 따라 초밥도 선택\n포장하지 않고 매장에서 따뜻하게 먹기'});
    one.events=one.events.filter(e=>!['오타루 → 삿포로','호텔 체크인 · 캐리어 수령','스프카레 Suage+'].includes(e.title));
    one.events.push(
      {time:'17:25',icon:'🥩',title:'와규 쿠로사와 역앞점 · 규카츠 저녁',desc:'둘째가 기다린 규카츠 · 일반 규카츠 세트 ¥2,640부터\nJR 오타루역 도보 약 4분 · 예약 여부 별도 확인',place:'kurosawa-ekimae'},
      {time:'18:40',icon:'🚆',title:'오타루 → 삿포로',desc:'저녁을 마치고 오타루역에서 JR 탑승 · 실제 출발 시각은 현지 확인',route:'otaru-hotel'},
      {time:'19:50',icon:'🏨',title:'호텔 체크인 · 캐리어 수령',desc:'스스키노 숙소 도착 · 공항 당일 배송 캐리어 2개 확인\n시간은 JR·지하철 환승에 따라 변동'});
    sort(one);
  }
  const two=d(2);
  if(two){
    two.subtitle='조잔케이 단풍 · 온천 3시간 · 저녁 후 휴식';
    two.events=two.events.filter(e=>e.title!=='삿포로 TV타워 야경');
    edit(two,'호텔 복귀',{time:'19:40',desc:'온천 후 호텔에서 휴식 · TV타워는 DAY 3로 이동'});
    sort(two);
  }
  const three=d(3);
  if(three){
    three.subtitle='신궁 · 쇼핑 · 맥주박물관 · TV타워 · 와규 저녁';
    edit(three,'188번 버스 → 비어가든',{title:'188번 버스 → 아리오·맥주박물관',desc:'삿포로역 북쪽출구 2번 승강장 · 출발 전 현지 시간표 확인'});
    edit(three,'삿포로 맥주박물관',{desc:'남편을 위한 맥주박물관 자유견학 · 굿즈 · 시음 선택\n관람 뒤 시내로 돌아와 마지막 밤 즐기기'});
    three.events=three.events.filter(e=>!['삿포로 비어가든','MEGA 돈키호테','호텔 귀환'].includes(e.title));
    three.events.push(
      {time:'16:45',icon:'🚌',title:'맥주박물관 → 오도리 이동',desc:'버스·대중교통 이동 · 당일 Google 지도에서 시간과 정류장 확인',route:'museum-odori'},
      {time:'18:00',icon:'🌃',title:'삿포로 TV타워 야경',desc:'오도리공원에서 TV타워 외부 야경과 가족사진 (전망대 입장 없음 · 무료)',place:'tv-tower'},
      {time:'19:00',icon:'🥩',title:'토쿠주 신라테이 · 와규 야키니쿠',desc:'가족 4명 · 시라오이 흑모와규 직접 구워 먹기\n마지막 밤 저녁 예산 최대 ¥20,000 · 예약 여부 확인',place:'shinratei'},
      {time:'20:30',icon:'🛒',title:'MEGA 돈키호테',desc:'다누키코지에서 마지막 쇼핑 · 저녁 식사 후 이동'},
      {time:'21:15',icon:'🏨',title:'호텔 귀환',desc:'쇼핑 짐 정리 · 귀국일 수하물 확인'});
    sort(three);
  }
  if(routes['otaru-hotel'])Object.assign(routes['otaru-hotel'],{
    title:'쿠로사와 규카츠 저녁 → 스스키노 호텔',tag:'DAY 1 · 저녁 후 이동',time:'18:40 이후 JR 탑승',
    map:'https://www.google.com/maps/dir/?api=1&origin=Wagyu+Kurosawa+Otaru+Ekimae&destination=Sotetsu+Fresa+Inn+Sapporo+Susukino&travelmode=transit',
    tip:'오타루 운하 노을 후 쿠로사와 역앞점에서 식사하고 오타루역으로 이동해요. 열차 시각은 현지에서 확인하세요.',
    steps:[
      ['오타루 운하에서 출발','小樽運河','오타루 운가','오타루 운하','16:20~17:10 전후 노을과 가스등 감상 후 역 방향으로 도보 이동.'],
      ['쿠로사와 역앞점 저녁','和牛黒澤 小樽駅前店','와규 쿠로사와 에키마에텐','규카츠 식당','17:25 전후 규카츠 저녁. 예약 확정이 아니라 계획 시간이에요.'],
      ['오타루역으로 이동','小樽駅','오타루에키','오타루역','도보 약 4분.'],
      ['JR 삿포로 방면','札幌方面','삿포로 호멘','삿포로 방면','18:40 이후 이용 가능한 열차의 실제 시간을 확인해요.'],
      ['JR 삿포로역 하차','札幌駅','삿포로에키','삿포로역','東豊線 지하철로 환승.'],
      ['도호선 후쿠즈미 방면','東豊線 福住方面','도호센 후쿠즈미 호멘','도호선 후쿠즈미 방향','豊水すすきの(호스이스스키노)역에서 하차.'],
      ['호텔 도착','相鉄フレッサイン札幌すすきの','소테츠 후렛사 인 삿포로 스스키노','숙소','공항에서 보낸 캐리어를 수령해요.']
    ]
  });
  if(routes['sapporo-beer']){
    routes['sapporo-beer'].title='삿포로역 → 아리오·맥주박물관';
    routes['sapporo-beer'].tag='DAY 3 · 쇼핑/관람';
    routes['sapporo-beer'].tip='맥주박물관을 방문한 다음에는 징기스칸이 아닌 시내 와규 야키니쿠 저녁을 먹어요.';
    routes['sapporo-beer'].steps=routes['sapporo-beer'].steps.map(s=>s[0]==='비어가든 하차'
      ?['맥주박물관 정류장 하차','サッポロビール園','삿포로 비루엔','맥주박물관 근처','아리오 쇼핑 후 맥주박물관 자유 관람.']:s);
  }
  routes['museum-odori']={
    title:'맥주박물관 → 오도리 TV타워',tag:'DAY 3 · 야경 연결',time:'여유 60~75분 확보',fare:'대중교통·도보',
    map:'https://www.google.com/maps/dir/?api=1&origin=Sapporo+Beer+Museum&destination=Sapporo+TV+Tower&travelmode=transit',
    tip:'박물관을 나오기 직전 Google 지도에서 가장 편리한 버스/지하철 경로를 확인하세요.',
    steps:[
      ['맥주박물관 관람 종료','サッポロビール博物館','삿포로 비루 하쿠부츠칸','맥주박물관','쇼핑 짐 챙기기.'],
      ['오도리공원으로 이동','大通公園','오도리 코엔','오도리공원','지도에서 교통편과 소요시간 확인.'],
      ['TV타워 외부 야경','さっぽろテレビ塔','삿포로 테레비토','TV타워','18시경 외부에서 무료 사진 촬영.'],
      ['신라테이 와규 저녁','徳寿 しんら亭','토쿠주 신라테이','야키니쿠 전문점','19시경 남3조 서5초메 산조미마츠 빌딩 2층.']
    ]
  };
  const change=(id,fields)=>{const p=places.find(x=>x.id===id);if(p)Object.assign(p,fields);};
  change('naruto',{
    desc:'첫째가 일본에서 한 번 먹고 싶어 한 잔기(홋카이도식 가라아게)를 매장에서 갓 튀긴 상태로 먹는 첫날 점심.',menu:'잔기 · 닭 반마리 튀김 · 초밥',
    recommend:'포장 없이 매장에서 점심으로 먹어요. 이후 사카이마치·오르골당·르타오 → 운하 노을로 이동합니다.'});
  change('sakaimachi',{recommend:'점심 뒤 오르골당과 르타오를 둘러보고 오후 4시 20분 전후 운하로 향해요.'});
  change('music-box',{recommend:'르타오와 묶어 관람하고 운하 노을을 본 뒤 오타루역 근처에서 저녁 식사해요.'});
  change('letao',{recommend:'오르골당 뒤 디저트 휴식을 하고 16:20 전후 운하에 도착하도록 이동해요.'});
  change('suage',{day:2,rating:'DAY 2 · 저녁 대안',recommend:'온천으로 피곤할 때 2일차 저녁에 먹을 수 있는 스스키노 식사 대안입니다.'});
  change('beer-museum',{
    desc:'맥주박물관은 그대로 방문하되 징기스칸 식사는 생략하고 마지막 밤 와규 야키니쿠로 변경했어요.',
    recommend:'15시대 관람 → 오도리 TV타워 18시 → 신라테이 와규 저녁 19시.'});
  change('tv-tower',{day:3,rating:'DAY 3 · 외부 무료 야경',budget:'외부 사진 무료',desc:'오도리공원에서 조명이 켜진 TV타워를 배경으로 가족사진을 남겨요. 전망대 입장은 하지 않습니다.',recommend:'18시경 외부 야경 감상 후 신라테이 저녁 19시.'});
  const old=places.findIndex(p=>p.id==='beer-garden');if(old>=0)places.splice(old,1);
  places.push({
    id:'kurosawa-ekimae',day:1,type:'식당',name:'와규 쿠로사와 오타루역앞점',jp:'和牛黒澤 小樽駅前店',pron:'와규 쿠로사와 오타루 에키마에텐',image:'./assets/day1-otaru.jpg',
    rating:'DAY 1 · 규카츠 저녁',hours:'11:30~21:00 (L.O. 20:00)',budget:'보통 규카츠 세트 ¥2,640부터',location:'오타루 이나호 2-11-9 · JR역 도보 4분',
    desc:'둘째가 일본에서 꼭 먹고 싶어 한 규카츠를 오타루 운하 노을 후 따뜻하게 먹는 곳.',
    recommend:'17:25 방문 계획(예약은 별도로 확인). 식사 후 오타루역에서 JR로 삿포로 복귀.',
    menu:'규카츠 보통 ¥2,640 · 상급 ¥3,520 (세금 포함)',
    map:'https://www.google.com/maps/search/?api=1&query=%E5%92%8C%E7%89%9B%E9%BB%92%E6%BE%A4+%E5%B0%8F%E6%A8%BD%E9%A7%85%E5%89%8D%E5%BA%97'
  });
  places.push({
    id:'shinratei',day:3,type:'식당',name:'토쿠주 신라테이 · 시라오이 와규',jp:'徳寿 しんら亭',pron:'토쿠주 신라테이',image:'./assets/day3-sapporo.jpg',
    rating:'DAY 3 · 마지막 와규 저녁',hours:'목요일 17:00~23:00 (L.O. 22:30)',budget:'4인 총예산 최대 ¥20,000',
    location:'삿포로 남3조 서5초메14 산조미마츠 빌딩 2F',
    desc:'일본 여행 마지막 밤, 가족 4명이 홋카이도 시라오이 흑모와규를 구워 먹는 저녁 식사.',
    recommend:'TV타워 외부 야경 → 19시 식사 → 20:30 돈키호테. 예약 여부와 가격은 현장 확인.',
    menu:'시라오이 와규 모둠 · 갈비 · 로스 · 밥 · 샐러드',
    map:'https://www.google.com/maps/search/?api=1&query=%E5%BE%B3%E5%AF%BF+%E3%81%97%E3%82%93%E3%82%89%E4%BA%AD+%E6%9C%AD%E5%B9%8C'
  });

  // Initialize the shared budget once; keep expense history and later manual adjustments.
  try{
    if(localStorage.getItem('sapporo-funding-20261019-v1')!=='1'){
      localStorage.setItem('sapporo-budget-yen','183000');
      localStorage.setItem('sapporo-funding-20261019-v1','1');
    }
  }catch(e){console.warn(e);}
  // Preserve old expenses without a payment-source field.
  if(typeof renderExpenses==='function' && typeof bind==='function'){
    const oldRenderExpenses=renderExpenses;
    renderExpenses=function(){
      let out=oldRenderExpenses();
      const expenses=getExpenses();
      const total=s=>expenses.filter(x=>x.source===s).reduce((n,x)=>n+Number(x.amount||0),0);
      const cash=total('cash'),toss=total('toss');
      const other=expenses.filter(x=>!['cash','toss'].includes(x.source)).reduce((n,x)=>n+Number(x.amount||0),0);
      const funding='<div class="finance-card"><h3>💴 출발 자금 구성 · 총 ¥183,000</h3>'
        +'<div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:12px">'
        +'<div style="padding:12px;border-radius:12px;background:#fff7ef"><small>현금 · 초기 ¥11,000</small><strong style="display:block;font-size:20px;margin-top:6px">'+yen(11000-cash)+'</strong><small>사용 '+yen(cash)+'</small></div>'
        +'<div style="padding:12px;border-radius:12px;background:#f0f5ff"><small>토스 외화통장 · 초기 ¥172,000</small><strong style="display:block;font-size:20px;margin-top:6px">'+yen(172000-toss)+'</strong><small>사용 '+yen(toss)+'</small></div></div>'
        +(other?'<p class="form-help">결제수단 미분류 지출 '+yen(other)+'은 총 잔액에만 반영됩니다.</p>':'')
        +'<p class="form-help">각 잔액은 앱에 해당 결제수단으로 입력한 사용내역 기준이며 실제 계좌 잔액과 다를 수 있어요.</p></div>';
      out=out.replace('<div class="budget-progress">',funding+'<div class="budget-progress">');
      out=out.replace('<select id="expenseCat">','<select id="expenseSource" aria-label="결제수단"><option value="toss">토스 외화통장</option><option value="cash">현금</option><option value="other">기타/미분류</option></select><select id="expenseCat">');
      return out;
    };
    const oldBind=bind;
    bind=function(){
      oldBind();
      const btn=q('#addExpense');
      if(btn && q('#expenseSource'))btn.onclick=()=>{
        const amount=Number(q('#expenseAmount').value||0);
        if(!Number.isFinite(amount)||amount<=0){toast('올바른 사용 금액을 입력해 주세요');return;}
        const items=getExpenses();
        items.push({id:Date.now(),day:q('#expenseDay').value,category:q('#expenseCat').value,
          memo:q('#expenseMemo').value.trim(),amount,source:q('#expenseSource').value});
        saveExpenses(items);
        toast('지출과 결제수단을 저장했어요');render();
      };
    };
  }
  if(typeof render==='function' && document.querySelector('#app'))render();
})();