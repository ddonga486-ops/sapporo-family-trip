const APP = {
  tripStart: new Date('2026-10-20T00:00:00+09:00'),
  tripEnd: new Date('2026-10-23T23:59:59+09:00'),
  installPrompt: null,
  state: { view: 'home', day: 1, dayTab: 'schedule', placeFilter: '전체', jpTab: '기본 회화', checkTab: '출발 전' }
};

const days = [
  {
    day:1,date:'10.20 (화)',title:'오타루',subtitle:'공항 짐배송 → 바로 오타루',image:'./assets/day1-otaru.jpg',
    events:[
      {time:'07:10',icon:'✈',title:'인천 출발',desc:'인천국제공항 → 신치토세공항'},
      {time:'10:00',icon:'🛬',title:'신치토세공항 도착',desc:'입국심사 · 위탁수하물 수령'},
      {time:'11:15',icon:'🧳',title:'공항에서 캐리어 숙소 배송',desc:'캐리어만 소테츠 프레사 인 삿포로 스스키노로 당일 배송\n가족은 숙소에 들르지 않음',route:'airport-otaru'},
      {time:'11:35',icon:'🚆',title:'신치토세공항 → 바로 오타루',desc:'快速エアポート(카이소쿠 에아포토) · 小樽行き(오타루유키) 직통 우선',route:'airport-otaru'},
      {time:'13:00',icon:'🍗',title:'나루토 본점 점심',desc:'닭 반마리 튀김 + 초밥/해산물',place:'naruto'},
      {time:'14:05',icon:'📷',title:'오타루 운하 산책',desc:'가을 운하 사진 · 창고거리',place:'otaru-canal'},
      {time:'14:35',icon:'🍁',title:'사카이마치 거리',desc:'상점가 · 기념품 구경'},
      {time:'15:20',icon:'🎵',title:'오타루 오르골당',desc:'오르골 · 기념품 관람'},
      {time:'16:00',icon:'🍰',title:'LeTAO PATHOS',desc:'치즈케이크 · 커피 휴식',place:'letao'},
      {time:'17:10',icon:'🚆',title:'미나미오타루 → 삿포로',desc:'南小樽駅 → JR札幌駅',route:'otaru-hotel'},
      {time:'18:35',icon:'🏨',title:'호텔 체크인 · 캐리어 수령',desc:'이때 처음 숙소 방문'},
      {time:'19:20',icon:'🍛',title:'스프카레 Suage+',desc:'닭고기·채소 스프카레',place:'suage'}
    ]
  },
  {
    day:2,date:'10.21 (수)',title:'조잔케이 온천',subtitle:'단풍 · 온천 3시간 · TV타워 야경',image:'./assets/day2-jozankei.jpg',
    events:[
      {time:'07:30',icon:'🍳',title:'호텔 조식',desc:'호텔 조식 후 온천용 작은 가방 준비'},
      {time:'08:20',icon:'🚶',title:'호텔 → 갓파라이너 정류장',desc:'스스키노 정류장으로 도보 이동',route:'hotel-jozankei'},
      {time:'09:18',icon:'🚌',title:'갓파라이너 출발',desc:'すすきの → 定山渓神社前\n09:18 → 10:05',route:'hotel-jozankei'},
      {time:'10:05',icon:'⛩',title:'조잔케이 신사',desc:'定山渓神社 · 단풍 산책'},
      {time:'10:35',icon:'🌉',title:'후타미공원 · 현수교',desc:'계곡 단풍 핵심 구간'},
      {time:'11:30',icon:'🍱',title:'食堂いち 점심',desc:'숯불 닭 정식 · 연어 정식'},
      {time:'12:20',icon:'🍨',title:'雨ノ日と雪ノ日',desc:'비에이 저지우유 젤라토'},
      {time:'13:05',icon:'♨',title:'유노하나 조잔케이덴',desc:'온천 3시간 · 16:05 가족 집합'},
      {time:'17:06',icon:'🚌',title:'조잔케이 → 스스키노',desc:'定山渓車庫前 17:06 → すすきの 18:05',route:'jozankei-return'},
      {time:'18:10',icon:'🍣',title:'네무로 하나마루',desc:'COCONO SUSUKINO B1 회전초밥'},
      {time:'19:30',icon:'🌃',title:'삿포로 TV타워 야경',desc:'오도리 야경 · 전망대'},
      {time:'20:20',icon:'🌙',title:'호텔 복귀',desc:'컨디션 좋으면 오도리공원 10~15분 산책'}
    ]
  },
  {
    day:3,date:'10.22 (목)',title:'삿포로 시내 · 쇼핑',subtitle:'신궁 · 쇼핑 · 맥주박물관 · 징기스칸',image:'./assets/day3-sapporo.jpg',
    events:[
      {time:'07:30',icon:'🍳',title:'호텔 조식',desc:'쇼핑용 접이식 가방 준비'},
      {time:'08:45',icon:'🚇',title:'호텔 → 마루야마코엔역',desc:'東豊線 → 大通 환승 → 東西線',route:'hotel-shrine'},
      {time:'09:20',icon:'⛩',title:'홋카이도 신궁',desc:'円山公園駅 3번 출구 → 도보 약 15분',route:'hotel-shrine'},
      {time:'10:30',icon:'🍡',title:'롯카테이 신궁차야점',desc:'구운 떡·과자 · 따뜻한 음료'},
      {time:'11:30',icon:'🛍',title:'Standard Products',desc:'moyuk SAPPORO 2F'},
      {time:'12:30',icon:'🍖',title:'돈카츠 와코',desc:'삿포로 스텔라플레이스 센터 6F',place:'wako'},
      {time:'13:30',icon:'🚌',title:'188번 버스 → 비어가든',desc:'札幌駅北口 2번 승강장 · 종점 하차',route:'sapporo-beer'},
      {time:'13:50',icon:'🛍',title:'아리오 삿포로',desc:'GU · DAISO 집중 쇼핑'},
      {time:'15:10',icon:'🍺',title:'삿포로 맥주박물관',desc:'자유견학 · 굿즈 · 시음 선택'},
      {time:'17:00',icon:'🥩',title:'삿포로 비어가든',desc:'징기스칸 저녁 · 가족 4인 예약 권장',place:'beer-garden'},
      {time:'19:10',icon:'🛒',title:'MEGA 돈키호테',desc:'삿포로 다누키코지 본점 · 마지막 쇼핑'},
      {time:'20:30',icon:'🏨',title:'호텔 귀환',desc:'쇼핑 짐 정리 · 공항 구매목록 확인'}
    ]
  },
  {
    day:4,date:'10.23 (금)',title:'신치토세공항',subtitle:'공항을 관광지처럼 · 16:00 귀국',image:'./assets/day4-airport.jpg',
    events:[
      {time:'07:30',icon:'🍳',title:'호텔 조식',desc:'마지막 조식 · 수하물 정리'},
      {time:'08:20',icon:'🏨',title:'체크아웃 준비',desc:'여권 · 충전기 · 객실 최종 확인'},
      {time:'08:50',icon:'🚇',title:'호텔 → JR 삿포로역',desc:'豊水すすきの駅 → さっぽろ駅',route:'hotel-airport'},
      {time:'09:15',icon:'🚆',title:'삿포로 → 신치토세공항',desc:'快速エアポート · 큰 캐리어면 Uシート 고려',route:'hotel-airport'},
      {time:'10:00',icon:'🧳',title:'공항 캐리어 임시보관',desc:'짐 맡긴 뒤 가볍게 공항 구경'},
      {time:'10:20',icon:'🍫',title:"ROYCE' Chocolate World",desc:'초콜릿 · 베이커리 · Smile Road'},
      {time:'11:10',icon:'🎀',title:'Hello Kitty Happy Flight',desc:'숍 위주로 가볍게 구경'},
      {time:'11:30',icon:'🍜',title:'홋카이도 라멘 도죠',desc:'이치겐 새우 / 케야키 미소 / 아지사이 시오'},
      {time:'12:30',icon:'🎁',title:'공항 기념품 쇼핑',desc:'로이즈 · 르타오 · 시로이코이비토'},
      {time:'13:10',icon:'🧳',title:'캐리어 찾기 · 재포장',desc:'보조배터리는 기내수하물'},
      {time:'13:30',icon:'🛂',title:'국제선 체크인 · 출국심사',desc:'수하물 위탁 → 보안검색 → 출국심사'},
      {time:'16:00',icon:'✈',title:'한국행 출발',desc:'즐거운 귀국!'}
    ]
  }
];

