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
    one.subtitle='오타루 · 잔기·초밥 점심 · 운하 노을 · 규카츠 저녁';
    edit(one,'나루토 본점 점심',{desc:'첫째가 먹고 싶어 한 잔기(홋카이도식 가라아게)와 닭튀김 · 닭 반마리·초밥 7개 세트(¥2,980)도 선택\n포장하지 않고 매장에서 따뜻하게 먹기'});
    one.events=one.events.filter(e=>!['오타루 → 삿포로','호텔 체크인 · 캐리어 수령','스프카레 Suage+'].includes(e.title));
    one.events.push(
      {time:'17:25',icon:'🥩',title:'와규 쿠로사와 역앞점 · 규카츠 저녁',desc:'둘째가 기다린 규카츠 · 일반 규카츠 세트 ¥2,640부터\nJR 오타루역 도보 약 4분 · 예약 여부 별도 확인',place:'kurosawa-ekimae'},
      {time:'18:40',icon:'🚆',title:'오타루 → 삿포로',desc:'저녁을 마치고 오타루역에서 JR 탑승 · 실제 출발 시각은 현지 확인',route:'otaru-hotel'},
      {time:'19:50',icon:'🏨',title:'호텔 체크인 · 캐리어 수령',desc:'스스키노 숙소 도착 · 공항 당일 배송 캐리어 2개 확인\n시간은 JR·지하철 환승에 따라 변동'});
    sort(one);
  }
  const two=d(2);
  if(two){
    two.subtitle='조잔케이 단풍 · 온천 3시간 · 스프카레 · 휴식';
    two.events=two.events.filter(e=>e.title!=='삿포로 TV타워 야경');
    const dinner=two.events.find(e=>e.place==='hanamaru');
    if(dinner)Object.assign(dinner,{time:'18:20',icon:'🍛',title:'Suage+ 스프카레 저녁',desc:'닭다리·야채 스프카레 · 온천 후 스스키노에서 식사\n현금 또는 PayPay만 가능(신용/체크카드 불가) · 예약 불가 · 대기시간 유의',place:'suage'});
    edit(two,'호텔 복귀',{time:'20:00',desc:'스프카레를 먹고 숙소에서 휴식 · 대기가 길면 변동\nTV타워는 DAY 3에 방문'});
    sort(two);
  }
  const three=d(3);
  if(three){
    three.subtitle='신궁 · 쇼핑 · 맥주박물관 · TV타워 · 와규 저녁';
    edit(three,'188번 버스 → 비어가든',{title:'188번 버스 → 아리오·맥주박물관',desc:'삿포로역 북쪽출구 2번 승강장 · 출발 전 현지 시간표 확인'});
    edit(three,'돈카츠 와코',{title:'키네야 아피아 · 우동 점심',desc:'삿포로역 남쪽 지하 아피아 B1 우동집 · 유부/튀김/기본 우동\n4인 예상 ¥3,500~¥5,000 · 저녁 와규를 위해 점심은 가볍게',place:'kineya'});
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
    desc:'첫째가 원하는 잔기(홋카이도식 가라아게)와 초밥을 한곳에서 맛볼 수 있는 첫날 점심. 공식 메뉴에 닭 반마리 튀김+초밥 7개 세트가 있습니다.',menu:'닭 반마리·초밥 7개 세트 ¥2,980 · 잔기덮밥 ¥950',
    recommend:'포장 없이 매장에서 점심으로 먹어요. 이후 사카이마치·오르골당·르타오 → 운하 노을로 이동합니다.'});
  change('sakaimachi',{recommend:'점심 뒤 오르골당과 르타오를 둘러보고 오후 4시 20분 전후 운하로 향해요.'});
  change('music-box',{recommend:'르타오와 묶어 관람하고 운하 노을을 본 뒤 오타루역 근처에서 저녁 식사해요.'});
  change('letao',{recommend:'오르골당 뒤 디저트 휴식을 하고 16:20 전후 운하에 도착하도록 이동해요.'});
  change('suage',{
    day:2,rating:'DAY 2 · 스프카레 저녁',hours:'수요일 11:30~21:00 (L.O. 20:30)',
    budget:'1인 약 ¥1,500~¥2,200',location:'스스키노 남4조 서5초메 · 도지마쓰빌딩 2F',
    desc:'조잔케이 온천을 마치고 스스키노로 돌아와 먹는 홋카이도 스프카레. Suage+는 현금 또는 PayPay만 받고 신용/체크카드는 사용 불가입니다.',
    menu:'닭다리 스프카레 · 야채 스프카레 · 돼지고기 카쿠니 스프카레',
    recommend:'18:20 전후 도착 목표. 사전 좌석 예약 불가, 줄이 길 수 있습니다. 현금 약 ¥8,000을 준비해 두는 게 좋아요.'
  });
  change('hanamaru',{rating:'DAY 2 · 저녁 대체 후보',recommend:'이번 일정의 저녁은 Suage+ 스프카레로 변경되었어요. 너무 긴 대기나 취향이 안 맞을 때 선택할 수 있는 회전초밥 대안입니다.'});
  change('wako',{rating:'DAY 3 · 점심 대체 후보',recommend:'이번 일정의 3일차 점심은 키네야 우동으로 변경되었어요. 돈카츠는 계획에 없는 대체 식당입니다.'});
  if(routes['jozankei-return']){
    routes['jozankei-return'].tip='온천은 16:05에 마치고 버스로 스스키노에 돌아와 Suage+ 스프카레를 먹고 호텔에서 쉬어요.';
    routes['jozankei-return'].steps=routes['jozankei-return'].steps.map(s=>
      s[0]==='스스키노 도착'?[s[0],s[1],s[2],s[3],'18:05 전후 스스키노 도착 → Suage+ 스프카레로 이동. 대기시간에 따라 식사시간 변동.']:s
    );
  }
  places.push({
    id:'kineya',day:3,type:'식당',name:'키네야 삿포로 아피아점 · 우동',jp:'自家製麺 杵屋 札幌アピア店',pron:'지카세이멘 키네야 삿포로 아피아텐',
    image:'./assets/day3-sapporo.jpg',rating:'DAY 3 · 우동 점심',
    hours:'11:00~21:30 (L.O. 21:00)',budget:'우동 ¥780~¥1,250 전후',
    location:'삿포로역 남쪽 지하 아피아 · 조이풀워크 B1F',
    desc:'삿포로역과 연결된 지하상가에서 가볍게 먹는 셋째 날 점심. 가족용 메뉴와 테이블 좌석이 있어 저녁 와규 식사 전에 부담이 적습니다.',
    recommend:'12:30 전후 점심을 먹고 삿포로역 북쪽출구의 아리오·맥주박물관 이동 교통편을 확인해요.',
    menu:'기본 우동 ¥780 · 유부 우동 ¥850 · 튀김 우동 ¥1,110',
    map:'https://www.google.com/maps/search/?api=1&query=%E6%9D%B5%E5%B1%8B+%E6%9C%AD%E5%B9%8C%E3%82%A2%E3%83%94%E3%82%A2%E5%BA%97'
  });
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


  // Confirmed schedule 2026-10-19: DAY 2 observation deck at NIGHT,
  // DAY 3 city-center shopping only; remove Ario and Beer Museum.
  const day2Confirmed=d(2);
  if(day2Confirmed){
    day2Confirmed.subtitle='조잔케이 온천 · 스프카레 · TV타워 전망대 야경';
    const f=day2Confirmed.events.find(e=>e.title==='후타미공원 · 현수교');
    if(f)f.desc='후타미공원·현수교 단풍 · 10/21 삿포로 비 예보로 노면 미끄러우면 짧게 산책하거나 생략';
    const onsen=day2Confirmed.events.find(e=>e.title==='유노하나 조잔케이덴');
    if(onsen)onsen.desc='온천 약 3시간 · 비가 많이 오면 야외 산책 대신 온천 중심으로 휴식 · 16:05 가족 집합';
    day2Confirmed.events=day2Confirmed.events.filter(e=>e.place!=='tv-tower'&&e.title!=='삿포로 TV타워 야경');
    day2Confirmed.events.push({
      time:'20:10',icon:'🌃',title:'삿포로 TV타워 전망대 입장 · 야경',
      desc:'3층 매표소에서 입장권 구입 → 엘리베이터로 전망대 올라가 삿포로 야경 감상\n가족 4인 정가 ¥3,600(성인 2명 ¥2,400 + 초중학생 2명 ¥1,200) · 마지막 입장 21:50\n비가 와도 전망대는 실내지만, 짙은 구름·강풍으로 시야나 운영에 영향 가능',
      place:'tv-tower',route:'suage-tv-tower'
    });
    const hotel=day2Confirmed.events.find(e=>e.title==='호텔 복귀');
    if(hotel)Object.assign(hotel,{time:'21:05',desc:'TV타워 전망대에서 야경을 본 후 숙소로 돌아와 휴식 · 식당 대기 길면 시간 조정'});
    sort(day2Confirmed);
  }
  const day3Confirmed=d(3);
  if(day3Confirmed){
    day3Confirmed.subtitle='신궁 · 우동 · GU · 스탠다드 프로덕츠 · 다이소 · 와규 · 돈키호테';
    day3Confirmed.events=[
      {time:'07:30',icon:'🍳',title:'호텔 조식',desc:'가벼운 쇼핑 가방과 접이식 장바구니 준비'},
      {time:'08:45',icon:'🚇',title:'호텔 → 마루야마코엔역',desc:'도호선 → 오도리 환승 → 도자이선 → 마루야마코엔역',route:'hotel-shrine'},
      {time:'09:20',icon:'⛩',title:'홋카이도 신궁',desc:'가족 단풍 산책 · 공원역에서 약 15분 도보',place:'hokkaido-jingu',route:'hotel-shrine'},
      {time:'10:30',icon:'🍡',title:'롯카테이 신궁차야점',desc:'과자·따뜻한 음료로 휴식',place:'rokkatei'},
      {time:'11:10',icon:'🚇',title:'신궁 → 삿포로역',desc:'마루야마코엔역 → 오도리역 환승 → 삿포로역 아피아 지하상가',route:'shrine-station'},
      {time:'11:50',icon:'🍜',title:'키네야 아피아 · 우동 점심',desc:'JR 삿포로역 지하 아피아 B1F · 가족끼리 가벼운 우동 점심',place:'kineya'},
      {time:'12:50',icon:'👕',title:'GU·유니클로 삿포로 미츠코시',desc:'미츠코시 본관 10층 의류 쇼핑',place:'gu-mitsukoshi',route:'station-shops'},
      {time:'13:50',icon:'🛍',title:'Standard Products moyuk SAPPORO',desc:'moyuk SAPPORO 2층 생활잡화 구경',place:'standard-moyuk',route:'station-shops'},
      {time:'14:40',icon:'🛒',title:'다이소 다누키코지 2초메점',desc:'금시관 빌딩 6층 대형 다이소 · 쇼핑',place:'daiso-tanukikoji2',route:'station-shops'},
      {time:'15:30',icon:'☕',title:'카페 휴식 · 자유 쇼핑',desc:'다누키코지·오도리 주변에서 쉬기 · 쇼핑짐 많으면 호텔에 잠깐 놓고 나와도 좋아요'},
      {time:'19:00',icon:'🥩',title:'토쿠주 신라테이 · 와규 야키니쿠',desc:'가족 4인 마지막 밤 특별 저녁 · 총예산 최대 ¥20,000 · 예약 확정 여부 별도 확인',place:'shinratei',route:'evening-donki'},
      {time:'20:30',icon:'🛍',title:'MEGA 돈키호테 다누키코지',desc:'와규 저녁 이후 마지막 쇼핑 · 24시간 영업',place:'donki-tanukikoji',route:'evening-donki'},
      {time:'21:30',icon:'🏨',title:'호텔 복귀',desc:'내일 귀국을 위해 짐 정리'}
    ];
    sort(day3Confirmed);
  }
  // Remove outdated day-3 remote transport/beer museum routes from all screens.
  delete routes['sapporo-beer'];
  delete routes['museum-odori'];
  delete routes['ario-odori'];
  routes['suage-tv-tower']={
    title:'Suage+ 저녁 → TV타워 전망대 입장',tag:'DAY 2 · 실내 야경',
    time:'20:10 목표 (예약 없는 저녁 식사로 변동 가능)',fare:'전망대 가족 입장료 ¥3,600',
    map:'https://www.google.com/maps/dir/?api=1&origin=Soup+Curry+Suage+Sapporo&destination=Sapporo+TV+Tower&travelmode=walking',
    tip:'TV타워 3층에서 입장권을 구입하고 엘리베이터로 실내 전망대에 올라갑니다. 21:50 최종 입장. 비가 세거나 시야가 나쁘면 현장에서 결정하세요.',
    steps:[
      ['Suage+ 스프카레 식사','スープカレー Suage+','스푸 카레 스아게 푸라스','스프카레 식당','식사 대기시간에 따라 출발 시각 변경.'],
      ['TV타워로 이동','さっぽろテレビ塔','삿포로 테레비토','삿포로 TV타워','오도리공원 동쪽의 TV타워까지 이동.'],
      ['3층 전망대 티켓 구매','展望台 チケット売場','텐보다이 치켓토 우리바','전망대 티켓 매표소','성인 ¥1,200×2 · 초중학생 ¥600×2 = 총 ¥3,600.'],
      ['엘리베이터로 전망대','展望台','텐보다이','실내 전망대','삿포로 중심부의 야경 감상. 비가 오면 시야 확인.'],
      ['숙소 복귀','豊水すすきの','호스이스스키노','호스이스스키노','21시 전후 호텔 복귀, 휴식.']
    ]
  };
  routes['shrine-station']={
    title:'홋카이도 신궁 → 삿포로역 우동',tag:'DAY 3 · 점심',
    time:'약 35~50분(도보·환승 포함)',fare:'지하철',
    map:'https://www.google.com/maps/dir/?api=1&origin=Hokkaido+Jingu&destination=Kineya+Sapporo+Apia&travelmode=transit',
    tip:'원하는 교통편을 Google 지도에서 확인하세요.',
    steps:[
      ['마루야마코엔역 이동','円山公園駅','마루야마코엔에키','마루야마공원역','신궁에서 지하철역으로 이동.'],
      ['오도리역 환승','大通駅','오도리에키','오도리역','도자이선에서 난보쿠선 삿포로역 방면 환승.'],
      ['삿포로역 → 아피아','札幌アピア','삿포로 아피아','삿포로 아피아 지하상가','11:50경 키네야에서 우동 점심.']
    ]
  };
  routes['station-shops']={
    title:'삿포로역 → GU → Standard Products → 다이소',tag:'DAY 3 · 시내 쇼핑',
    time:'점심 이후 12:50~15:30',fare:'지하철 또는 지하보행 + 도보',
    map:'https://www.google.com/maps/dir/?api=1&origin=Kineya+Sapporo+Apia&destination=DAISO+Tanukikoji+2chome+Sapporo&waypoints=GU+Sapporo+Mitsukoshi%7CStandard+Products+moyuk+Sapporo&travelmode=walking',
    tip:'오도리까지 지하철을 타거나 지하보행공간으로 이동해 GU→스탠다드 프로덕츠→다이소 순서로 봐요.',
    steps:[
      ['삿포로역에서 오도리로','大通','오도리','오도리역 주변','도보 또는 지하철 1정거장.'],
      ['미츠코시 GU','札幌三越10階','삿포로 미츠코시 쥿카이','미츠코시 10층','12:50 전후 GU·유니클로.'],
      ['모유쿠 스탠다드 프로덕츠','モユクサッポロ 2F','모유쿠 삿포로 니카이','moyuk 2층','13:50 생활잡화 쇼핑.'],
      ['다누키코지 다이소','ダイソー 狸小路2丁目店','다이소 다누키코지 니초메텐','다이소','14:40 대형점 방문.']
    ]
  };
  routes['evening-donki']={
    title:'신라테이 와규 저녁 → 돈키호테',tag:'DAY 3 · 마지막 밤',
    time:'19:00~21:30',fare:'도보',
    map:'https://www.google.com/maps/dir/?api=1&origin=Tokujyu+Shinratei+Sapporo&destination=MEGA+Don+Quijote+Sapporo+Tanukikoji&travelmode=walking',
    tip:'TV타워 실내 야경은 전날 DAY 2에 관람하므로 DAY 3는 식사 후 돈키호테만 갑니다.',
    steps:[
      ['신라테이 저녁','徳寿 しんら亭','토쿠주 신라테이','신라테이','19:00 와규 야키니쿠. 예약은 별도 확인.'],
      ['돈키호테 쇼핑','MEGAドン・キホーテ札幌狸小路本店','메가 돈키호테 삿포로 다누키코지 혼텐','돈키호테','20:30 전후 기념품과 간식 쇼핑.'],
      ['호텔 귀환','相鉄フレッサイン札幌すすきの','소테츠 후렛사 인 삿포로 스스키노','호텔','짐 정리.']
    ]
  };
  for(const id of ['beer-museum','beer-garden']){
    const at=places.findIndex(x=>x.id===id);if(at>=0)places.splice(at,1);
  }
  change('tv-tower',{
    day:2,rating:'DAY 2 · 전망대 야경',hours:'09:00~22:00 (마지막 입장 21:50)',
    budget:'가족 4인 총 ¥3,600 (성인 2 + 초중학생 2)',
    desc:'10월 21일 수요일 스프카레 저녁 후 3층 매표소에서 전망대 입장권을 사고 올라가 삿포로 야경을 감상해요. 외부 사진만 찍는 일정이 아니에요.',
    recommend:'20:10~20:45 전망대에서 야경 감상. 비가 심하거나 전망대 시야가 흐리면 입장 전 확인하세요.'
  });
  change('suage',{recommend:'DAY 2 온천 후 스프카레 저녁. 대기시간을 보고 20:10 TV타워 전망대 입장을 이어갑니다.'});
  change('shinratei',{recommend:'DAY 3 19시 와규 야키니쿠 후 20:30 MEGA 돈키호테. TV타워 전망대는 DAY 2에 방문.'});
  change('kineya',{recommend:'DAY 3 11:50 우동 점심 후 GU → Standard Products → 다이소로 이동.'});
  const addShop=p=>{const at=places.findIndex(x=>x.id===p.id);if(at>=0)places[at]=p;else places.push(p);};
  addShop({
    id:'gu-mitsukoshi',day:3,type:'쇼핑',name:'GU·유니클로 삿포로 미츠코시',
    jp:'ジーユー 札幌三越店',pron:'지유 삿포로 미츠코시텐',
    image:'./assets/day3-sapporo.jpg',rating:'DAY 3 · 옷 쇼핑',hours:'10:00~20:00',
    budget:'구매액별',location:'삿포로 미츠코시 본관 10층',
    desc:'오도리에서 가족 의류 쇼핑. GU·유니클로를 한곳에서 둘러볼 수 있어요.',
    recommend:'12:50~13:45 GU 방문 다음 moyuk으로 이동.',
    map:'https://www.google.com/maps/search/?api=1&query=GU+Sapporo+Mitsukoshi'
  });
  addShop({
    id:'standard-moyuk',day:3,type:'쇼핑',name:'Standard Products moyuk SAPPORO',
    jp:'スタンダードプロダクツ モユクサッポロ店',pron:'스탄다도 프로다쿠츠 모유쿠 삿포로텐',
    image:'./assets/day3-sapporo.jpg',rating:'DAY 3 · 생활잡화',hours:'10:00~20:00',
    budget:'구매액별',location:'moyuk SAPPORO 2층',
    desc:'다이소 계열 디자인 생활용품 브랜드. 소품·주방용품 쇼핑.',
    recommend:'13:50 전후 방문, 이후 도보로 다누키코지 대형 다이소로.',
    map:'https://www.google.com/maps/search/?api=1&query=Standard+Products+moyuk+Sapporo'
  });
  addShop({
    id:'daiso-tanukikoji2',day:3,type:'쇼핑',name:'다이소 다누키코지 2초메점',
    jp:'ダイソー 狸小路2丁目店',pron:'다이소 다누키코지 니초메텐',
    image:'./assets/day3-sapporo.jpg',rating:'DAY 3 · 대형 다이소',hours:'10:00~21:00',
    budget:'구매액별',location:'금시관 빌딩 6층',
    desc:'다누키코지 대형 다이소. 문구·생활잡화·기념품 쇼핑.',
    recommend:'14:40~15:25 쇼핑 후 카페 또는 호텔에서 여유 있게 쉬기.',
    map:'https://www.google.com/maps/search/?api=1&query=DAISO+Tanukikoji+2chome+Sapporo'
  });
  addShop({
    id:'donki-tanukikoji',day:3,type:'쇼핑',name:'MEGA 돈키호테 삿포로 다누키코지 본점',
    jp:'MEGAドン・キホーテ札幌狸小路本店',pron:'메가 돈키호테 삿포로 다누키코지 혼텐',
    image:'./assets/day3-sapporo.jpg',rating:'DAY 3 · 야간 쇼핑',hours:'24시간',
    budget:'구매액별',location:'삿포로 다누키코지',
    desc:'와규 야키니쿠 저녁 식사 후 마지막으로 들를 쇼핑 장소.',
    recommend:'20:30 전후 쇼핑 후 호텔 복귀.',
    map:'https://www.google.com/maps/search/?api=1&query=MEGA+Don+Quijote+Sapporo+Tanukikoji'
  });


  // Confirmed family plan for 2026-10-22: Hokkaido University + city shopping.
  const updatedOne=d(1);
  if(updatedOne){
    const canal=updatedOne.events.find(e=>e.place==='otaru-canal');
    if(canal)Object.assign(canal,{
      desc:'10/20 오타루 일몰 약 16:45 · 노을을 보고 가스등과 운하 창고 조명이 켜진 뒤까지 가족사진\n16:20~17:10 전후 감상 후 규카츠 역앞점으로 도보 이동 · 노면 주의'
    });
    if(!updatedOne.events.some(e=>e.place==='nikka-sign')){
      updatedOne.events.push({
        time:'20:15',icon:'🌆',title:'[선택] 스스키노 닛카 간판 야경',
        desc:'호텔 체크인 후 모두가 덜 피곤하면 스스키노 사거리 네온 간판 앞에서 10~15분만 가족사진 · 무료\n첫날은 오타루 운하 가스등 야경을 이미 보므로 힘들면 생략',
        place:'nikka-sign',route:'hotel-susukino-night'
      });
    }
    sort(updatedOne);
  }
  const updatedThree=d(3);
  if(updatedThree){
    updatedThree.subtitle='신궁 · 롯카테이 · 홋카이도 대학 · 우동 · 쇼핑 · 와규 · 선택 야경';
    updatedThree.events=updatedThree.events.filter(e=>e.title!=='신궁 → 삿포로역');
    const rokkatei=updatedThree.events.find(e=>e.place==='rokkatei');
    if(rokkatei)Object.assign(rokkatei,{
      time:'10:20',title:'롯카테이 신궁차야점 · 한간사마',
      desc:'신궁 경내의 롯카테이 찻집 · 따뜻한 팥소 떡(判官さま)을 간식으로\n약 15~20분 쉬었다가 홋카이도 대학으로 이동'
    });
    updatedThree.events.push(
      {time:'10:40',icon:'🚇',title:'신궁 → 홋카이도 대학 이동',
       desc:'마루야마코엔역까지 도보 → 도자이선 오도리역 환승 → 난보쿠선 북12조역 → 북13조문\n환승·도보를 감안한 이동 시간 여유 있게 확보',
       route:'shrine-university'},
      {time:'11:25',icon:'🍂',title:'홋카이도 대학 은행나무길',
       desc:'북13조문 근처 약 380m 은행나무길과 대학 캠퍼스의 가을 풍경 감상 · 가족사진\n첫째에게 일본 대학의 분위기를 보여주는 시간 · 무료 · 단풍색은 실제 날씨에 따라 다름',
       place:'hokudai-ginkgo',route:'shrine-university'},
      {time:'12:05',icon:'🚶',title:'홋카이도 대학 → 삿포로역 아피아',
       desc:'산책 후 삿포로역 아피아 지하상가로 도보 약 15~25분 또는 북12조역에서 지하철 이용',
       route:'university-udon'}
    );
    for(const [id,time,desc] of [
      ['kineya','12:30','홋카이도 대학 산책 후 삿포로역 아피아 B1F 우동 점심'],
      ['gu-mitsukoshi','13:30','삿포로 미츠코시 본관 10층 GU·유니클로 쇼핑'],
      ['standard-moyuk','14:30','moyuk SAPPORO 2층 스탠다드 프로덕츠 생활잡화 쇼핑'],
      ['daiso-tanukikoji2','15:15','다누키코지 2초메 대형 다이소 쇼핑']
    ]){
      const e=updatedThree.events.find(x=>x.place===id);
      if(e)Object.assign(e,{time,desc});
    }
    const rest=updatedThree.events.find(e=>e.title==='카페 휴식 · 자유 쇼핑');
    if(rest)Object.assign(rest,{time:'16:05',desc:'시내 카페·자유 쇼핑·호텔에 짐 놓기 · 19:00 저녁 전 충분한 휴식'});
    const donki=updatedThree.events.find(e=>e.place==='donki-tanukikoji');
    if(donki)Object.assign(donki,{time:'20:45',desc:'신라테이 → [선택] 노르베사 관람차 → MEGA 돈키호테 마지막 쇼핑\n관람차를 생략하면 20:30부터 돈키호테 쇼핑 가능',route:'noria-donki'});
    const hotel=updatedThree.events.find(e=>e.title==='호텔 복귀');
    if(hotel)Object.assign(hotel,{time:'21:45',desc:'돈키호테 쇼핑 후 짐 정리 · 다음 날 귀국 준비'});
    updatedThree.events.push({
      time:'20:15',icon:'🎡',title:'[선택] 노르베사 노리아 관람차 야경',
      desc:'신라테이 바로 근처 노르베사 7층에서 한 바퀴 약 10분 · 가족 4명 한 곤돌라 탑승 가능\n성인 ¥1,000×2 + 초중학생 ¥500×2 = 총 ¥3,000\n날씨·대기·피로를 보고 탑승 결정. 생략하면 바로 돈키호테',
      place:'noria',route:'noria-donki'
    });
    sort(updatedThree);
  }
  routes['shrine-university']={
    title:'홋카이도 신궁 → 홋카이도 대학 은행나무길',tag:'DAY 3 · 캠퍼스 산책',
    time:'약 40~55분(도보·환승 포함)',fare:'지하철 도자이선 → 난보쿠선',
    map:'https://www.google.com/maps/dir/?api=1&origin=Hokkaido+Jingu&destination=Hokkaido+University+Ginkgo+Avenue&travelmode=transit',
    tip:'신궁 안 롯카테이에서 간식 후 마루야마코엔역으로 돌아가 오도리역 환승 → 북12조역 하차. 북13조문으로 도보 이동.',
    steps:[
      ['롯카테이 신궁차야','六花亭 神宮茶屋店','롯카테이 진구 차야텐','신궁 안 과자 찻집','참배 후 한간사마를 먹고 10:40 전후 이동 시작.'],
      ['마루야마코엔역','円山公園駅','마루야마코엔에키','마루야마코엔역','도자이선 오도리역 방면 탑승.'],
      ['오도리역 환승','大通駅','오도리에키','오도리역','난보쿠선 아사부(麻生) 방면으로 환승.'],
      ['북12조역 하차','北12条駅','키타주니조에키','북12조역','북13조문까지 도보 이동.'],
      ['홋카이도 대학 은행나무길','北海道大学 イチョウ並木','홋카이도 다이가쿠 이초나미키','은행나무길','약 380m 산책로에서 단풍과 캠퍼스 분위기를 즐겨요.']
    ]
  };
  routes['university-udon']={
    title:'홋카이도 대학 → 삿포로역 아피아 우동',tag:'DAY 3 · 점심 이동',
    time:'약 15~25분(도보 위치별 차이)',fare:'도보 또는 지하철',
    map:'https://www.google.com/maps/dir/?api=1&origin=Hokkaido+University+Ginkgo+Avenue&destination=Kineya+Sapporo+Apia&travelmode=walking',
    tip:'은행나무길을 나온 뒤 남쪽 삿포로역으로 가서 아피아 지하상가로 이동해요.',
    steps:[
      ['북13조문 방향으로 나오기','北13条門','키타주산조몬','홋카이도 대학 북13조문','은행나무길 구경 후 교문 밖으로.'],
      ['삿포로역으로 이동','札幌駅','삿포로에키','삿포로역','도보 약 15~25분 또는 북12조역 지하철로 1정거장.'],
      ['키네야 우동','杵屋 札幌アピア店','키네야 삿포로 아피아텐','아피아 우동집','12:30 전후 점심 식사.']
    ]
  };
  delete routes['shrine-station'];
  if(routes['station-shops']){
    routes['station-shops'].time='12:30 우동 → 13:30 GU → 14:30 Standard Products → 15:15 다이소';
  }
  routes['hotel-susukino-night']={
    title:'숙소 → 스스키노 닛카 간판 야경',tag:'DAY 1 · 선택 관광',
    time:'약 10~15분 사진 산책',fare:'무료',
    map:'https://www.google.com/maps/dir/?api=1&origin=Sotetsu+Fresa+Inn+Sapporo+Susukino&destination=Nikka+Whisky+Sign+Susukino&travelmode=walking',
    tip:'첫날 비행기·오타루 이동으로 피곤하면 생략해도 좋아요. 이미 오타루 운하에서 가스등 야경을 봤어요.',
    steps:[
      ['호텔 체크인','相鉄フレッサイン札幌すすきの','소테츠 후렛사 인 삿포로 스스키노','숙소','캐리어를 받고 체크인 후 컨디션 확인.'],
      ['스스키노 사거리','すすきの交差点','스스키노 코사텐','스스키노 닛카 간판','삿포로 특유의 네온 야경을 짧게 촬영.'],
      ['호텔 복귀','豊水すすきの駅','호스이스스키노에키','호텔 근처 역','첫날은 일찍 휴식.']
    ]
  };
  routes['noria-donki']={
    title:'신라테이 와규 → 노리아 관람차(선택) → 돈키호테',tag:'DAY 3 · 선택 야경',
    time:'20:15 관람차 → 20:45 돈키호테',fare:'관람차 4인 ¥3,000 (선택)',
    map:'https://www.google.com/maps/dir/?api=1&origin=Tokujyu+Shinratei+Sapporo&destination=MEGA+Don+Quijote+Sapporo+Tanukikoji&waypoints=nORBESA+Sapporo&travelmode=walking',
    tip:'신라테이와 노르베사는 같은 남3조 서5초메 지역에 있어요. 한 바퀴 약 10분 탑승 후 돈키호테로 이동합니다. 관람차를 건너뛰면 돈키호테를 더 일찍 갈 수 있어요.',
    steps:[
      ['와규 저녁 식사','徳寿 しんら亭','토쿠주 신라테이','와규 야키니쿠','19:00 전후 식사, 늦어지면 관람차 선택 관광은 생략.'],
      ['노르베사 노리아 관람차','ノルベサ 観覧車ノリア','노르베사 칸란샤 노리아','노르베사 7층','20:15 전후, 한 바퀴 약 10분 · 성인 1천엔, 초중학생 500엔.'],
      ['돈키호테 쇼핑','MEGAドン・キホーテ札幌狸小路本店','메가 돈키호테 삿포로 다누키코지 혼텐','MEGA 돈키호테','20:45 전후 마지막 쇼핑.'],
      ['호텔 복귀','相鉄フレッサイン札幌すすきの','소테츠 후렛사 인 삿포로 스스키노','숙소','쇼핑 짐 정리 후 다음 날 귀국 준비.']
    ]
  };
  const optionalChange=(id,fields)=>{const at=places.findIndex(x=>x.id===id);if(at>=0)Object.assign(places[at],fields);};
  optionalChange('rokkatei',{
    day:3,rating:'DAY 3 · 홋카이도 신궁 경내',
    desc:'홋카이도 과자 브랜드 롯카테이의 신궁차야점. 신궁 안에서 구운 팥소 떡 한간사마(判官さま)를 먹으며 잠깐 쉬는 곳.',
    recommend:'10:20경 신궁 참배 직후 들러 15~20분 휴식하고 홋카이도 대학으로 이동.',
    menu:'한간사마(判官さま) · 과자 · 따뜻한 차'
  });
  optionalChange('kineya',{recommend:'12:30경 홋카이도 대학 은행나무길 산책 후 아피아에서 우동 점심 · 이후 미츠코시 GU 쇼핑'});
  for(const [id,time] of [['gu-mitsukoshi','13:30'],['standard-moyuk','14:30'],['daiso-tanukikoji2','15:15']]){
    const place=places.find(x=>x.id===id);
    if(place)place.recommend=time+' 전후 방문. 오전에는 신궁과 홋카이도 대학을 둘러보고 오후에 쇼핑해요.';
  }
  const addChoicePlace=(p)=>{const at=places.findIndex(x=>x.id===p.id);if(at>=0)places[at]=p;else places.push(p);};
  addChoicePlace({
    id:'hokudai-ginkgo',day:3,type:'관광',name:'홋카이도 대학 은행나무길',
    jp:'北海道大学 イチョウ並木',pron:'홋카이도 다이가쿠 이초나미키',
    image:'./assets/day3-sapporo.jpg',rating:'DAY 3 · 캠퍼스 산책',
    hours:'일반 방문 시 보행 가능한 구역 산책',budget:'무료',
    location:'삿포로 기타구 · 홋카이도 대학 북13조문 부근',
    desc:'북13조문에서 약 380m 이어지는 은행나무길과 캠퍼스. 첫째에게 일본 대학의 분위기를 보여주고 가족사진도 남겨요. 단풍 시기는 매년 날씨에 따라 달라요.',
    recommend:'11:25~12:05 대학 산책 후 삿포로역 아피아로 이동해 우동 점심. 학생들의 수업·연구 공간 출입은 피해주세요.',
    map:'https://www.google.com/maps/search/?api=1&query=Hokkaido+University+Ginkgo+Avenue+Kita13jo'
  });
  addChoicePlace({
    id:'nikka-sign',day:1,type:'관광',name:'스스키노 닛카 간판 네온 야경 (선택)',
    jp:'すすきの交差点 ニッカウヰスキー看板',pron:'스스키노 코사텐 닛카 칸반',
    image:'./assets/day3-sapporo.jpg',rating:'DAY 1 · 가벼운 밤 산책',hours:'밤거리 야경',
    budget:'무료',location:'스스키노 교차로 · 남4조 서3초메',
    desc:'숙소 가까이에서 즐길 수 있는 삿포로 대표 네온 간판 포토 스팟. 첫날 피곤하면 생략.',
    recommend:'20:15경 10~15분만 사진 찍고 호텔에서 쉬세요. 오타루 운하의 가스등 야경이 첫날 메인입니다.',
    map:'https://www.google.com/maps/search/?api=1&query=Nikka+Whisky+Sign+Susukino+Sapporo'
  });
  addChoicePlace({
    id:'noria',day:3,type:'관광',name:'노르베사 노리아 옥상 관람차 (선택)',
    jp:'ノルベサ 観覧車ノリア',pron:'노르베사 칸란샤 노리아',
    image:'./assets/day3-sapporo.jpg',rating:'DAY 3 · 선택 야경',
    hours:'목요일 11:00~23:00 · 마지막 접수 22:50',
    budget:'성인 ¥1,000 × 2, 초중학생 ¥500 × 2 = 가족 ¥3,000',
    location:'삿포로 중앙구 남3조 서5초메 1-1 · 노르베사 7층',
    desc:'신라테이 와규 식당 인근 옥상 관람차. 지상 약 78m에서 한 바퀴 10분간 삿포로 야경을 즐기며 4명이 같은 곤돌라에 탈 수 있어요.',
    recommend:'20:15 전후 탑승 후 20:45 돈키호테로. 강풍·대기·피로를 고려해 선택 방문하세요.',
    map:'https://www.google.com/maps/search/?api=1&query=Norbesa+nORIA+Ferris+Wheel+Sapporo'
  });


  // Day 3 final night: no ferris wheel for a family member who has severe fear of heights.
  // Keep full shopping, then leave bags at the hotel before a short street-level walk.
  const nightDay3=d(3);
  if(nightDay3){
    nightDay3.subtitle='신궁 · 홋카이도 대학 · 시내 쇼핑 · 와규 · 호텔 짐보관 · 네온거리 · 편의점';
    nightDay3.events=nightDay3.events.filter(e=>e.place!=='noria'&&
      e.title!=='[선택] 노르베사 노리아 관람차 야경');
    const donki=nightDay3.events.find(e=>e.place==='donki-tanukikoji');
    if(donki)Object.assign(donki,{
      time:'20:45',title:'MEGA 돈키호테 쇼핑',
      desc:'신라테이 와규 식사 후 마지막 쇼핑 · 짐이 많으면 바로 호텔로 이동',
      route:'last-night-shops'
    });
    const hotelReturn=nightDay3.events.find(e=>e.title==='호텔 복귀');
    if(hotelReturn)Object.assign(hotelReturn,{
      time:'22:20',title:'호텔 최종 복귀',
      desc:'편의점 간식 먹으며 쉬고 내일 귀국 준비 · 첫째와 둘째도 편히 쉴 수 있도록 무리하지 않기'
    });
    nightDay3.events.push(
      {time:'21:30',icon:'🏨',title:'호텔에 쇼핑 짐 내려놓기',
        desc:'소테츠 프레사 인 삿포로 스스키노에 들러 돈키호테 등 쇼핑 짐을 객실에 놓고 가볍게 다시 출발\n호텔 주소: 南5条西2丁目6-1',route:'last-night-shops'},
      {time:'21:45',icon:'🌃',title:'스스키노 네온거리 · 닛카 간판 사진',
        desc:'호텔에서 도보 약 5~7분 예상 · 남4조 서3초메 스스키노 교차로\n지상에서 가족사진 10~15분 · 관람차 없는 무료 야경',
        place:'nikka-sign',route:'hotel-neon-conbini'},
      {time:'22:00',icon:'🏪',title:'패밀리마트 스스키노점 · 편의점 간식',
        desc:'南5条西3丁目11-1 · 24시간 영업\n일본 편의점 디저트·과자·음료 구입 후 바로 호텔 복귀',
        place:'famima-susukino',route:'hotel-neon-conbini'}
    );
    sort(nightDay3);
  }
  delete routes['noria-donki'];
  routes['last-night-shops']={
    title:'신라테이 → 돈키호테 → 호텔에 짐 두기',tag:'DAY 3 · 쇼핑 후 짐 정리',
    time:'19:00 와규 → 20:45 돈키호테 → 21:30 호텔',fare:'도보',
    map:'https://www.google.com/maps/dir/?api=1&origin=Tokujyu+Shinratei+Sapporo&destination=Sotetsu+Fresa+Inn+Sapporo+Susukino&waypoints=MEGA+Don+Quijote+Sapporo+Tanukikoji&travelmode=walking',
    tip:'노르베사 관람차는 일정에서 완전히 삭제했어요. 돈키호테 쇼핑 후 먼저 호텔 객실에 쇼핑 짐을 내려놓고 네온거리 산책을 시작해요.',
    steps:[
      ['신라테이 와규 저녁','徳寿 しんら亭','토쿠주 신라테이','시라오이 와규 식당','19시 전후 가족 저녁 식사.'],
      ['MEGA 돈키호테 쇼핑','MEGAドン・キホーテ札幌狸小路本店','메가 돈키호테 삿포로 다누키코지','돈키호테','20:45 전후 간식·기념품 쇼핑.'],
      ['호텔에 쇼핑 짐 놓기','相鉄フレッサイン 札幌すすきの','소테츠 후렛사 인 삿포로 스스키노','숙소','21:30 전후 객실에 쇼핑 짐을 내려놓고 작은 가방으로 다시 출발.']
    ]
  };
  routes['hotel-neon-conbini']={
    title:'호텔 → 스스키노 닛카 간판 → 패밀리마트 → 호텔',tag:'DAY 3 · 짐 없는 밤 산책',
    time:'약 25~40분 여유롭게',fare:'무료 산책 · 간식값 별도',
    map:'https://www.google.com/maps/dir/?api=1&origin=Sotetsu+Fresa+Inn+Sapporo+Susukino&destination=Sotetsu+Fresa+Inn+Sapporo+Susukino&waypoints=Nikka+Whisky+Sign+Susukino%7CFamilyMart+Sapporo+Susukino+Store&travelmode=walking',
    tip:'숙소에서 닛카 간판까지 도보 약 5~7분 예상. 메인도로와 횡단보도를 이용해 아이들과 밝은 큰길 위주로 움직여요.',
    steps:[
      ['호텔에서 짐 내려놓기','相鉄フレッサイン 札幌すすきの','소테츠 후렛사 인 삿포로 스스키노','호텔','남5조 서2초메 6-1. 쇼핑 짐을 객실에 두고 가볍게 출발.'],
      ['스스키노 닛카 간판','すすきの交差点 ニッカウヰスキー看板','스스키노 코사텐 닛카 칸반','스스키노 교차로','남4조 서3초메, 10~15분 가족사진 촬영.'],
      ['패밀리마트 스스키노점','ファミリーマート 札幌すすきの店','파미리 마토 삿포로 스스키노텐','패밀리마트','남5조 서3초메 11-1, 24시간. 디저트·주먹밥·음료 구입.'],
      ['숙소 복귀','相鉄フレッサイン 札幌すすきの','소테츠 후렛사 인 삿포로 스스키노','호텔','구입한 간식을 들고 귀가해 편하게 휴식.']
    ]
  };
  const wheelPos=places.findIndex(p=>p.id==='noria');
  if(wheelPos>=0)places.splice(wheelPos,1);
  const nightSign=places.find(p=>p.id==='nikka-sign');
  if(nightSign)Object.assign(nightSign,{
    day:3,rating:'DAY 3 · 호텔 짐 내려놓고 네온거리',
    desc:'호텔에서 도보 약 5~7분 거리로 예상되는 스스키노 교차로의 대표 네온 사진 명소. 높은 곳에 오르지 않고 거리에서 사진을 찍어요.',
    recommend:'돈키호테 쇼핑 후 호텔에 짐을 두고 21:45경 가족사진 → 편의점 간식 → 호텔.'
  });
  const fam={
    id:'famima-susukino',day:3,type:'쇼핑',name:'패밀리마트 삿포로 스스키노점',
    jp:'ファミリーマート 札幌すすきの店',pron:'파미리 마토 삿포로 스스키노텐',
    image:'./assets/day3-sapporo.jpg',rating:'DAY 3 · 마지막 편의점 간식',hours:'24시간',
    budget:'구매액별',location:'삿포로 남5조 서3초메 11-1',
    desc:'네온 간판 구경을 마치고 호텔로 돌아가는 길에 들를 수 있는 편의점. 과자·아이스크림·음료·가벼운 야식 구입.',
    recommend:'22시 전후 쇼핑, 객실로 돌아가 가족끼리 간식을 즐기며 여행을 마무리해요.',
    map:'https://www.google.com/maps/search/?api=1&query=FamilyMart+Sapporo+Susukino+3-11-1+Minami+5'
  };
  const famAt=places.findIndex(p=>p.id===fam.id);
  if(famAt>=0)places[famAt]=fam;else places.push(fam);
  const donkiPlace=places.find(p=>p.id==='donki-tanukikoji');
  if(donkiPlace)donkiPlace.recommend='20:45 전후 쇼핑 → 21:30 호텔에 짐 내려놓기 → 스스키노 닛카 간판·패밀리마트 야간 산책.';

  // On-the-ground change on Oct 21: skip Hokkaido University and go from Hokkaido Shrine to GU.
  const cityToday=days.find(x=>x.day===2);
  if(cityToday){
    cityToday.subtitle='홋카이도 신궁 · GU · 시내 쇼핑 · 와규 · 네온거리 (대학 생략)';
    cityToday.events=cityToday.events.filter(e=>e.place!=='hokudai-ginkgo'&&!e.title.includes('홋카이도 대학')&&!e.title.includes('신궁 → 대학'));
    const oldTransfer=cityToday.events.find(e=>e.title.includes('대학 →')||e.title.includes('신궁 → 삿포로역'));
    if(oldTransfer)Object.assign(oldTransfer,{time:'11:45',icon:'🚇',title:'신궁 → 오도리역 · GU로 이동',desc:'마루야마코엔역에서 도자이선 신삿포로 방면 3정거장 → 오도리역 → 미츠코시 GU',route:'shrine-gu'});
    else cityToday.events.push({time:'11:45',icon:'🚇',title:'신궁 → 오도리역 · GU로 이동',desc:'마루야마코엔역 → 도자이선 신삿포로 방면 3정거장 → 오도리역 → 미츠코시 GU',route:'shrine-gu'});
    cityToday.events=cityToday.events.filter(e=>e.place!=='kineya');
    const gu=cityToday.events.find(e=>e.place==='gu-mitsukoshi');
    if(gu)Object.assign(gu,{time:'12:15',desc:'홋카이도 대학 생략 · 오도리역에서 미츠코시 GU로 바로 이동'});
    cityToday.events.push({time:'13:15',icon:'🍜',title:'쇼핑 중 점심 · 현장 선택',desc:'GU 쇼핑 상황에 맞춰 오도리·다누키코지 인근 식당에서 점심'});
    for(const [id,time] of [['standard-moyuk','14:15'],['daiso-tanukikoji2','15:00']]){
      const e=cityToday.events.find(x=>x.place===id);if(e)e.time=time;
    }
    cityToday.events.sort((a,b)=>a.time.localeCompare(b.time));
    routes['shrine-gu']={
      title:'홋카이도 신궁 → 미츠코시 GU',tag:'DAY 2 · 대학 생략',time:'지하철 3정거장 + 도보',fare:'도자이선',
      map:'https://www.google.com/maps/dir/?api=1&origin=Hokkaido+Jingu&destination=GU+Sapporo+Mitsukoshi&travelmode=transit',
      tip:'円山公園역에서 新さっぽろ 방면 탑승 → 西18丁目 → 西11丁目 → 大通역 하차 후 삿포로 미츠코시로 이동.',
      steps:[['마루야마코엔역','円山公園駅','마루야마코엔에키','도자이선 역','신궁에서 역으로 도보 이동'],
      ['신삿포로 방면 탑승','新さっぽろ方面','신삿포로 호멘','도자이선','오도리까지 3정거장'],
      ['오도리역 하차','大通駅','오도리에키','오도리역','미츠코시 방향 출구 및 지하 연결통로 확인'],
      ['GU 쇼핑','札幌三越','삿포로 미츠코시','미츠코시','백화점 내 GU 위치 안내 확인']]
    };
    const university=places.find(x=>x.id==='hokudai-ginkgo');
    if(university)Object.assign(university,{rating:'이번 여행 일정에서 제외',recommend:'10월 21일 현장 일정 변경으로 방문 생략. GU와 시내 쇼핑에 시간을 배정합니다.'});
  }

  // 2026-10-21 decision: move wagyu dinner from shopping day to after Jozankei.
  const shoppingDay=days.find(x=>x.day===2);
  const onsenDay=days.find(x=>x.day===3);
  if(shoppingDay&&onsenDay){
    shoppingDay.events=shoppingDay.events.filter(e=>e.place!=='shinratei');
    shoppingDay.subtitle='신궁 · GU · 트램 · Standard Products · 다이소 · 돈키호테 · 네온거리';
    const streetcarPresent=shoppingDay.events.some(e=>e.title.includes('트램 순환'));
    if(!streetcarPresent)shoppingDay.events.push({
      time:'14:10',icon:'🚋',title:'삿포로 트램 한 바퀴 (선택)',
      desc:'西4丁目(니시4초메) 출발 → 순환 약 55분 → 같은 정류장 하차 · 운행 종료편인지 탑승 전 확인',
      route:'odori-tram-loop'
    });
    for(const [id,time] of [['standard-moyuk','15:15'],['daiso-tanukikoji2','16:10'],['donki-tanukikoji','17:00']]){
      const e=shoppingDay.events.find(x=>x.place===id);
      if(e)e.time=time;
    }
    const hotelBag=shoppingDay.events.find(e=>e.title.includes('쇼핑 짐 내려놓기'));
    if(hotelBag)hotelBag.time='19:15';
    shoppingDay.events.sort((a,b)=>a.time.localeCompare(b.time));
    onsenDay.events=onsenDay.events.filter(e=>e.place!=='suage');
    onsenDay.events.push({
      time:'19:00',icon:'🥩',title:'토쿠주 신라테이 · 와규 야키니쿠 저녁',
      desc:'조잔케이에서 일반버스·지하철로 복귀 후 가족 4인 와규 저녁 · 예약 여부 확인 필요, 귀가 버스 지연 시 시간 조정',
      place:'shinratei'
    });
    const tv=onsenDay.events.find(e=>e.place==='tv-tower');
    if(tv)Object.assign(tv,{time:'20:45',desc:'온천·버스 이동과 와규 저녁 후 여유가 있을 때만 선택 방문 · 마지막 입장 확인'});
    onsenDay.subtitle='조잔케이 눈 구경 · 신사 · 유노하나 온천 · 와규 저녁';
    onsenDay.events.sort((a,b)=>a.time.localeCompare(b.time));
    const wagyu=places.find(p=>p.id==='shinratei');
    if(wagyu)Object.assign(wagyu,{day:3,rating:'DAY 3 · 조잔케이 후 와규 저녁',
      recommend:'10월 22일 온천 후 삿포로 복귀하여 19시경 저녁. 버스 시간 및 좌석 예약 여부에 따라 유동 조정.'});
    const soup=places.find(p=>p.id==='suage');
    if(soup)Object.assign(soup,{rating:'일정 외 · 대체 식당',recommend:'10월 22일 저녁은 와규로 변경. 스프카레는 원할 때만 대안으로 이용.'});
    routes['odori-tram-loop']={
      title:'오도리 니시4초메 → 시영 트램 한 바퀴',tag:'DAY 2 · 선택 관광',
      time:'약 50~60분',fare:'탑승 시 현장 요금 확인',
      map:'https://www.google.com/maps/search/?api=1&query=Nishi+4+Chome+Streetcar+Stop+Sapporo',
      tip:'내선 또는 외선 순환 어느 쪽도 한 바퀴 뒤 西4丁目으로 돌아옵니다. 중간 운행 종료 여부는 탑승 전 확인.',
      steps:[['니시4초메 정류장','西4丁目','니시욘초메','트램 정류장','오도리역 인근'],
      ['순환 노선 탑승','内回り / 外回り','우치마와리 / 소토마와리','내선 / 외선','차량 목적지·운행 종료 여부 확인'],
      ['니시4초메 복귀','西4丁目','니시욘초메','하차','moyuk 스탠다드 프로덕츠로 도보 이동']]
    };
  }
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

  // 2026-10-21 family change: city on Wednesday, Jozankei by regular bus Thursday.
  // Do not touch cloud-synced places, saved expenses, favorites, or user notes.
  const city=days.find(x=>x.day===2), valley=days.find(x=>x.day===3);
  if(city&&valley){
    const previousCityEvents=city.events, previousValleyEvents=valley.events;
    city.events=previousValleyEvents;
    valley.events=previousCityEvents;
    city.date='10.21 (수)';
    valley.date='10.22 (목)';
    city.title='삿포로 신궁 · 대학 · 쇼핑';
    city.subtitle='홋카이도 신궁 · 대학 은행나무길 · 쇼핑 · 와규 · 네온거리';
    city.image='./assets/day3-sapporo.jpg';
    valley.title='조잔케이 첫눈 · 온천';
    valley.subtitle='일반버스 환승 · 눈 구경 · 조잔케이 신사 · 유노하나 온천';
    valley.image='./assets/day2-jozankei.jpg';
    const changeEvent=(events,match,changes)=>{const e=events.find(match);if(e)Object.assign(e,changes);};
    city.events=city.events.filter(e=>!e.title.includes('갓파라이너'));
    valley.events=valley.events.filter(e=>!e.title.includes('갓파라이너')&&!e.title.includes('비 오는 날과 눈 오는 날'));
    // Public bus timetable is subject to weather and final day-of confirmation.
    valley.events=valley.events.filter(e=>!['호텔 → 갓파라이너 정류장','조잔케이 → 스스키노'].includes(e.title));
    changeEvent(valley.events,e=>e.title==='호텔 조식',{time:'07:00',desc:'온천용 작은 가방 · 방한복 · 미끄럼 방지 신발 준비'});
    valley.events.push(
      {time:'08:05',icon:'🚇',title:'호텔 → 스스키노역 → 마코마나이역',desc:'호텔에서 스스키노역 3번 출구까지 도보 약 4분 → 08:15 난보쿠선 真駒内행(약 15분) → 마코마나이역 08:30 도착 → 일반버스 승강장 이동',route:'hotel-jozankei'},
      {time:'08:51',icon:'🚌',title:'12번 계열 일반버스 탑승 (예정)',desc:'마코마나이역 → 定山渓神社前(조잔케이 신사 앞) 약 09:31 도착 예상\\n예약 불필요 · 평일 출발시간과 운행여부 아침에 재확인 · 좌석 보장 없음',route:'hotel-jozankei'},
      {time:'16:20',icon:'🚶',title:'온천 마무리 · 일반버스 정류장 이동',desc:'버스 운행시간 현장 확인 후 차고 앞 또는 가까운 정류장으로 이동 · 출발 15분 전 도착',route:'jozankei-return'},
      {time:'16:30',icon:'🚌',title:'일반버스로 귀가 (시간 미확정)',desc:'조잔케이 → 마코마나이역 12번 계열 일반버스 → 지하철 난보쿠선 → 스스키노\\n16:30~17:30대 출발편 중 현장 시간표 확인 후 탑승 · 예약제 17:06 갓파라이너와 혼동 금지',route:'jozankei-return'}
    );
    changeEvent(valley.events,e=>e.place==='jozankei-shrine',{time:'09:40',desc:'눈발 예보에 맞춰 조잔케이 신사 참배 · 눈이 쌓이거나 얼면 짧게 구경'});
    changeEvent(valley.events,e=>e.place==='futami',{time:'10:30',desc:'눈 구경과 온천마을 산책 · 현수교는 우회로 개방·미끄럼 상태 확인 후 선택'});
    changeEvent(valley.events,e=>e.place==='shokudo-ichi',{time:'12:00',desc:'점심식사 · 매장 운영과 대기상황 현장 확인'});
    changeEvent(valley.events,e=>e.place==='yunohana',{time:'13:00',desc:'가족 온천·휴식 약 3시간 · 16시대 일반버스 시간표에 맞춰 마무리'});
    changeEvent(valley.events,e=>e.place==='suage',{time:'18:30',desc:'시내 복귀 후 스프카레 저녁 · 버스 실제 도착 시각에 따라 조정'});
    changeEvent(valley.events,e=>e.place==='tv-tower',{time:'20:10',desc:'체력과 시야가 괜찮을 때만 TV타워 전망대 선택 방문'});
    for(const e of valley.events){if(e.title==='호텔 복귀'||e.title==='호텔 최종 복귀')e.time='21:10';}
    city.events.sort((a,b)=>a.time.localeCompare(b.time));
    valley.events.sort((a,b)=>a.time.localeCompare(b.time));
    for(const p of places){if(p.day===2)p.day=3;else if(p.day===3)p.day=2;
      if(p.rating)p.rating=p.rating.replace(/DAY 2/g,'DAY_TMP').replace(/DAY 3/g,'DAY 2').replace(/DAY_TMP/g,'DAY 3');
    }
    for(const [key,route] of Object.entries(routes)){
      if(route.tag)route.tag=route.tag.replace(/DAY 2/g,'DAY_TMP').replace(/DAY 3/g,'DAY 2').replace(/DAY_TMP/g,'DAY 3');
    }
    routes['hotel-jozankei']={
      title:'스스키노 → 마코마나이 → 조잔케이 신사',tag:'DAY 3 · 예약 없는 일반버스',
      time:'08:51 출발 목표 · 약 09:31 도착 예상',fare:'지하철 + 조테츠 일반버스',
      map:'https://www.google.com/maps/dir/?api=1&origin=Susukino+Station+Sapporo&destination=Jozankei+Shrine&travelmode=transit',
      tip:'갓파라이너 오전편은 매진. 스스키노역에서 난보쿠선 真駒内행으로 종점 이동 → 조테츠 12J/12H 등 조잔케이 방향 일반버스. 08:51 평일 시각과 운행 상태는 출발 전 재확인하세요.',
      steps:[
        ['스스키노역 탑승','すすきの駅 南北線','스스키노에키 난보쿠센','지하철 난보쿠선','真駒内(마코마나이)행 탑승'],
        ['마코마나이역 하차','真駒内駅','마코마나이에키','마코마나이역','남쪽 버스터미널의 조잔케이행 승강장과 실제 버스 표시 확인'],
        ['조테츠 일반버스 탑승','じょうてつバス 12J / 12H','조테츠 바스','예약 없는 일반버스','08:51 목표 · 현지 평일 시간표·운행 여부 확인 · 만석일 때 다음 차'],
        ['조잔케이 신사 앞 하차','定山渓神社前','조잔케이 진자마에','조잔케이 신사 앞','09:31 전후 예상 · 도착하면 눈 구경과 신사 산책']
      ]
    };
    routes['jozankei-return']={
      title:'조잔케이 → 마코마나이 → 스스키노',tag:'DAY 3 · 일반버스 귀가',
      time:'16:30~17:30대 후보 · 정확한 출발시각 확인 필요',fare:'조테츠 일반버스 + 지하철',
      map:'https://www.google.com/maps/dir/?api=1&origin=Jozankei+Onsen&destination=Susukino+Station+Sapporo&travelmode=transit',
      tip:'예약제 갓파라이너 17:06편은 매진이므로 이용 불가. 일반버스 12J/12H 등 마코마나이역 방면 출발시간을 정류장 현장 안내에서 확인하고 15분 일찍 대기하세요.',
      steps:[
        ['온천 마무리','湯の花 定山渓殿','유노하나 조잔케이덴','유노하나 온천','16시대에 옷 갈아입고 나올 준비'],
        ['일반버스 정류장 확인','定山渓車庫前','조잔케이 샤코마에','조잔케이 차고 앞','실제 12번 계열 버스 정차 정류장과 시간 확인'],
        ['마코마나이행 일반버스','真駒内駅行き','마코마나이에키 유키','마코마나이역행','시간 미확정 · 일반버스 노선번호·방향 확인'],
        ['지하철 난보쿠선 환승','南北線 すすきの方面','난보쿠센 스스키노 호멘','스스키노 방면','마코마나이역에서 지하철로 이동']
      ]
    };
    // Preserve existing map routing, expenses, and checklist behavior; update stale transit entries only.
    if(typeof checklistData!=='undefined'&&checklistData['여행 중']){
      for(const c of checklistData['여행 중'])if(typeof c[1]==='string'&&c[1].includes('갓파라이너')){c[1]='조잔케이 일반버스 시간 확인';c[2]='10/22 마코마나이 환승·귀가편 현장 확인';}
    }
    if(typeof render==='function'&&document.querySelector('#app'))render();
  }

})();