const routes = {
  'airport-otaru': {
    title:'신치토세공항 → 오타루', tag:'DAY 1 · 핵심', time:'약 75분', fare:'JR 이용', map:'https://www.google.com/maps/dir/?api=1&origin=New+Chitose+Airport&destination=Otaru+Station&travelmode=transit',
    tip:'캐리어는 공항에서 숙소로 보내고, 사람은 숙소에 들르지 않고 바로 오타루로 갑니다.',
    steps:[
      ['짐 배송 접수','手荷物当日配送','테니모츠 토지츠 하이소','수하물 당일배송','공항 배송 카운터에서 호텔명과 주소를 보여주고 캐리어를 맡겨요. 접수증은 꼭 사진으로 남겨요.'],
      ['JR 표지 따라 B1 이동','JR線 / 新千歳空港駅','제이아루센 / 신치토세쿠코에키','JR선 / 신치토세공항역','배송 접수 후 숙소로 가지 말고 JR Line 표지만 따라 지하 1층으로 내려가요.'],
      ['오타루행 쾌속 확인','快速エアポート 小樽行き','카이소쿠 에아포토 오타루유키','쾌속 에어포트 오타루행','전광판에서 `小樽` 글자를 먼저 찾아요. 직통이면 그대로 탑승합니다.'],
      ['직통이 없으면 삿포로 환승','札幌駅で乗り換え','삿포로에키데 노리카에','삿포로역에서 환승','札幌행을 탄 뒤 JR札幌駅에서 小樽 방향 열차로 갈아타면 됩니다.'],
      ['오타루역 하차','小樽駅','오타루에키','오타루역','오타루역에 내리면 그때부터 관광 시작. 호텔은 저녁까지 가지 않습니다.']
    ]
  },
  'otaru-hotel':{
    title:'미나미오타루 → 호텔',tag:'DAY 1 · 저녁',time:'약 60~75분',fare:'JR + 지하철',map:'https://www.google.com/maps/dir/?api=1&origin=Minami-Otaru+Station&destination=Sotetsu+Fresa+Inn+Sapporo-Susukino&travelmode=transit',tip:'오르골당·르타오를 본 뒤에는 오타루역으로 되돌아가기보다 미나미오타루역이 편합니다.',
    steps:[
      ['미나미오타루역 이동','南小樽駅','미나미오타루에키','미나미오타루역','르타오에서 도보 약 10~15분.'],
      ['삿포로 방향 JR 탑승','札幌方面','삿포로 호멘','삿포로 방면','전광판에서 札幌 방향을 확인하고 탑승해요.'],
      ['JR삿포로역 하차','札幌駅','삿포로에키','삿포로역','JR 개찰 밖으로 나온 뒤 地下鉄 東豊線 표지를 찾습니다.'],
      ['도호선 후쿠즈미 방면','東豊線 福住方面','도호센 후쿠즈미 호멘','도호선 후쿠즈미 방면','지하철 さっぽろ駅에서 탑승해 2정거장 이동.'],
      ['호스이스스키노 4번 출구','豊水すすきの駅 4番出口','호스이스스키노에키 욘반 데구치','호스이스스키노역 4번 출구','4번 출구에서 호텔까지 약 1분. 저녁에 처음 체크인합니다.']
    ]
  },
  'hotel-jozankei':{
    title:'호텔 → 조잔케이',tag:'DAY 2 · 예약 버스',time:'09:18 → 10:05',fare:'갓파라이너',map:'https://www.google.com/maps/search/?api=1&query=Jotetsu+Bus+Susukino+Sapporo',tip:'갓파라이너는 예약제로 잡아두고, 출발 15분 전에는 정류장에 도착하는 편이 안전해요.',
    steps:[
      ['호텔 출발','相鉄フレッサイン札幌すすきの','소테츠 후렛사 인 삿포로 스스키노','호텔','08:20 전후 출발. 스스키노 교차로 방향으로 걸어요.'],
      ['스스키노 정류장 찾기','じょうてつバス すすきの','조테츠 바스 스스키노','조테츠버스 스스키노 정류장','지하철 すすきの駅 2-C 출구 인근에서 정류장 이름을 확인합니다.'],
      ['갓파라이너 탑승','かっぱライナー号','갓파 라이너고','갓파라이너호','버스 전면 표시와 예약자 이름을 확인. 09:18 출발.'],
      ['조잔케이 신사 앞 하차','定山渓神社前','조잔케이 진자마에','조잔케이 신사 앞','10:05 도착 예정. 정류장 이름이 바로 첫 관광지예요.']
    ]
  },
  'jozankei-return':{
    title:'조잔케이 → 스스키노',tag:'DAY 2 · 야경 연결',time:'17:06 → 18:05',fare:'갓파라이너',map:'https://www.google.com/maps/dir/?api=1&origin=Jozankei+Onsen&destination=Susukino+Sapporo&travelmode=transit',tip:'온천은 16:05에 마치고, 16:45 전후에는 조잔케이 차고 앞 정류장에서 기다리는 일정입니다.',
    steps:[
      ['온천 마무리','湯の花 定山渓殿','유노하나 조잔케이덴','유노하나 조잔케이관','15:45부터 씻고 머리 말리기 시작 → 16:05 가족 집합.'],
      ['버스정류장 이동','定山渓車庫前','조잔케이 샤코마에','조잔케이 차고 앞','시간 여유를 두고 정류장 위치를 먼저 잡아요.'],
      ['17:06 버스 탑승','かっぱライナー号','갓파 라이너고','갓파라이너호','예약 화면 확인 후 탑승.'],
      ['스스키노 도착','すすきの','스스키노','스스키노','18:05 예정. 바로 COCONO SUSUKINO 저녁 식사로 이동.']
    ]
  },
  'hotel-shrine':{
    title:'호텔 → 홋카이도 신궁',tag:'DAY 3 · 지하철',time:'약 35~50분',fare:'도호선 + 도자이선',map:'https://www.google.com/maps/dir/?api=1&origin=Sotetsu+Fresa+Inn+Sapporo-Susukino&destination=Hokkaido+Jingu&travelmode=transit',tip:'핵심은 오도리역에서 東西線(도자이선)으로 갈아타는 것. 방향은 宮の沢(미야노사와)입니다.',
    steps:[
      ['호스이스스키노역 4번 출구','豊水すすきの駅','호스이스스키노에키','호스이스스키노역','호텔 바로 앞 역으로 들어가요.'],
      ['도호선 사카에마치 방면','東豊線 栄町方面','도호센 사카에마치 호멘','도호선 사카에마치 방면','1정거장 大通駅까지 갑니다.'],
      ['오도리에서 도자이선 환승','東西線 乗り換え','도자이센 노리카에','도자이선 환승','개찰 밖으로 나가지 말고 환승 표지를 따라가요.'],
      ['미야노사와 방면 탑승','宮の沢方面','미야노사와 호멘','미야노사와 방면','3정거장 후 円山公園駅.'],
      ['마루야마코엔 3번 출구','円山公園駅 3番出口','마루야마코엔에키 산반 데구치','마루야마공원역 3번 출구','공원 안 표지를 따라 약 15분 걸으면 홋카이도 신궁.']
    ]
  },
  'sapporo-beer':{
    title:'삿포로역 → 비어가든',tag:'DAY 3 · 버스',time:'직행 약 7분',fare:'188번 버스',map:'https://www.google.com/maps/dir/?api=1&origin=Sapporo+Station&destination=Sapporo+Beer+Museum&travelmode=transit',tip:'삿포로역 북쪽출구 2번 승강장만 기억하면 쉬워요. 188번은 종점이 비어가든입니다.',
    steps:[
      ['삿포로역 북쪽출구','札幌駅 北口','삿포로에키 키타구치','삿포로역 북쪽출구','JR札幌駅 안에서 北口 표지를 따라가요.'],
      ['2번 승강장','2番のりば','니반 노리바','2번 승강장','바깥에서 2番のりば 표지를 찾습니다.'],
      ['188번 탑승','188 サッポロビール園・アリオ線','햐쿠하치주하치 삿포로 비루엔 아리오센','188 삿포로 비어가든·아리오선','종점까지 그대로 타면 됩니다.'],
      ['비어가든 하차','サッポロビール園','삿포로 비루엔','삿포로 비어가든','아리오와 맥주박물관이 모두 걸어서 연결됩니다.']
    ]
  },
  'hotel-airport':{
    title:'호텔 → 신치토세공항',tag:'DAY 4 · 캐리어 이동',time:'약 65~80분',fare:'지하철 + JR',map:'https://www.google.com/maps/dir/?api=1&origin=Sotetsu+Fresa+Inn+Sapporo-Susukino&destination=New+Chitose+Airport&travelmode=transit',tip:'마지막 날은 캐리어 2개가 있으므로 계단보다 엘리베이터 표지를 우선 보고 이동해요.',
    steps:[
      ['호스이스스키노역','豊水すすきの駅','호스이스스키노에키','호스이스스키노역','4번 출구 쪽 엘리베이터 동선을 우선.'],
      ['도호선 사카에마치 방면','東豊線 栄町方面','도호센 사카에마치 호멘','도호선 사카에마치 방면','2정거장 후 さっぽろ駅.'],
      ['JR삿포로역 이동','JR札幌駅','제이아루 삿포로에키','JR삿포로역','JR線 표지를 따라 개찰로 이동.'],
      ['신치토세공항행 쾌속','快速エアポート 新千歳空港行き','카이소쿠 에아포토 신치토세쿠코유키','쾌속 에어포트 신치토세공항행','큰 캐리어가 있으면 Uシート 지정석도 고려.'],
      ['공항 종점 하차','新千歳空港駅','신치토세쿠코에키','신치토세공항역','도착 후 캐리어를 임시보관하고 공항 구경 시작.']
    ]
  }
};

const places = [
  {id:'otaru-canal',type:'관광',name:'오타루 운하',jp:'小樽運河',pron:'오타루 운가',image:'./assets/otaru-canal.jpg',rating:'가을 추천',hours:'24시간 산책',budget:'무료',location:'오타루역 도보권',desc:'오타루의 대표 산책 코스. 첫날 캐리어 없이 가볍게 걷고, 창고거리와 운하 사진을 남기기 좋습니다.',map:'https://www.google.com/maps/search/?api=1&query=Otaru+Canal'},
  {id:'naruto',type:'식당',name:'나루토 본점',jp:'若鶏時代なると 本店',pron:'와카도리 지다이 나루토 혼텐',image:'./assets/naruto-food.jpg',rating:'DAY 1 점심',hours:'11:00~21:00 기준',budget:'¥1,000~¥3,000',location:'오타루역 도보 약 7~8분',desc:'오타루 첫 점심. 닭 반마리 튀김과 초밥·해산물을 가족끼리 나눠 먹기 좋습니다.',menu:'若鶏半身揚げ · 초밥 · 해산물',map:'https://www.google.com/maps/search/?api=1&query=Wakadori+Jidai+Naruto+Honten+Otaru'},
  {id:'letao',type:'카페',name:'LeTAO PATHOS',jp:'ルタオ パトス',pron:'르타오 파토스',image:'./assets/letao-dessert.jpg',rating:'DAY 1 디저트',hours:'카페 10:00~18:00 기준',budget:'¥1,000~¥2,000',location:'사카이마치 거리',desc:'오르골당과 미나미오타루역 사이에 넣기 좋은 디저트 휴식. 치즈케이크 계열이 핵심입니다.',menu:'더블 프로마쥬 · 치즈케이크 · 커피',map:'https://www.google.com/maps/search/?api=1&query=LeTAO+PATHOS+Otaru'},
  {id:'suage',type:'식당',name:'Soup Curry Suage+',jp:'スープカレー Suage+',pron:'스푸 카레 스아게 플러스',image:'./assets/day3-sapporo.jpg',rating:'DAY 1 저녁',hours:'방문 전 영업시간 확인',budget:'¥1,500~¥2,500',location:'스스키노 도보권',desc:'첫날 저녁은 호텔 체크인 후 홋카이도식 스프카레. 아이들은 맵기를 낮게 고르는 편이 좋습니다.',menu:'닭고기·채소 스프카레',map:'https://www.google.com/maps/search/?api=1&query=Soup+Curry+Suage+Sapporo'},
  {id:'wako',type:'식당',name:'돈카츠 와코',jp:'とんかつ和幸 札幌ステラプレイス',pron:'톤카츠 와코 삿포로 스테라푸레이스',image:'./assets/naruto-food.jpg',rating:'DAY 3 점심',hours:'11:00~22:00 기준',budget:'¥1,500~¥2,500',location:'삿포로 스텔라플레이스 6F',desc:'요청한 돈카츠 점심을 3일차에 배치. 쇼핑과 비어가든 이동 사이에 넣기 좋습니다.',menu:'로스카츠 · 히레카츠 정식',map:'https://www.google.com/maps/search/?api=1&query=Tonkatsu+Wako+Sapporo+Stellar+Place'},
  {id:'beer-garden',type:'식당',name:'삿포로 비어가든',jp:'サッポロビール園',pron:'삿포로 비루엔',image:'./assets/day3-sapporo.jpg',rating:'DAY 3 저녁',hours:'11:30~21:00 기준',budget:'메뉴별 상이',location:'삿포로 맥주박물관 옆',desc:'맥주박물관 관람 뒤 바로 이어지는 징기스칸 저녁. 가족 4인 저녁시간은 예약을 권장합니다.',menu:'징기스칸 · 채소 · 사이드',map:'https://www.google.com/maps/search/?api=1&query=Sapporo+Beer+Garden'},
  {id:'tv-tower',type:'관광',name:'삿포로 TV타워',jp:'さっぽろテレビ塔',pron:'삿포로 테레비토',image:'./assets/day3-sapporo.jpg',rating:'DAY 2 야경',hours:'09:00~22:00 기준',budget:'입장권 별도',location:'오도리공원',desc:'조잔케이 온천을 충분히 즐긴 뒤 2일차 저녁 야경으로 이동. 19:30 전후 방문을 기준으로 잡았습니다.',map:'https://www.google.com/maps/search/?api=1&query=Sapporo+TV+Tower'},
  {id:'jozankei',type:'관광',name:'조잔케이',jp:'定山渓',pron:'조잔케이',image:'./assets/day2-jozankei.jpg',rating:'DAY 2 메인',hours:'온천 13:05~16:05',budget:'온천 요금 별도',location:'삿포로 남서쪽',desc:'가을 단풍과 온천을 중심으로 느긋하게 보는 날. 신사·후타미 현수교 뒤 3시간 온천을 확보했습니다.',map:'https://www.google.com/maps/search/?api=1&query=Jozankei+Onsen'}
];

const phrases = [
  {cat:'기본 회화',ko:'이 역은 어디인가요?',jp:'この駅はどこですか？',pron:'코노 에키와 도코데스카?'},
  {cat:'기본 회화',ko:'감사합니다.',jp:'ありがとうございます。',pron:'아리가토 고자이마스.'},
  {cat:'교통',ko:'이 버스는 ~에 가나요?',jp:'このバスは〜に行きますか？',pron:'코노 바스와 ~니 이키마스카?'},
  {cat:'교통',ko:'오타루행은 어느 열차인가요?',jp:'小樽行きはどれですか？',pron:'오타루유키와 도레데스카?'},
  {cat:'교통',ko:'환승은 어디인가요?',jp:'乗り換えはどこですか？',pron:'노리카에와 도코데스카?'},
  {cat:'식당',ko:'추천 메뉴는 무엇인가요?',jp:'おすすめのメニューは何ですか？',pron:'오스스메노 메뉴와 난데스카?'},
  {cat:'식당',ko:'맵지 않게 해주세요.',jp:'辛くしないでください。',pron:'카라쿠 시나이데 쿠다사이.'},
  {cat:'식당',ko:'계산 부탁드립니다.',jp:'お会計お願いします。',pron:'오카이케이 오네가이시마스.'},
  {cat:'쇼핑',ko:'이것은 얼마인가요?',jp:'これはいくらですか？',pron:'코레와 이쿠라데스카?'},
  {cat:'쇼핑',ko:'면세가 가능한가요?',jp:'免税できますか？',pron:'멘제이 데키마스카?'},
  {cat:'긴급상황',ko:'도와주세요.',jp:'助けてください。',pron:'타스케테 쿠다사이.'},
  {cat:'긴급상황',ko:'경찰을 불러주세요.',jp:'警察を呼んでください。',pron:'케이사츠오 욘데 쿠다사이.'}
];

const checklistGroups = {
  '출발 전':[
    ['passport','여권','가족 4인 유효기간 확인'],['ticket','항공권(e-ticket)','출발·귀국 시간 확인'],['hotel','호텔 예약 확인','소테츠 프레사 인 삿포로 스스키노'],['bus','갓파라이너 왕복 예약','10/21 09:18 / 17:06'],['bag','공항→호텔 짐배송 예약','DAY 1 핵심'],['beer','비어가든 예약','10/22 17:00 가족 4인'],['insurance','여행자보험','4인 보장내용 확인'],['cash','엔화·해외결제 카드','IC카드/현금 보조'],['battery','충전기·보조배터리','보조배터리는 기내'],['clothes','가을 옷차림','겉옷·얇은 이너·우산']
  ],
  '여행 중':[
    ['receipt','짐배송 접수증 사진','DAY 1 호텔 수령까지 보관'],['jr','JR 전광판에서 小樽 확인','오타루 직통 우선'],['buscheck','갓파라이너 15분 전 도착','정류장 이름 확인'],['onsen','온천 16:05 가족 집합','17:06 버스 대비'],['shop','쇼핑 구매목록 체크','중복구매 방지'],['weight','수하물 무게 확인','귀국 전 재분배']
  ],
  '귀국 후':[
    ['photo','사진 백업','가족 사진 클라우드 정리'],['expense','여행비 정리','카드·현금 사용액 정리'],['souvenir','선물 전달','회사·가족용 구분'],['review','좋았던 곳 메모','다음 일본 여행용 기록']
  ]
};

const navItems = [
  ['home','⌂','홈'],['schedule','▣','일정'],['routes','⌖','길찾기'],['checklist','✓','체크'],['more','⋯','더보기']
];

function q(sel){ return document.querySelector(sel); }
function qa(sel){ return [...document.querySelectorAll(sel)]; }
function esc(s=''){ return String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m])); }
function toast(msg){ const el=q('#toast'); if(!el) return; el.textContent=msg; el.classList.add('show'); clearTimeout(toast._t); toast._t=setTimeout(()=>el.classList.remove('show'),1600); }
function mapOpen(url){ window.open(url,'_blank','noopener'); }

// PWA/브라우저 뒤로가기를 실제 화면 이동 기록과 연결합니다.
// Android의 시스템 뒤로가기, 브라우저 뒤로가기, 앱 내부 ‹ 버튼이 같은 기록을 사용합니다.
let NAV_SEQ = 0;

function stateUrl(state=APP.state){
  switch(state.view){
    case 'day': return `#day/${state.day || 1}`;
    case 'route': return `#route/${encodeURIComponent(state.route || '')}`;
    case 'place': return `#place/${encodeURIComponent(state.place || '')}`;
    default: return `#${state.view || 'home'}`;
  }
}

function stateFromUrl(){
  const raw = location.hash.replace(/^#/, '');
  const [viewRaw, valueRaw] = raw.split('/');
  const view = viewRaw || 'home';
  const topViews = ['home','schedule','routes','places','japanese','checklist','more','info'];
  if(topViews.includes(view)) return {view};
  if(view === 'day') return {view:'day', day:Math.min(4, Math.max(1, Number(valueRaw) || 1)), dayTab:'schedule'};
  if(view === 'route' && valueRaw) return {view:'route', route:decodeURIComponent(valueRaw)};
  if(view === 'place' && valueRaw) return {view:'place', place:decodeURIComponent(valueRaw)};
  return {view:'home'};
}

function historyPayload(){
  return {__sapporoTrip:true, seq:NAV_SEQ, state:{...APP.state}};
}

function initNavigation(){
  if(history.state?.__sapporoTrip && history.state.state){
    APP.state = {...APP.state, ...history.state.state};
    NAV_SEQ = Number(history.state.seq) || 0;
    return;
  }
  APP.state = {...APP.state, ...stateFromUrl()};
  NAV_SEQ = 0;
  history.replaceState(historyPayload(), '', stateUrl(APP.state));
}

function go(view, extra={}, options={}){
  const replace = Boolean(options.replace);
  APP.state = {...APP.state, view, ...extra};
  if(replace){
    history.replaceState(historyPayload(), '', stateUrl(APP.state));
  } else {
    NAV_SEQ += 1;
    history.pushState(historyPayload(), '', stateUrl(APP.state));
  }
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

function replaceViewState(patch={}){
  APP.state = {...APP.state, ...patch};
  history.replaceState(historyPayload(), '', stateUrl(APP.state));
  render();
}

function getDay(n){ return days.find(d=>d.day===Number(n)) || days[0]; }
function tripStatus(){
  const now=new Date(); const start=APP.tripStart, end=APP.tripEnd;
  if(now<start){ const diff=Math.ceil((start-now)/86400000); return {mode:'before',label:`출발 D-${diff}`,day:1}; }
  if(now>end) return {mode:'after',label:'여행 완료',day:4};
  const d=Math.min(4,Math.floor((now-start)/86400000)+1); return {mode:'during',label:`여행 DAY ${d}`,day:d};
}
function currentEvents(day){
  const d=getDay(day); const now=new Date(); const hm=now.getHours()*60+now.getMinutes();
  const parsed=d.events.map(e=>{ const m=e.time.match(/(\d{2}):(\d{2})/); return {...e,mins:m?Number(m[1])*60+Number(m[2]):9999}; });
  const idx=parsed.findIndex(e=>e.mins>=hm); return parsed.slice(Math.max(0,idx===-1?parsed.length-3:idx),Math.max(0,idx===-1?parsed.length:idx+3));
}
function iconForType(t){return ({관광:'📷',식당:'🍴',카페:'🍰'}[t]||'📍');}

function shell(content){
  const active = ['day','place','japanese','info'].includes(APP.state.view) ? (APP.state.view==='day'?'schedule':APP.state.view==='place'?'schedule':'more') : APP.state.view;
  return `<div class="app-shell">
    <aside class="desktop-rail">
      <div class="desktop-brand"><img src="./assets/icon-192.png"><div><strong>SAPPORO</strong><small>FAMILY TRIP 2026</small></div></div>
      <div class="desktop-menu">${navItems.map(([v,i,l])=>`<button class="desktop-nav-btn ${active===v?'active':''}" data-nav="${v}"><span>${i}</span>${l}</button>`).join('')}
        <button class="desktop-nav-btn ${APP.state.view==='japanese'?'active':''}" data-nav="japanese"><span>あ</span>여행 일본어</button>
        <button class="desktop-nav-btn ${APP.state.view==='places'?'active':''}" data-nav="places"><span>♡</span>맛집·카페</button>
      </div>
      <div class="desktop-trip-card"><strong>2026.10.20 - 10.23</strong><p>가족과 함께하는 3박 4일 가을 삿포로 자유여행</p><img src="./assets/bichon-home.jpg"></div>
    </aside>
    <main class="mobile-shell">${content}${bottomNav(active)}</main>
  </div>`;
}
function bottomNav(active){ return `<nav class="bottom-nav">${navItems.map(([v,i,l])=>`<button class="nav-btn ${active===v?'active':''}" data-nav="${v}"><span class="nav-ico">${i}</span><span>${l}</span></button>`).join('')}</nav>`; }
function topbar(title='',subtitle='',back=false){ return `<div class="topbar">${back?`<button class="back-btn" data-back>‹</button>`:`<div class="brand-lockup"><img src="./assets/icon-192.png"><div><div class="brand-title">SAPPORO</div><div class="brand-sub">FAMILY TRIP</div></div></div>`}<div style="flex:1">${title?`<h1 class="page-title">${title}</h1><div class="page-subtitle">${subtitle}</div>`:''}</div>${back?'':'<button class="icon-btn" data-nav="info" aria-label="여행정보">⚙</button>'}</div>`; }

function renderHome(){
  const status=tripStatus(); const day=getDay(status.day); const events=status.mode==='during'?currentEvents(status.day):day.events.slice(1,4);
  return shell(`<section class="page">${topbar()}
    <div class="home-grid-desktop">
      <article class="hero"><img class="hero-bg" src="${day.image}" alt="${day.title}"><div class="hero-overlay"></div><div class="hero-content">
        <div><span class="hero-kicker">🍁 ${status.label}</span><h1>SAPPORO</h1><div class="trip-dates">2026. 10. 20 - 10. 23 · 3박 4일</div></div>
        <div class="hero-lower"><div><div class="hero-day">TODAY / START</div><div class="hero-place">DAY ${day.day}<br>${day.title}</div></div><img class="hero-bichon" src="./assets/bichon-home.jpg" alt="미니비숑 캐릭터"></div>
      </div></article>
      <article class="next-card"><div class="section-label"><h2>${status.mode==='before'?'출발하면 먼저':'다음 일정'}</h2><button class="small-link" data-day="${day.day}">전체 보기 ›</button></div><div class="mini-schedule">${events.map(e=>`<div class="mini-row"><span class="time-chip">${e.time}</span><div><div class="mini-title">${e.icon} ${e.title}</div><div class="mini-desc">${esc(e.desc.split('\n')[0])}</div></div><span class="arrow">›</span></div>`).join('')}</div><button class="primary-btn" style="width:100%;margin-top:11px" data-day="${day.day}">오늘 일정 보기 ›</button></article>
      <div class="notice-card"><div class="notice-icon">🧳</div><div><div class="notice-title">DAY 1 핵심 수정 반영</div><div class="notice-copy">신치토세공항에서 캐리어만 숙소로 배송하고, 가족은 숙소에 들르지 않고 JR로 바로 오타루에 갑니다.</div></div></div>
    </div>
    <div class="quick-grid">
      ${[['schedule','🗓','여행 일정','4일 전체보기'],['routes','🚆','교통편','지하철·버스'],['places','🍴','맛집·카페','추천 리스트'],['places','📷','관광지','명소 둘러보기'],['checklist','✅','체크리스트','준비물 확인'],['japanese','あ','여행 일본어','회화·음성']].map(x=>`<button class="quick-tile" data-nav="${x[0]}"><div class="quick-icon">${x[1]}</div><div class="quick-title">${x[2]}</div><div class="quick-caption">${x[3]}</div></button>`).join('')}
    </div>
    <div class="day-strip">${days.map(d=>`<button class="day-tab ${d.day===day.day?'active':''}" data-day="${d.day}"><strong>DAY ${d.day}</strong>${d.title.replace(' ','')}</button>`).join('')}</div>
  </section>`);
}

function renderSchedule(){ return shell(`<section class="page">${topbar('전체 일정','원하는 날짜를 선택하세요')}
  <div class="day-list">${days.map(d=>`<button class="day-card" data-day="${d.day}"><img src="${d.image}" alt="${d.title}"><div class="day-card-overlay"></div><div class="day-card-content"><div class="day-card-day">DAY ${d.day}</div><div class="day-card-date">${d.date}</div><div class="day-card-place">${d.title}</div></div><span class="day-card-go">›</span></button>`).join('')}</div>
  <div class="notice-card" style="margin-top:15px"><div class="notice-icon">🐶</div><div><div class="notice-title">여행 중에는 하루씩만 보면 돼요</div><div class="notice-copy">DAY 화면은 시간 순서대로 만들었고, 이동이 필요한 일정은 바로 길찾기 상세로 연결됩니다.</div></div></div>
  </section>`); }

function renderDay(){
  const d=getDay(APP.state.day); const tab=APP.state.dayTab;
  let body='';
  if(tab==='schedule') body=`<div class="timeline">${d.events.map(e=>`<div class="timeline-item"><div class="tl-time">${e.time}</div><div class="tl-dot">${e.icon}</div><div class="tl-card"><div class="tl-title">${e.title}</div><div class="tl-sub">${esc(e.desc)}</div>${e.route||e.place?`<div class="tl-actions">${e.route?`<button class="mini-btn accent" data-route="${e.route}">길찾기 상세</button>`:''}${e.place?`<button class="mini-btn" data-place="${e.place}">장소 상세</button>`:''}</div>`:''}</div></div>`).join('')}</div>`;
  if(tab==='food'){
    const foodIds=d.events.filter(e=>e.place).map(e=>e.place); const ps=places.filter(p=>foodIds.includes(p.id));
    body=`<div class="place-grid">${ps.length?ps.map(placeCard).join(''):'<div class="empty">이 날의 상세 식당/카페 카드는 일정표에서 확인해 주세요.</div>'}</div>`;
  }
  if(tab==='route'){
    const routeIds=[...new Set(d.events.filter(e=>e.route).map(e=>e.route))]; body=`<div class="route-list">${routeIds.map(id=>routeCard(id)).join('')}</div>`;
  }
  return shell(`<section class="page">${topbar('', '', true)}
    <div class="day-hero"><img src="${d.image}" alt="${d.title}"><div class="day-hero-copy"><div class="big">DAY ${d.day}</div><div class="date">${d.date}</div><div class="place">${d.title}</div></div></div>
    <div class="segment-tabs">${[['schedule','일정표'],['route','길찾기'],['food','식사·카페']].map(([v,l])=>`<button class="segment-btn ${tab===v?'active':''}" data-daytab="${v}">${l}</button>`).join('')}</div>
    ${body}
    <div class="day-strip">${days.map(x=>`<button class="day-tab ${x.day===d.day?'active':''}" data-day="${x.day}"><strong>DAY ${x.day}</strong>${x.title.split(' ')[0]}</button>`).join('')}</div>
  </section>`);
}

function routeCard(id){ const r=routes[id]; if(!r)return''; return `<article class="route-card"><div class="route-top"><div><div class="route-title">${r.title}</div><div class="route-sub">${r.time} · ${r.fare}</div></div><span class="route-tag">${r.tag}</span></div><div class="route-meta"><span>🚶 초보자 단계별</span><span>あ 일본어 발음</span></div><button class="primary-btn" style="width:100%;min-height:42px;margin-top:12px" data-route="${id}">상세 길찾기 ›</button></article>`; }
function renderRoutes(){ return shell(`<section class="page">${topbar('길찾기','역 이름 · 방향 · 출구까지 초보자용으로')}
  <div class="route-list">${Object.keys(routes).map(routeCard).join('')}</div>
  <div class="route-bichon-tip"><img src="./assets/bichon-route.jpg"><div><strong>글자가 안 읽혀도 괜찮아요</strong><span>현지에서는 앱 화면의 일본어 역 이름을 직원에게 그대로 보여주는 방법이 제일 빠릅니다.</span></div></div>
  </section>`); }
function renderRouteDetail(){ const r=routes[APP.state.route]; if(!r)return renderRoutes(); return shell(`<section class="page">${topbar(r.title,`${r.time} · ${r.fare}`,true)}
  <div class="route-bichon-tip"><img src="./assets/bichon-route.jpg"><div><strong>미니비숑 길찾기 팁</strong><span>${r.tip}</span></div></div>
  <div class="route-steps">${r.steps.map((s,i)=>`<div class="route-step"><div class="step-no">${i+1}</div><div><div class="step-title">${s[0]}</div><div class="jp-line">${s[1]}</div><div class="pron-line">${s[2]}</div><div class="ko-line">뜻: ${s[3]}</div><div class="step-note">${s[4]}</div></div></div>`).join('')}</div>
  <button class="map-btn" data-map="${esc(r.map)}">📍 Google 지도에서 보기</button>
  <button class="secondary-btn" style="width:100%;margin-top:8px" data-copy-route="${esc(r.title)}">이 경로 제목 복사</button>
  </section>`); }

function placeCard(p){ return `<article class="place-card"><img class="photo" src="${p.image}" alt="${p.name}"><div class="place-card-body"><div class="place-head"><div><div class="place-name">${p.name}</div><div class="place-jp">${p.jp} · ${p.pron}</div></div><button class="heart-btn ${isFav(p.id)?'on':''}" data-fav="${p.id}">♥</button></div><div class="place-rating">★ ${p.rating}</div><div class="place-desc">${p.desc}</div><div class="place-facts"><div class="fact"><small>운영/시간</small><strong>${p.hours}</strong></div><div class="fact"><small>예상/입장</small><strong>${p.budget}</strong></div></div><div class="card-actions"><button class="primary" data-place="${p.id}">상세 보기</button><button data-map="${esc(p.map)}">지도에서 보기</button></div></div></article>`; }
function renderPlaces(){ const f=APP.state.placeFilter; const list=f==='전체'?places:places.filter(p=>p.type===f); return shell(`<section class="page">${topbar('맛집 · 카페 · 관광지','일정에 맞춰 실제로 갈 후보만')}
  <div class="filter-row">${['전체','관광','식당','카페'].map(x=>`<button class="filter-chip ${f===x?'active':''}" data-filter="${x}">${x}</button>`).join('')}</div><div class="place-grid">${list.map(placeCard).join('')}</div>
  </section>`); }
function renderPlace(){ const p=places.find(x=>x.id===APP.state.place); if(!p)return renderPlaces(); return shell(`<section class="page">${topbar('', '', true)}<img class="detail-photo" src="${p.image}" alt="${p.name}"><h1 class="detail-name">${p.name}</h1><div class="detail-jp">${p.jp} · ${p.pron}</div><div class="place-rating">★ ${p.rating}</div><p class="detail-desc">${p.desc}</p>
  <div class="info-box"><h3>한눈에 보기</h3><div class="info-list"><div class="info-row"><span>운영/시간</span><strong>${p.hours}</strong></div><div class="info-row"><span>예상 비용</span><strong>${p.budget}</strong></div><div class="info-row"><span>위치</span><strong>${p.location}</strong></div>${p.menu?`<div class="info-row"><span>추천 메뉴</span><strong>${p.menu}</strong></div>`:''}</div></div>
  <button class="map-btn" data-map="${esc(p.map)}">📍 Google 지도에서 보기</button><button class="secondary-btn" style="width:100%;margin-top:8px" data-fav="${p.id}">${isFav(p.id)?'♥ 저장됨':'♡ 즐겨찾기 저장'}</button></section>`); }

function renderJapanese(){ const cat=APP.state.jpTab; const cats=['기본 회화','교통','식당','쇼핑','긴급상황']; const list=phrases.filter(p=>p.cat===cat); return shell(`<section class="page">${topbar('여행 일본어','화면을 보여주거나 ▶ 버튼으로 들려주세요')}
  <div class="jp-tabs">${cats.map(c=>`<button class="jp-tab ${c===cat?'active':''}" data-jptab="${c}">${c}</button>`).join('')}</div><div class="phrase-list">${list.map((p,i)=>`<article class="phrase-card"><div class="phrase-ko">${p.ko}</div><div class="phrase-jp">${p.jp}</div><div class="phrase-pron">${p.pron}</div><div class="phrase-actions"><button class="circle-action" data-speak="${esc(p.jp)}">▶ 듣기</button><button class="circle-action" data-copy="${esc(p.jp)}">▣ 복사</button></div></article>`).join('')}</div>
  </section>`); }

function checkKey(group,id){ return `sapporo-check-${group}-${id}`; }
function isChecked(group,id){ return localStorage.getItem(checkKey(group,id))==='1'; }
function renderChecklist(){ const g=APP.state.checkTab; const items=checklistGroups[g]; const done=items.filter(x=>isChecked(g,x[0])).length; const pct=Math.round(done/items.length*100); return shell(`<section class="page">${topbar('체크리스트','체크한 내용은 이 기기에 자동 저장돼요')}
  <div class="check-tabs">${Object.keys(checklistGroups).map(x=>`<button class="check-tab ${g===x?'active':''}" data-checktab="${x}">${x}</button>`).join('')}</div>
  <div class="progress-card"><div class="section-label" style="margin:0"><h2>${g} 준비도</h2><span class="status-pill">${done} / ${items.length}</span></div><div class="progress-line"><div class="progress-fill" style="width:${pct}%"></div></div></div>
  <div class="checklist">${items.map(([id,label,note])=>{const c=isChecked(g,id);return `<div class="check-item ${c?'done':''}"><input type="checkbox" data-check="${id}" ${c?'checked':''}><label>${label}<small>${note}</small></label></div>`}).join('')}</div>
  </section>`); }

function renderMore(){ return shell(`<section class="page">${topbar('더보기','여행 중 자주 쓰는 기능')}
  <div class="quick-grid">${[['japanese','あ','여행 일본어','음성 재생'],['places','♡','맛집·관광지','상세 카드'],['info','ℹ','여행 정보','전압·통화·긴급'],['schedule','▣','전체 일정','DAY 1~4'],['routes','⌖','길찾기','역·출구 상세'],['checklist','✓','체크리스트','준비물 저장']].map(x=>`<button class="quick-tile" data-nav="${x[0]}"><div class="quick-icon">${x[1]}</div><div class="quick-title">${x[2]}</div><div class="quick-caption">${x[3]}</div></button>`).join('')}</div>
  <div class="notice-card"><div class="notice-icon">📶</div><div><div class="notice-title">PWA 오프라인 캐시 적용</div><div class="notice-copy">한 번 접속한 뒤에는 핵심 화면과 이미지가 캐시됩니다. 지도 열기는 인터넷 연결이 필요합니다.</div></div></div>
  </section>`); }
function renderInfo(){ return shell(`<section class="page">${topbar('여행 정보','10월 하순 삿포로 자유여행 메모',true)}
  <div class="info-hero"><h2>가을 삿포로 준비</h2><p>아침·저녁은 쌀쌀할 수 있어 겉옷과 얇은 이너를 겹쳐 입는 방식이 편합니다. 실제 기온은 출발 직전 다시 확인하세요.</p></div>
  <div class="info-grid">
    <div class="info-tile"><div class="ico">⚡</div><small>전압</small><strong>100V · A형 플러그</strong></div>
    <div class="info-tile"><div class="ico">🕘</div><small>시차</small><strong>한국과 동일</strong></div>
    <div class="info-tile"><div class="ico">💴</div><small>통화</small><strong>일본 엔 (JPY)</strong></div>
    <div class="info-tile"><div class="ico">📡</div><small>데이터</small><strong>eSIM / 로밍</strong></div>
    <div class="info-tile emergency"><div class="ico">🚨</div><small>비상 연락</small><strong>경찰 110 · 구급/소방 119</strong></div>
    <div class="info-tile"><div class="ico">🧳</div><small>DAY 1</small><strong>공항에서 짐만 호텔 배송</strong></div>
  </div>
  <div class="install-card"><strong>📲 휴대폰에 앱처럼 설치</strong><p>Vercel에 배포한 뒤 브라우저의 ‘홈 화면에 추가’를 사용하면 전체화면 앱처럼 실행할 수 있어요.</p><button class="primary-btn" id="installBtn" style="width:100%">설치 가능 여부 확인</button></div>
  </section>`); }

function render(){
  let html='';
  switch(APP.state.view){
    case 'schedule': html=renderSchedule(); break;
    case 'day': html=renderDay(); break;
    case 'routes': html=renderRoutes(); break;
    case 'route': html=renderRouteDetail(); break;
    case 'places': html=renderPlaces(); break;
    case 'place': html=renderPlace(); break;
    case 'japanese': html=renderJapanese(); break;
    case 'checklist': html=renderChecklist(); break;
    case 'more': html=renderMore(); break;
    case 'info': html=renderInfo(); break;
    default: html=renderHome();
  }
  q('#app').innerHTML=html; bind();
}
function bind(){
  qa('[data-nav]').forEach(b=>b.onclick=()=>go(b.dataset.nav));
  qa('[data-day]').forEach(b=>b.onclick=()=>go('day',{day:Number(b.dataset.day),dayTab:'schedule'}));
  qa('[data-daytab]').forEach(b=>b.onclick=()=>replaceViewState({dayTab:b.dataset.daytab}));
  qa('[data-route]').forEach(b=>b.onclick=()=>go('route',{route:b.dataset.route}));
  qa('[data-place]').forEach(b=>b.onclick=()=>go('place',{place:b.dataset.place}));
  qa('[data-filter]').forEach(b=>b.onclick=()=>replaceViewState({placeFilter:b.dataset.filter}));
  qa('[data-jptab]').forEach(b=>b.onclick=()=>replaceViewState({jpTab:b.dataset.jptab}));
  qa('[data-checktab]').forEach(b=>b.onclick=()=>replaceViewState({checkTab:b.dataset.checktab}));
  qa('[data-check]').forEach(b=>b.onchange=()=>{localStorage.setItem(checkKey(APP.state.checkTab,b.dataset.check),b.checked?'1':'0');render()});
  qa('[data-map]').forEach(b=>b.onclick=()=>mapOpen(b.dataset.map));
  qa('[data-speak]').forEach(b=>b.onclick=()=>speakJapanese(b.dataset.speak));
  qa('[data-copy]').forEach(b=>b.onclick=()=>copyText(b.dataset.copy));
  qa('[data-copy-route]').forEach(b=>b.onclick=()=>copyText(b.dataset.copyRoute));
  qa('[data-fav]').forEach(b=>b.onclick=()=>{toggleFav(b.dataset.fav);render()});
  qa('[data-back]').forEach(b=>b.onclick=()=>historyBack());
  const ib=q('#installBtn'); if(ib) ib.onclick=installApp;
}
function historyBack(){
  if(history.state?.__sapporoTrip && Number(history.state.seq) > 0){
    history.back();
    return;
  }
  // 앱을 상세 화면 주소로 바로 연 경우에는 합리적인 상위 화면으로 돌아갑니다.
  if(APP.state.view==='route') go('routes',{}, {replace:true});
  else if(APP.state.view==='place') go('places',{}, {replace:true});
  else if(APP.state.view==='day') go('schedule',{}, {replace:true});
  else if(APP.state.view==='info') go('home',{}, {replace:true});
  else go('home',{}, {replace:true});
}
function speakJapanese(text){
  if(!('speechSynthesis' in window)){toast('이 브라우저는 음성 재생을 지원하지 않아요');return;}
  speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.lang='ja-JP';u.rate=.88; speechSynthesis.speak(u);
}
async function copyText(text){ try{await navigator.clipboard.writeText(text);toast('복사했어요');}catch{toast('복사할 수 없어요');} }
function favKey(id){return `sapporo-fav-${id}`;} function isFav(id){return localStorage.getItem(favKey(id))==='1';} function toggleFav(id){localStorage.setItem(favKey(id),isFav(id)?'0':'1');toast(isFav(id)?'즐겨찾기에 저장했어요':'즐겨찾기에서 해제했어요');}
async function installApp(){ if(APP.installPrompt){APP.installPrompt.prompt(); await APP.installPrompt.userChoice; APP.installPrompt=null; toast('설치 안내를 확인해 주세요');} else toast('브라우저 메뉴의 홈 화면에 추가를 사용해 주세요'); }

window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();APP.installPrompt=e;});
window.addEventListener('popstate',e=>{
  if(e.state?.__sapporoTrip && e.state.state){
    APP.state = {...APP.state, ...e.state.state};
    NAV_SEQ = Number(e.state.seq) || 0;
  } else {
    APP.state = {...APP.state, ...stateFromUrl()};
    NAV_SEQ = 0;
  }
  render();
  window.scrollTo({top:0,behavior:'auto'});
});
if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js?v=2').catch(()=>{});
initNavigation();
render();
