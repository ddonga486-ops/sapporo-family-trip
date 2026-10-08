// SAPPORO FAMILY TRIP v11 · startup/cache + cross-device auto sync
const APP = {
  tripStart: new Date('2026-10-20T00:00:00+09:00'),
  tripEnd: new Date('2026-10-23T23:59:59+09:00'),
  installPrompt: null,
  state: { view: 'home', day: 1, dayTab: 'schedule', placeMode: 'food', placeFilter: '전체', jpTab: '기본 회화', checkTab: '출발 전', memoTab: '전체', myPlaceFilter: '전체' }
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
      {time:'14:05',icon:'🍁',title:'사카이마치 거리',desc:'상점가 · 기념품 · 유리공예 구경',place:'sakaimachi'},
      {time:'14:50',icon:'🎵',title:'오타루 오르골당',desc:'오르골 · 기념품 관람',place:'music-box'},
      {time:'15:25',icon:'🍰',title:'LeTAO PATHOS',desc:'치즈케이크 · 커피 휴식',place:'letao'},
      {time:'16:20',icon:'🌇',title:'오타루 운하 · 노을 산책',desc:'10/20 일몰 약 16:45 전후 · 노을에서 가스등 켜지는 시간까지 감상',place:'otaru-canal'},
      {time:'17:20',icon:'🚆',title:'오타루 → 삿포로',desc:'운하에서 오타루역으로 이동 → 다음 삿포로행 JR 탑승',route:'otaru-hotel'},
      {time:'18:50',icon:'🏨',title:'호텔 체크인 · 캐리어 수령',desc:'이때 처음 숙소 방문'},
      {time:'19:30',icon:'🍛',title:'스프카레 Suage+',desc:'닭고기·채소 스프카레',place:'suage'}
    ]
  },
  {
    day:2,date:'10.21 (수)',title:'조잔케이 온천',subtitle:'단풍 · 온천 3시간 · TV타워 야경',image:'./assets/day2-jozankei.jpg',
    events:[
      {time:'07:30',icon:'🍳',title:'호텔 조식',desc:'호텔 조식 후 온천용 작은 가방 준비'},
      {time:'08:20',icon:'🚶',title:'호텔 → 갓파라이너 정류장',desc:'스스키노 정류장으로 도보 이동',route:'hotel-jozankei'},
      {time:'09:18',icon:'🚌',title:'갓파라이너 출발',desc:'すすきの → 定山渓神社前\n09:18 → 10:05',route:'hotel-jozankei'},
      {time:'10:05',icon:'⛩',title:'조잔케이 신사',desc:'定山渓神社 · 단풍 산책',place:'jozankei-shrine'},
      {time:'10:35',icon:'🌉',title:'후타미공원 · 현수교',desc:'계곡 단풍 핵심 구간',place:'futami'},
      {time:'11:30',icon:'🍱',title:'食堂いち 점심',desc:'숯불 닭 정식 · 연어 정식',place:'shokudo-ichi'},
      {time:'12:20',icon:'🍨',title:'雨ノ日と雪ノ日',desc:'비에이 저지우유 젤라토',place:'amenohi'},
      {time:'13:05',icon:'♨',title:'유노하나 조잔케이덴',desc:'온천 3시간 · 16:05 가족 집합',place:'yunohana'},
      {time:'17:06',icon:'🚌',title:'조잔케이 → 스스키노',desc:'定山渓車庫前 17:06 → すすきの 18:05',route:'jozankei-return'},
      {time:'18:10',icon:'🍣',title:'네무로 하나마루',desc:'COCONO SUSUKINO B1 회전초밥',place:'hanamaru'},
      {time:'19:30',icon:'🌃',title:'삿포로 TV타워 야경',desc:'오도리 야경 · 전망대',place:'tv-tower'},
      {time:'20:20',icon:'🌙',title:'호텔 복귀',desc:'컨디션 좋으면 오도리공원 10~15분 산책'}
    ]
  },
  {
    day:3,date:'10.22 (목)',title:'삿포로 시내 · 쇼핑',subtitle:'신궁 · 쇼핑 · 맥주박물관 · 징기스칸',image:'./assets/day3-sapporo.jpg',
    events:[
      {time:'07:30',icon:'🍳',title:'호텔 조식',desc:'쇼핑용 접이식 가방 준비'},
      {time:'08:45',icon:'🚇',title:'호텔 → 마루야마코엔역',desc:'東豊線 → 大通 환승 → 東西線',route:'hotel-shrine'},
      {time:'09:20',icon:'⛩',title:'홋카이도 신궁',desc:'円山公園駅 3번 출구 → 도보 약 15분',route:'hotel-shrine',place:'hokkaido-jingu'},
      {time:'10:30',icon:'🍡',title:'롯카테이 신궁차야점',desc:'구운 떡·과자 · 따뜻한 음료',place:'rokkatei'},
      {time:'11:30',icon:'🛍',title:'Standard Products',desc:'moyuk SAPPORO 2F'},
      {time:'12:30',icon:'🍖',title:'돈카츠 와코',desc:'삿포로 스텔라플레이스 센터 6F',place:'wako'},
      {time:'13:30',icon:'🚌',title:'188번 버스 → 비어가든',desc:'札幌駅北口 2번 승강장 · 종점 하차',route:'sapporo-beer'},
      {time:'13:50',icon:'🛍',title:'아리오 삿포로',desc:'GU · DAISO 집중 쇼핑'},
      {time:'15:10',icon:'🍺',title:'삿포로 맥주박물관',desc:'자유견학 · 굿즈 · 시음 선택',place:'beer-museum'},
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
      {time:'10:20',icon:'🍫',title:"ROYCE' Chocolate World",desc:'초콜릿 · 베이커리 · Smile Road',place:'royce'},
      {time:'11:10',icon:'🎀',title:'Hello Kitty Happy Flight',desc:'숍 위주로 가볍게 구경',place:'hello-kitty'},
      {time:'11:30',icon:'🍜',title:'홋카이도 라멘 도죠',desc:'이치겐 새우 / 케야키 미소 / 아지사이 시오',place:'ramen-dojo'},
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
    title:'오타루 운하 → 호텔',tag:'DAY 1 · 노을 후 이동',time:'약 70~90분',fare:'도보 + JR + 지하철',map:'https://www.google.com/maps/dir/?api=1&origin=Otaru+Canal&destination=Sotetsu+Fresa+Inn+Sapporo-Susukino&travelmode=transit',tip:'운하 노을을 본 뒤에는 미나미오타루역으로 되돌아가지 않고 오타루역으로 이동해 삿포로로 넘어갑니다.',
    steps:[
      ['운하에서 노을 감상','小樽運河','오타루 운가','오타루 운하','16:20 전후 도착해 노을과 가스등이 켜지는 분위기를 함께 봅니다.'],
      ['오타루역으로 이동','小樽駅','오타루에키','오타루역','운하 중앙부에서 오타루역까지 도보 약 10~15분.'],
      ['삿포로 방향 JR 탑승','札幌方面','삿포로 호멘','삿포로 방면','전광판에서 札幌 방향을 확인하고 가장 가까운 열차를 이용해요.'],
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
  // 관광지 추천
  {id:'otaru-canal',day:1,type:'관광',name:'오타루 운하',jp:'小樽運河',pron:'오타루 운가',image:'./assets/otaru-canal.jpg',rating:'DAY 1 · 필수',hours:'24시간 산책 가능',budget:'무료',location:'오타루역 도보권',desc:'첫날 오타루의 마지막 관광 코스로 보는 운하. 10월 20일 일몰은 약 16:45 전후라 노을에서 가스등이 켜지는 분위기까지 이어서 보기 좋습니다.',recommend:'사카이마치·오르골당·르타오를 먼저 보고 16:20 전후 운하로 이동해 노을을 본 뒤 오타루역으로 가는 순서를 추천합니다.',map:'https://www.google.com/maps/search/?api=1&query=Otaru+Canal'},
  {id:'sakaimachi',day:1,type:'관광',name:'사카이마치 거리',jp:'堺町通り',pron:'사카이마치도리',image:'./assets/day1-otaru.jpg',rating:'DAY 1 · 산책/쇼핑',hours:'상점별 상이',budget:'산책 무료',location:'오타루 운하~오르골당 사이',desc:'약 900m 이어지는 오타루 대표 상점가. 유리공예, 과자, 카페, 기념품점이 몰려 있어 자유여행 동선이 단순합니다.',recommend:'운하 → 사카이마치 → 오르골당 → 르타오 순서로 한 방향으로 내려가면 되돌아갈 일이 거의 없습니다.',map:'https://www.google.com/maps/search/?api=1&query=Otaru+Sakaimachi+Street'},
  {id:'music-box',day:1,type:'관광',name:'오타루 오르골당 본관',jp:'小樽オルゴール堂 本館',pron:'오타루 오루고루도 혼칸',image:'./assets/day1-otaru.jpg',rating:'DAY 1 · 가족 추천',hours:'방문 전 당일 영업시간 확인',budget:'입장 무료',location:'사카이마치 남쪽 끝',desc:'오타루 특유의 분위기를 가장 쉽게 느끼기 좋은 장소. 건물 앞 증기시계와 내부 오르골 구경만으로도 아이들과 보기 좋습니다.',recommend:'르타오와 매우 가까워 두 곳을 묶어서 보고 미나미오타루역으로 이동하는 코스를 추천합니다.',map:'https://www.google.com/maps/search/?api=1&query=Otaru+Music+Box+Museum'},
  {id:'jozankei-shrine',day:2,type:'관광',name:'조잔케이 신사',jp:'定山渓神社',pron:'조잔케이 진자',image:'./assets/day2-jozankei.jpg',rating:'DAY 2 · 단풍',hours:'상시 참배 가능 구역',budget:'무료',location:'定山渓神社前 정류장 인근',desc:'갓파라이너에서 내린 뒤 바로 들르기 좋은 작은 신사. 붉고 노란 단풍이 어우러지는 10월 산책 포인트입니다.',recommend:'버스에서 내리자마자 먼저 보고 후타미공원으로 이동하면 동선 낭비가 없습니다.',map:'https://www.google.com/maps/search/?api=1&query=Jozankei+Shrine'},
  {id:'futami',day:2,type:'관광',name:'후타미공원 · 후타미 현수교',jp:'二見公園・二見吊橋',pron:'후타미 코엔 · 후타미 츠리바시',image:'./assets/day2-jozankei.jpg',rating:'DAY 2 · 단풍 핵심',hours:'산책로 개방 상태 현장 확인',budget:'무료',location:'조잔케이 온천마을',desc:'조잔케이 계곡의 가을 풍경을 보기 좋은 대표 산책 구간. 긴 트레킹 없이도 단풍과 계곡을 함께 볼 수 있습니다.',recommend:'아이들과는 깊은 산책로보다 공원과 현수교 핵심 구간만 40~50분 보는 정도가 여행 피로도가 적습니다.',map:'https://www.google.com/maps/search/?api=1&query=Futami+Suspension+Bridge+Jozankei'},
  {id:'yunohana',day:2,type:'관광',name:'유노하나 조잔케이덴',jp:'湯の花 定山渓殿',pron:'유노하나 조잔케이덴',image:'./assets/day2-jozankei.jpg',rating:'DAY 2 · 온천 3시간',hours:'방문일 운영시간 재확인',budget:'입욕료 별도',location:'조잔케이 온천',desc:'이번 2일차의 메인. 노천탕과 휴게공간까지 포함해 2시간 30분~3시간을 편하게 보내기 좋은 대형 당일온천입니다.',recommend:'13시경 들어가 16시대에 나오는 일정이 17:06 갓파라이너와 가장 안정적으로 연결됩니다.',map:'https://www.google.com/maps/search/?api=1&query=Yunohana+Jozankei'},
  {id:'hokkaido-jingu',day:3,type:'관광',name:'홋카이도 신궁',jp:'北海道神宮',pron:'홋카이도 진구',image:'./assets/day3-sapporo.jpg',rating:'DAY 3 · 오전 추천',hours:'계절별 개문시간 확인',budget:'무료',location:'마루야마공원',desc:'삿포로 시내에서 분위기를 확 바꿔주는 숲속 신궁. 아침 시간에 가면 비교적 차분하게 산책하기 좋습니다.',recommend:'마루야마공원역 3번 출구에서 걸어가고, 관람 후 롯카테이 신궁차야점까지 묶는 코스를 추천합니다.',map:'https://www.google.com/maps/search/?api=1&query=Hokkaido+Jingu'},
  {id:'beer-museum',day:3,type:'관광',name:'삿포로 맥주박물관',jp:'サッポロビール博物館',pron:'삿포로 비루 하쿠부츠칸',image:'./assets/day3-sapporo.jpg',rating:'DAY 3 · 남편 추천 코스',hours:'11:00~18:00 기준 · 최종입장 확인',budget:'자유견학 무료 구역 있음',location:'삿포로 비어가든 옆',desc:'홋카이도 맥주 역사를 볼 수 있는 박물관. 아리오 쇼핑 뒤 이동하기 쉽고 저녁 징기스칸과 한 장소에서 이어집니다.',recommend:'15시대 관람 → 잠깐 휴식 → 17시 징기스칸 식사로 연결하면 이동을 한 번 줄일 수 있습니다.',map:'https://www.google.com/maps/search/?api=1&query=Sapporo+Beer+Museum'},
  {id:'tv-tower',day:2,type:'관광',name:'삿포로 TV타워',jp:'さっぽろテレビ塔',pron:'삿포로 테레비토',image:'./assets/day3-sapporo.jpg',rating:'DAY 2 · 야경',hours:'09:00~22:00 기준',budget:'전망대 입장권 별도',location:'오도리공원',desc:'조잔케이 온천을 충분히 즐긴 뒤 시내로 돌아와 보는 야경 포인트. 오도리공원을 위에서 한눈에 볼 수 있습니다.',recommend:'온천 후 19:30 전후로 방문하면 3일차 쇼핑 일정에서 야경을 완전히 뺄 수 있어 전체 일정이 여유로워집니다.',map:'https://www.google.com/maps/search/?api=1&query=Sapporo+TV+Tower'},
  {id:'royce',day:4,type:'관광',name:"ROYCE' Chocolate World",jp:'ロイズ チョコレートワールド',pron:'로이즈 초코레토 와루도',image:'./assets/day4-airport.jpg',rating:'DAY 4 · 공항 추천',hours:'공항 시설 운영시간 확인',budget:'관람 무료 · 구매 별도',location:'신치토세공항 3F Smile Road',desc:'마지막 날 공항을 일찍 가는 이유를 만들어주는 공간. 초콜릿 전시와 베이커리, 선물 쇼핑을 한 번에 보기 좋습니다.',recommend:'캐리어를 먼저 맡긴 뒤 가장 먼저 들르고, 이후 헬로키티와 라멘도장으로 이동하면 편합니다.',map:'https://www.google.com/maps/search/?api=1&query=Royce+Chocolate+World+New+Chitose+Airport'},
  {id:'hello-kitty',day:4,type:'관광',name:'Hello Kitty Happy Flight',jp:'ハローキティ ハッピーフライト',pron:'하로 키티 핫피 후라이토',image:'./assets/day4-airport.jpg',rating:'DAY 4 · 아이들과',hours:'공항 시설 운영시간 확인',budget:'일부 유료',location:'신치토세공항 3F Smile Road',desc:'공항에서 아이들과 가볍게 둘러보기 좋은 캐릭터 공간. 전체 유료존보다 숍 중심으로 짧게 보는 것도 충분합니다.',recommend:'로이즈와 같은 3층 연결구역이라 이동 부담 없이 20~30분 정도 넣기 좋습니다.',map:'https://www.google.com/maps/search/?api=1&query=Hello+Kitty+Happy+Flight+New+Chitose'},

  // 맛집 · 카페 추천
  {id:'naruto',day:1,type:'식당',name:'나루토 본점',jp:'若鶏時代なると 本店',pron:'와카도리 지다이 나루토 혼텐',image:'./assets/naruto-food.jpg',rating:'DAY 1 · 점심',hours:'11:00~21:00 기준',budget:'¥1,000~¥3,000',location:'오타루역 도보 약 7~8분',desc:'오타루 첫 끼로 추천. 겉은 바삭하고 속은 촉촉한 닭 반마리 튀김이 대표 메뉴입니다.',recommend:'공항에서 바로 오타루로 가기 때문에 역에서 가깝고, 이후 운하 방향으로 이동하기 쉬운 점이 가장 큰 장점입니다.',menu:'若鶏半身揚げ · 초밥 · 해산물',map:'https://www.google.com/maps/search/?api=1&query=Wakadori+Jidai+Naruto+Honten+Otaru'},
  {id:'letao',day:1,type:'카페',name:'LeTAO PATHOS',jp:'ルタオ パトス',pron:'르타오 파토스',image:'./assets/letao-dessert.jpg',rating:'DAY 1 · 디저트',hours:'카페 10:00~18:00 기준',budget:'¥1,000~¥2,000',location:'사카이마치 거리',desc:'오타루에서 디저트 한 곳만 고른다면 추천하는 후보. 치즈케이크 계열이 강하고 동선도 좋습니다.',recommend:'오르골당 관람 뒤 쉬었다가 미나미오타루역으로 가면 첫날 걷는 피로를 줄일 수 있습니다.',menu:'더블 프로마쥬 · 치즈케이크 · 커피',map:'https://www.google.com/maps/search/?api=1&query=LeTAO+PATHOS+Otaru'},
  {id:'suage',day:1,type:'식당',name:'Soup Curry Suage+',jp:'スープカレー Suage+',pron:'스푸 카레 스아게 플러스',image:'./assets/day3-sapporo.jpg',rating:'DAY 1 · 저녁',hours:'방문 전 영업시간 확인',budget:'¥1,500~¥2,500',location:'스스키노 도보권',desc:'첫날 호텔 체크인 뒤 먹기 좋은 홋카이도식 스프카레. 구운 채소가 많아 가족끼리 취향 맞추기도 쉽습니다.',recommend:'첫날 저녁은 오타루에서 이미 많이 걸은 상태라 호텔 가까운 스스키노권 식당을 추천합니다.',menu:'닭고기·채소 스프카레 · 맵기 낮게 선택 가능',map:'https://www.google.com/maps/search/?api=1&query=Soup+Curry+Suage+Sapporo'},
  {id:'shokudo-ichi',day:2,type:'식당',name:'식당 이치',jp:'食堂いち',pron:'쇼쿠도 이치',image:'./assets/day2-jozankei.jpg',rating:'DAY 2 · 점심',hours:'11:00~15:00 기준 · 화요일 휴무',budget:'¥1,000~¥2,000',location:'조잔케이 山ノ風マチ',desc:'조잔케이에서 온천 들어가기 전에 든든하게 먹기 좋은 일본식 정식집. 가족끼리 메뉴 선택이 편합니다.',recommend:'숯불 닭과 연어처럼 아이들이 먹기 쉬운 메뉴가 있어, 온천 전 점심으로 무난하게 추천합니다.',menu:'숯불 닭 정식 · 연어 정식 · 생강구이 정식',map:'https://www.google.com/maps/search/?api=1&query=Shokudo+Ichi+Jozankei'},
  {id:'amenohi',day:2,type:'카페',name:'비 오는 날과 눈 오는 날',jp:'雨ノ日と雪ノ日',pron:'아메노히토 유키노히',image:'./assets/day2-jozankei.jpg',rating:'DAY 2 · 젤라토',hours:'10:00~18:00 기준 · 목요일 휴무',budget:'¥500~¥1,500',location:'조잔케이 온천마을',desc:'조잔케이 산책 후 온천에 들어가기 전 잠깐 쉬기 좋은 젤라토 카페. 우유 풍미가 진한 디저트가 중심입니다.',recommend:'점심을 먹은 뒤 20~30분만 쉬고 온천으로 이동하면 3시간 온천 시간을 그대로 확보할 수 있습니다.',menu:'저지우유 젤라토 · 커피',map:'https://www.google.com/maps/search/?api=1&query=Ame+no+Hi+to+Yuki+no+Hi+Jozankei'},
  {id:'hanamaru',day:2,type:'식당',name:'네무로 하나마루 COCONO SUSUKINO',jp:'回転寿司 根室花まる',pron:'카이텐즈시 네무로 하나마루',image:'./assets/day3-sapporo.jpg',rating:'DAY 2 · 저녁',hours:'11:00~21:00 기준',budget:'주문량별 상이',location:'COCONO SUSUKINO B1',desc:'온천 후 스스키노에 도착하자마자 먹기 좋은 회전초밥. 숙소와 TV타워 이동 사이에 위치가 좋습니다.',recommend:'대기시간이 길면 야경 일정이 밀릴 수 있으니 25~30분 이상이면 같은 건물 안 다른 식당으로 바꾸는 플랜B를 추천합니다.',menu:'연어 · 참치 · 가리비 · 새우 · 제철초밥',map:'https://www.google.com/maps/search/?api=1&query=Nemuro+Hanamaru+COCONO+Susukino'},
  {id:'rokkatei',day:3,type:'카페',name:'롯카테이 신궁차야점',jp:'六花亭 神宮茶屋店',pron:'롯카테이 진구 차야텐',image:'./assets/day3-sapporo.jpg',rating:'DAY 3 · 오전 간식',hours:'09:00~17:00 기준',budget:'¥500~¥1,500',location:'홋카이도 신궁 인근',desc:'신궁 산책 뒤 쉬기 좋은 작은 디저트 코스. 홋카이도 과자를 현장에서 간단히 먹고 가기 좋습니다.',recommend:'아침에 신궁을 보고 바로 들르면 동선을 추가하지 않고도 카페 시간을 만들 수 있습니다.',menu:'구운 떡 · 과자 · 따뜻한 음료',map:'https://www.google.com/maps/search/?api=1&query=Rokkatei+Jingu+Chayaten'},
  {id:'wako',day:3,type:'식당',name:'돈카츠 와코',jp:'とんかつ和幸 札幌ステラプレイス',pron:'톤카츠 와코 삿포로 스테라푸레이스',image:'./assets/naruto-food.jpg',rating:'DAY 3 · 점심',hours:'11:00~22:00 기준',budget:'¥1,500~¥2,500',location:'삿포로 스텔라플레이스 6F',desc:'요청한 돈카츠 점심을 3일차에 배치. 삿포로역에서 다음 비어가든 버스를 타기 전에 먹기 편한 위치입니다.',recommend:'아이들은 히레카츠, 어른은 로스카츠를 골라 나눠 먹으면 메뉴 선택이 편합니다.',menu:'로스카츠 · 히레카츠 정식',map:'https://www.google.com/maps/search/?api=1&query=Tonkatsu+Wako+Sapporo+Stellar+Place'},
  {id:'beer-garden',day:3,type:'식당',name:'삿포로 비어가든',jp:'サッポロビール園',pron:'삿포로 비루엔',image:'./assets/day3-sapporo.jpg',rating:'DAY 3 · 저녁',hours:'11:30~21:00 기준',budget:'메뉴별 상이',location:'삿포로 맥주박물관 옆',desc:'맥주박물관 관람 뒤 이동 없이 바로 이어지는 징기스칸 저녁. 이번 여행에서 남편을 위해 넣은 핵심 식사 코스입니다.',recommend:'17시 전후로 예약해 두면 쇼핑·박물관을 마친 뒤 줄 서는 시간을 줄일 수 있습니다.',menu:'생양고기 징기스칸 · 채소 · 사이드 메뉴',map:'https://www.google.com/maps/search/?api=1&query=Sapporo+Beer+Garden'},
  {id:'ramen-dojo',day:4,type:'식당',name:'홋카이도 라멘 도죠',jp:'北海道ラーメン道場',pron:'홋카이도 라멘 도죠',image:'./assets/day4-airport.jpg',rating:'DAY 4 · 마지막 점심',hours:'매장별 영업시간 상이',budget:'¥1,000~¥2,000',location:'신치토세공항 국내선 3F',desc:'귀국 전 마지막 한 끼로 라멘을 먹기 가장 편한 선택. 여러 인기 라멘집이 한 공간에 모여 있어 줄이 짧은 곳으로 바꾸기도 쉽습니다.',recommend:'특정 가게 줄이 너무 길면 고집하지 말고 바로 옆 매장으로 바꾸는 것이 16시 비행 일정에는 더 안전합니다.',menu:'이치겐 새우라멘 · 케야키 미소라멘 · 아지사이 시오라멘',map:'https://www.google.com/maps/search/?api=1&query=Hokkaido+Ramen+Dojo+New+Chitose+Airport'}
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
  const topViews = ['home','schedule','routes','places','japanese','checklist','more','info','maps','favorites','memo','expenses','myplaces'];
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
  const active = ['day','place','japanese','info','maps','favorites','memo','expenses','myplaces'].includes(APP.state.view) ? (APP.state.view==='day'?'schedule':APP.state.view==='place'?'schedule':'more') : APP.state.view;
  return `<div class="app-shell">
    <aside class="desktop-rail">
      <button class="desktop-brand desktop-brand-btn" type="button" data-nav="home" aria-label="메인 화면으로 이동"><img src="./assets/icon-192.png"><div><strong>SAPPORO</strong><small>FAMILY TRIP 2026</small></div></button>
      <div class="desktop-menu">${navItems.map(([v,i,l])=>`<button class="desktop-nav-btn ${active===v?'active':''}" data-nav="${v}"><span>${i}</span>${l}</button>`).join('')}
        <button class="desktop-nav-btn ${APP.state.view==='japanese'?'active':''}" data-nav="japanese"><span>あ</span>여행 일본어</button>
        <button class="desktop-nav-btn ${APP.state.view==='places' && APP.state.placeMode==='food'?'active':''}" data-place-mode="food"><span>♡</span>맛집·카페</button>
        <button class="desktop-nav-btn ${APP.state.view==='places' && APP.state.placeMode==='tourism'?'active':''}" data-place-mode="tourism"><span>◉</span>관광지</button>
        <button class="desktop-nav-btn ${APP.state.view==='maps'?'active':''}" data-nav="maps"><span>⌖</span>Google 지도</button>
        <button class="desktop-nav-btn ${APP.state.view==='favorites'?'active':''}" data-nav="favorites"><span>♥</span>즐겨찾기</button>
        <button class="desktop-nav-btn ${APP.state.view==='memo'?'active':''}" data-nav="memo"><span>✎</span>메모</button>
        <button class="desktop-nav-btn ${APP.state.view==='expenses'?'active':''}" data-nav="expenses"><span>¥</span>여행 경비</button>
        <button class="desktop-nav-btn ${APP.state.view==='myplaces'?'active':''}" data-nav="myplaces"><span>＋</span>내 장소</button>
      </div>
      <div class="desktop-trip-card"><strong>2026.10.20 - 10.23</strong><p>가족과 함께하는 3박 4일 가을 삿포로 자유여행</p><img src="./assets/bichon-home.jpg"></div>
    </aside>
    <main class="mobile-shell">${content}${bottomNav(active)}</main>
  </div>`;
}
function bottomNav(active){ return `<nav class="bottom-nav">${navItems.map(([v,i,l])=>`<button class="nav-btn ${active===v?'active':''}" data-nav="${v}"><span class="nav-ico">${i}</span><span>${l}</span></button>`).join('')}</nav>`; }
function topbar(title='',subtitle='',back=false){ return `<div class="topbar">${back?`<button class="back-btn" data-back>‹</button>`:`<div class="brand-lockup"><img src="./assets/icon-192.png"><div><div class="brand-title">SAPPORO</div><div class="brand-sub">FAMILY TRIP</div></div></div>`}<div style="flex:1">${title?`<h1 class="page-title">${title}</h1><div class="page-subtitle">${subtitle}</div>`:''}</div>${back?'':'<button class="icon-btn" data-nav="info" aria-label="여행정보">⚙</button>'}</div>`; }

function renderHome(){
  const status=tripStatus(); const day=getDay(status.day);
  return shell(`<section class="page home-page">${topbar()}
    <div class="home-grid-desktop compact-home-grid">
      <article class="hero compact-hero"><img class="hero-bg" src="${day.image}" alt="${day.title}"><div class="hero-overlay"></div><div class="hero-content">
        <div><span class="hero-kicker">🍁 ${status.label}</span><h1>SAPPORO</h1><div class="trip-dates">2026. 10. 20 - 10. 23 · 3박 4일</div></div>
        <div class="hero-lower"><div><div class="hero-day">${status.mode==='before'?'TRIP START':'TODAY'}</div><div class="hero-place">DAY ${day.day}<br>${day.title}</div></div><img class="hero-bichon" src="./assets/bichon-home.jpg" alt="미니비숑 캐릭터"></div>
      </div></article>
      <div class="home-plan-row">
        <button class="today-launch" data-day="${day.day}">
          <span class="today-launch-icon">🗓</span>
          <span class="today-launch-copy"><strong>오늘 일정 보기</strong><small>DAY ${day.day} · ${day.title}</small></span>
          <span class="today-launch-arrow">›</span>
        </button>
        <div class="day-strip home-day-strip inline-day-strip">${days.map(d=>`<button class="day-tab ${d.day===day.day?'active':''}" data-day="${d.day}"><strong>DAY ${d.day}</strong>${d.title.replace(' ','')}</button>`).join('')}</div>
      </div>
    </div>
    <div class="quick-grid home-quick-grid">
      <button class="quick-tile" data-nav="schedule"><div class="quick-icon">🗓</div><div class="quick-title">여행 일정</div><div class="quick-caption">4일 전체보기</div></button>
      <button class="quick-tile" data-nav="routes"><div class="quick-icon">🚆</div><div class="quick-title">교통편</div><div class="quick-caption">지하철·버스</div></button>
      <button class="quick-tile" data-place-mode="food"><div class="quick-icon">🍴</div><div class="quick-title">맛집·카페</div><div class="quick-caption">식당·디저트 추천</div></button>
      <button class="quick-tile" data-place-mode="tourism"><div class="quick-icon">📷</div><div class="quick-title">관광지</div><div class="quick-caption">명소 추천</div></button>
      <button class="quick-tile" data-nav="checklist"><div class="quick-icon">✅</div><div class="quick-title">체크리스트</div><div class="quick-caption">준비물 확인</div></button>
      <button class="quick-tile" data-nav="japanese"><div class="quick-icon">あ</div><div class="quick-title">여행 일본어</div><div class="quick-caption">회화·음성</div></button>
    </div>
    <div class="quick-grid home-quick-grid home-secondary-grid">
      <button class="quick-tile" data-nav="maps"><div class="quick-icon">🗺️</div><div class="quick-title">Google 지도</div><div class="quick-caption">여행지 바로 열기</div></button>
      <button class="quick-tile" data-nav="myplaces"><div class="quick-icon">＋</div><div class="quick-title">내 장소</div><div class="quick-caption">인스타·웹 저장</div></button>
      <button class="quick-tile" data-nav="memo"><div class="quick-icon">✎</div><div class="quick-title">여행 메모</div><div class="quick-caption">날짜별 저장</div></button>
      <button class="quick-tile" data-nav="expenses"><div class="quick-icon">¥</div><div class="quick-title">여행 경비</div><div class="quick-caption">예산·잔액</div></button>
      <button class="quick-tile" data-nav="favorites"><div class="quick-icon">♥</div><div class="quick-title">즐겨찾기</div><div class="quick-caption">저장 장소</div></button>
    </div>
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
    const foodIds=d.events.filter(e=>e.place).map(e=>e.place); const ps=places.filter(p=>foodIds.includes(p.id) && ['식당','카페'].includes(p.type));
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

function placeCard(p){ return `<article class="place-card"><img class="photo" src="${p.image}" alt="${p.name}"><div class="place-card-body"><div class="place-head"><div><div class="place-day-badge">DAY ${p.day} · ${p.type}</div><div class="place-name">${p.name}</div><div class="place-jp">${p.jp} · ${p.pron}</div></div><button class="heart-btn ${isFav(p.id)?'on':''}" data-fav="${p.id}">♥</button></div><div class="place-rating">★ ${p.rating}</div><div class="place-desc">${p.desc}</div>${p.recommend?`<div class="place-recommend"><strong>추천 포인트</strong><span>${p.recommend}</span></div>`:''}<div class="place-facts"><div class="fact"><small>운영/시간</small><strong>${p.hours}</strong></div><div class="fact"><small>예상/입장</small><strong>${p.budget}</strong></div></div><div class="card-actions"><button class="primary" data-place="${p.id}">상세 보기</button><button data-map="${esc(p.map)}">지도에서 보기</button></div></div></article>`; }
function userPlaceCatalogCard(p){
  const icon=({맛집:'🍴',카페:'☕',관광:'📷',쇼핑:'🛍'}[p.category]||'📍');
  const media=p.image?`<img class="photo" src="${esc(p.image)}" alt="${esc(p.name)}">`:`<div class="photo user-catalog-placeholder">${icon}</div>`;
  return `<article class="place-card user-place-catalog">${media}<div class="place-card-body"><div class="place-head"><div><div class="place-day-badge">내 저장 · ${esc(p.category)}${p.dayCandidate&&p.dayCandidate!=='미정'?` · ${esc(p.dayCandidate)}`:''}</div><div class="place-name">${esc(p.name)}</div><div class="place-jp">${esc(p.area||'지역 미입력')}</div></div>${p.favorite?'<span class="heart-btn on static-heart">♥</span>':''}</div>${p.note?`<div class="place-desc">${esc(p.note)}</div>`:''}<div class="card-actions">${p.sourceUrl?`<button data-open-url="${esc(p.sourceUrl)}">원본 보기</button>`:''}<button data-map="${esc(userPlaceMap(p))}">지도에서 보기</button></div></div></article>`;
}
function renderPlaces(){
  const mode=APP.state.placeMode || 'food';
  const f=APP.state.placeFilter || '전체';
  let base=mode==='tourism' ? places.filter(p=>p.type==='관광') : places.filter(p=>['식당','카페'].includes(p.type));
  if(mode==='food' && f==='맛집') base=base.filter(p=>p.type==='식당');
  else if(mode==='food' && f==='카페') base=base.filter(p=>p.type==='카페');

  let mine=mode==='tourism' ? getUserPlaces().filter(p=>p.category==='관광') : getUserPlaces().filter(p=>['맛집','카페'].includes(p.category));
  if(mode==='food' && f==='맛집') mine=mine.filter(p=>p.category==='맛집');
  else if(mode==='food' && f==='카페') mine=mine.filter(p=>p.category==='카페');

  const title=mode==='tourism' ? '관광지' : '맛집 · 카페';
  const subtitle=mode==='tourism' ? '추천 명소와 내가 저장한 관광지를 함께 봐요' : '추천 식당·카페와 내가 찾은 장소를 함께 봐요';
  const filters=mode==='food' ? `<div class="filter-row">${['전체','맛집','카페'].map(x=>`<button class="filter-chip ${f===x?'active':''}" data-filter="${x}">${x}</button>`).join('')}</div>` : '';
  return shell(`<section class="page">${topbar(title,subtitle)}${filters}
    ${mine.length?`<div class="section-label saved-catalog-title"><h2>내가 저장한 장소</h2><span class="status-pill">${mine.length}곳</span></div><div class="place-grid">${mine.map(userPlaceCatalogCard).join('')}</div>`:''}
    <div class="section-label saved-catalog-title"><h2>앱 추천 장소</h2><span class="status-pill">${base.length}곳</span></div><div class="place-grid">${base.map(placeCard).join('')}</div>
  </section>`);
}
function renderPlace(){ const p=places.find(x=>x.id===APP.state.place); if(!p)return renderPlaces(); return shell(`<section class="page">${topbar('', '', true)}<img class="detail-photo" src="${p.image}" alt="${p.name}"><h1 class="detail-name">${p.name}</h1><div class="detail-jp">${p.jp} · ${p.pron}</div><div class="place-rating">★ ${p.rating}</div><p class="detail-desc">${p.desc}</p>
  ${p.recommend?`<div class="detail-recommend"><strong>내 추천 포인트</strong><p>${p.recommend}</p></div>`:''}<div class="info-box"><h3>한눈에 보기</h3><div class="info-list"><div class="info-row"><span>여행일</span><strong>DAY ${p.day}</strong></div><div class="info-row"><span>운영/시간</span><strong>${p.hours}</strong></div><div class="info-row"><span>예상 비용</span><strong>${p.budget}</strong></div><div class="info-row"><span>위치</span><strong>${p.location}</strong></div>${p.menu?`<div class="info-row"><span>추천 메뉴</span><strong>${p.menu}</strong></div>`:''}</div></div>
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



const USER_PLACE_KEY = 'sapporo-user-places-v5';
function getUserPlaces(){ try{return JSON.parse(localStorage.getItem(USER_PLACE_KEY)||'[]')}catch{return []} }
function saveUserPlaces(items){ localStorage.setItem(USER_PLACE_KEY,JSON.stringify(items)); }
function userPlaceMap(p){ return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent([p.name,p.area].filter(Boolean).join(' '))}`; }
function sourceLabel(url='', type=''){ if(type) return type; if(!url) return '직접 입력'; if(/instagram\.com/i.test(url)) return 'Instagram'; if(/maps\.app\.goo\.gl|google\..*maps/i.test(url)) return 'Google Maps'; return '웹'; }
function normalizeCloudPlace(r){ return {id:r.id,cloudId:r.id,synced:true,name:r.name||'',category:r.category||'맛집',area:r.area||'',sourceUrl:r.source_url||'',sourceType:r.source_type||'',note:r.note||'',dayCandidate:r.day_candidate?`DAY ${r.day_candidate}`:'미정',favorite:r.favorite!==false,image:r.image_url||'',imagePath:r.image_path||'',createdAt:r.created_at||new Date().toISOString()}; }
function cloudConfigured(){ return Boolean(window.SapporoCloud?.configured?.()); }
function cloudSignedIn(){ return Boolean(APP.cloudSession?.user); }
function hasSupabaseAuthCallback(){
  const h=location.hash||'';
  const q=location.search||'';
  return /(?:^#|[&#])(access_token|refresh_token|expires_in|token_type|type|error|error_code|error_description)=/i.test(h) || /[?&](code|error|error_code|error_description)=/i.test(q);
}
async function initCloud(initialSession=null){
  if(!cloudConfigured()) return;
  try{
    APP.cloudSession=initialSession || await window.SapporoCloud.getSession();
    window.SapporoCloud.onAuthChange(async session=>{ APP.cloudSession=session; if(session) await syncCloudPlaces(false); if(['myplaces','favorites','places','maps'].includes(APP.state.view)) render(); });
    if(APP.cloudSession){
      await syncCloudPlaces(false);
      if(['myplaces','favorites','places','maps'].includes(APP.state.view)) render();
    }
  }catch(e){ console.warn('cloud init',e); }
}
async function syncCloudPlaces(show=true){
  if(!cloudConfigured() || !cloudSignedIn()) return;
  try{
    const cloud=(await window.SapporoCloud.listPlaces()).map(normalizeCloudPlace);
    const local=getUserPlaces().filter(x=>!x.synced);
    const byId=new Map([...cloud,...local].map(x=>[String(x.id),x]));
    saveUserPlaces([...byId.values()].sort((a,b)=>String(b.createdAt||'').localeCompare(String(a.createdAt||''))));
    if(show) toast('클라우드와 동기화했어요');
  }catch(e){ console.warn(e); if(show) toast('동기화에 실패했어요'); }
}
function dataUrlToBlob(dataUrl){ const [h,b64]=dataUrl.split(','); const mime=(h.match(/data:(.*?);/)||[])[1]||'image/jpeg'; const bin=atob(b64); const a=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i); return new Blob([a],{type:mime}); }
async function compressImage(file,max=1200,quality=.72){
  if(!file) return {blob:null,dataUrl:''};
  const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)});
  const img=await new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=reject;i.src=data});
  let w=img.width,h=img.height; const scale=Math.min(1,max/Math.max(w,h)); w=Math.round(w*scale);h=Math.round(h*scale);
  const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);
  const blob=await new Promise(res=>c.toBlob(res,'image/jpeg',quality));
  const dataUrl=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(blob)});
  return {blob,dataUrl};
}
function userPlaceCard(p){
  const img=p.image?`<img src="${esc(p.image)}" alt="${esc(p.name)}">`:`<div class="saved-place-placeholder">${({맛집:'🍴',카페:'☕',관광:'📷',쇼핑:'🛍'}[p.category]||'📍')}</div>`;
  return `<article class="saved-place-card">${img}<div class="saved-place-body"><div class="saved-place-top"><span>${esc(p.category)}</span><small>${esc(p.dayCandidate||'미정')}</small></div><h3>${esc(p.name)}</h3><p>${esc(p.area||'지역 미입력')}</p>${p.note?`<div class="saved-place-note">${esc(p.note)}</div>`:''}<div class="saved-place-actions">${p.sourceUrl?`<button data-open-url="${esc(p.sourceUrl)}">원본</button>`:''}<button data-map="${esc(userPlaceMap(p))}">Google 지도</button><button data-user-place-delete="${esc(p.id)}">삭제</button></div></div></article>`;
}
function renderMyPlaces(){
  const all=getUserPlaces(); const filter=APP.state.myPlaceFilter||'전체'; const cats=['전체','맛집','카페','관광','쇼핑']; const list=filter==='전체'?all:all.filter(x=>x.category===filter);
  let cloud='';
  if(!cloudConfigured()) cloud=`<div class="cloud-card warning"><strong>☁ 클라우드 연결 전</strong><p>지금 저장해도 이 기기에는 남습니다. PC·휴대폰 동기화를 켜려면 Supabase 1회 설정이 필요해요.</p></div>`;
  else if(!cloudSignedIn()) cloud=`<div class="cloud-card"><strong>☁ 클라우드 로그인</strong><p>같은 계정으로 로그인하면 PC와 휴대폰에서 같은 장소를 볼 수 있어요. 기기마다 최초 1회 로그인이 필요합니다.</p><div class="cloud-login-actions"><button class="google-login-btn" id="cloudGoogleLogin"><span>G</span> Google로 로그인</button><div class="cloud-divider"><span>또는 이메일 링크</span></div><div class="cloud-login"><input id="cloudEmail" type="email" placeholder="이메일 주소"><button class="primary-btn" id="cloudLogin">로그인 링크 받기</button></div></div></div>`;
  else cloud=`<div class="cloud-card ok"><strong>✓ 클라우드 동기화 중</strong><p>${esc(APP.cloudSession.user.email||'로그인됨')}</p><div class="saved-place-actions"><button id="cloudSync">지금 동기화</button><button id="cloudSignout">로그아웃</button></div></div>`;
  return shell(`<section class="page">${topbar('내 장소','인스타·웹에서 찾은 맛집과 카페를 저장해요',true)}
    ${cloud}
    <div class="saved-place-form"><h3>+ 새 장소 추가</h3>
      <div class="ai-place-tip"><div class="ai-place-tip-icon">✨</div><div><strong>사진만 올려도 AI가 먼저 읽어요</strong><span>Supabase 로그인 후 스크린샷을 선택하면 매장명 · 카테고리 · 지역 · 보이는 메뉴/정보를 자동으로 채웁니다. 결과는 저장 전에 한 번 확인해 주세요.</span></div></div>
      <div class="saved-place-form-grid"><input id="userPlaceName" placeholder="장소명 *"><select id="userPlaceCategory"><option>맛집</option><option>카페</option><option>관광</option><option>쇼핑</option></select><input id="userPlaceArea" placeholder="지역 예: 삿포로 오도리"><select id="userPlaceDay"><option>미정</option><option>DAY 1</option><option>DAY 2</option><option>DAY 3</option><option>DAY 4</option></select><input id="userPlaceUrl" type="url" placeholder="인스타 / 블로그 / Google Maps 링크"><textarea id="userPlaceNote" placeholder="메모 · 추천 메뉴 · 꼭 먹고 싶은 것"></textarea><label class="upload-box ai-upload-box"><span>📷 스크린샷 첨부</span><small>사진을 고르면 AI 자동 분석이 시작됩니다.</small><input id="userPlaceImage" type="file" accept="image/*"></label><div id="aiPlaceStatus" class="ai-place-status idle"><span>✨</span><div><strong>AI 자동 읽기 대기</strong><small>사진을 선택하면 자동으로 분석합니다.</small></div><button type="button" id="reanalyzePlaceImage" class="mini-ai-btn" hidden>다시 분석</button></div><label class="favorite-check"><input id="userPlaceFavorite" type="checkbox" checked> ♥ 즐겨찾기로 저장</label></div><button class="primary-btn full" id="saveUserPlace">장소 저장</button></div>
    <div class="memo-tabs">${cats.map(x=>`<button class="memo-tab ${x===filter?'active':''}" data-userplace-filter="${x}">${x}</button>`).join('')}</div>
    <div class="section-label"><h2>저장한 장소</h2><span class="status-pill">${list.length}곳</span></div>
    <div class="saved-place-list">${list.length?list.map(userPlaceCard).join(''):`<div class="empty-state"><div class="empty-ico">📌</div><strong>아직 저장한 장소가 없어요</strong><p>인스타 링크, 인터넷 주소, 스크린샷을 함께 저장해 두면 현장에서 바로 찾을 수 있어요.</p></div>`}</div>
  </section>`);
}

let pendingUserPlaceImage = null;
function setAiPlaceStatus(kind,title,detail=''){
  const box=q('#aiPlaceStatus'); if(!box)return;
  box.className=`ai-place-status ${kind}`;
  const strong=box.querySelector('strong'); const small=box.querySelector('small');
  if(strong) strong.textContent=title;
  if(small) small.textContent=detail;
  const retry=q('#reanalyzePlaceImage'); if(retry) retry.hidden = !['error','done'].includes(kind);
}
function fillPlaceFromAI(result={}){
  const set=(sel,val)=>{const el=q(sel); if(el && val && !String(el.value||'').trim()) el.value=val;};
  set('#userPlaceName',result.name);
  const cat=q('#userPlaceCategory');
  if(cat && ['맛집','카페','관광','쇼핑'].includes(result.category||'')) cat.value=result.category;
  set('#userPlaceArea',result.area);
  const noteParts=[];
  if(result.summary) noteParts.push(result.summary);
  if(result.visible_menu) noteParts.push(`보이는 메뉴/정보: ${result.visible_menu}`);
  if(result.hours_or_price) noteParts.push(`영업/가격: ${result.hours_or_price}`);
  const note=q('#userPlaceNote');
  if(noteParts.length && note && !note.value.trim()) note.value=noteParts.join('\n');
}
async function analyzeSelectedPlaceImage(){
  const file=q('#userPlaceImage')?.files?.[0]||null;
  if(!file){ setAiPlaceStatus('idle','AI 자동 읽기 대기','사진을 선택하면 자동으로 분석합니다.'); return; }
  if(!cloudConfigured()){ setAiPlaceStatus('error','Supabase 연결이 먼저 필요해요','클라우드 연결이 끝나면 사진 선택 즉시 AI 분석이 시작됩니다.'); return; }
  if(!cloudSignedIn()){ setAiPlaceStatus('error','클라우드 로그인이 필요해요','위의 이메일 로그인 후 같은 사진을 다시 선택하거나 ‘다시 분석’을 눌러주세요.'); return; }
  try{
    setAiPlaceStatus('loading','AI가 사진을 읽는 중…','매장명과 화면에 보이는 정보를 확인하고 있어요.');
    const packed=await compressImage(file,1200,.72);
    pendingUserPlaceImage={file,packed};
    const result=await window.SapporoCloud.analyzePlaceImage(packed.dataUrl);
    fillPlaceFromAI(result||{});
    const confidence=Number(result?.confidence||0);
    const suffix=confidence ? ` · 신뢰도 ${Math.round(confidence*100)}%` : '';
    setAiPlaceStatus('done','AI 분석 완료'+suffix,'자동으로 채운 내용을 확인한 뒤 저장해 주세요.');
  }catch(e){
    console.warn('AI place analysis',e);
    setAiPlaceStatus('error','AI 분석에 실패했어요',e?.message||'잠시 후 다시 시도해 주세요.');
  }
}

async function saveUserPlaceFromForm(){
  const name=q('#userPlaceName')?.value.trim(); if(!name){toast('장소명을 입력해 주세요');return;}
  const file=q('#userPlaceImage')?.files?.[0]||null; let packed={blob:null,dataUrl:''};
  try{
    if(file && pendingUserPlaceImage?.file===file) packed=pendingUserPlaceImage.packed;
    else if(file) packed=await compressImage(file);
  }catch(e){console.warn(e);toast('이미지 처리에 실패했어요');return;}
  const item={id:`local-${Date.now()}`,synced:false,name,category:q('#userPlaceCategory').value,area:q('#userPlaceArea').value.trim(),dayCandidate:q('#userPlaceDay').value,sourceUrl:q('#userPlaceUrl').value.trim(),sourceType:sourceLabel(q('#userPlaceUrl').value.trim()),note:q('#userPlaceNote').value.trim(),favorite:q('#userPlaceFavorite').checked,image:packed.dataUrl,imagePath:'',createdAt:new Date().toISOString()};
  const local=getUserPlaces(); local.unshift(item); saveUserPlaces(local); toast('장소를 저장했어요'); render();
  if(cloudConfigured() && cloudSignedIn()){
    try{ const saved=await window.SapporoCloud.savePlace(item,packed.blob,file?.name||'screenshot.jpg'); const now=getUserPlaces().filter(x=>x.id!==item.id); now.unshift(normalizeCloudPlace(saved)); saveUserPlaces(now); toast('클라우드에도 저장했어요'); render(); }
    catch(e){ console.warn(e); toast('기기에는 저장됐지만 클라우드 저장은 실패했어요'); }
  }
}
async function pushUnsyncedPlaces(){
  if(!cloudConfigured()||!cloudSignedIn()){toast('먼저 클라우드에 로그인해 주세요');return;}
  const items=getUserPlaces(); let count=0;
  for(const x of items.filter(x=>!x.synced)){
    try{ const blob=x.image?.startsWith('data:')?dataUrlToBlob(x.image):null; await window.SapporoCloud.savePlace(x,blob,`${Date.now()}.jpg`); count++; }catch(e){console.warn(e)}
  }
  await syncCloudPlaces(false); toast(count?`${count}곳을 클라우드에 올렸어요`:'동기화할 새 장소가 없어요'); if(APP.state.view==='myplaces')render();
}

const MAP_HOTELS = [
  {name:'숙소 · 소테츠 프레사 인 삿포로 스스키노',day:'숙소',map:'https://www.google.com/maps/search/?api=1&query=Sotetsu+Fresa+Inn+Sapporo+Susukino'},
  {name:'신치토세공항',day:'공항',map:'https://www.google.com/maps/search/?api=1&query=New+Chitose+Airport'}
];
function renderMaps(){
  const groups=days.map(d=>({day:d.day,title:d.title,items:places.filter(p=>p.day===d.day)}));
  return shell(`<section class="page">${topbar('Google 지도','여행 중 자주 찾는 장소를 바로 열어요',true)}
    <div class="map-shortcuts">${MAP_HOTELS.map(x=>`<button class="map-shortcut main" data-map="${esc(x.map)}"><span>📍</span><div><strong>${x.name}</strong><small>${x.day}</small></div><b>›</b></button>`).join('')}</div>
    ${groups.map(g=>`<div class="map-day-block"><div class="section-label"><h2>DAY ${g.day} · ${g.title}</h2><span class="status-pill">${g.items.length}곳</span></div><div class="map-shortcuts">${g.items.map(p=>`<button class="map-shortcut" data-map="${esc(p.map)}"><span>${iconForType(p.type)}</span><div><strong>${p.name}</strong><small>${p.type} · ${p.location}</small></div><b>›</b></button>`).join('')}</div></div>`).join('')}
    <div class="info-box"><h3>교통 경로도 바로 열기</h3><div class="map-shortcuts">${Object.entries(routes).map(([id,r])=>`<button class="map-shortcut" data-map="${esc(r.map)}"><span>🚆</span><div><strong>${r.title}</strong><small>${r.time}</small></div><b>›</b></button>`).join('')}</div></div>
  </section>`);
}
function renderFavorites(){
  const list=places.filter(p=>isFav(p.id)); const mine=getUserPlaces().filter(p=>p.favorite); const total=list.length+mine.length;
  return shell(`<section class="page">${topbar('즐겨찾기','♥로 저장한 추천 장소와 내가 찾은 장소를 한곳에서',true)}
    ${list.length?`<div class="section-label"><h2>앱 추천 장소</h2><span class="status-pill">${list.length}곳</span></div><div class="place-grid">${list.map(placeCard).join('')}</div>`:''}
    ${mine.length?`<div class="section-label" style="margin-top:18px"><h2>내가 저장한 장소</h2><span class="status-pill">${mine.length}곳</span></div><div class="saved-place-list">${mine.map(userPlaceCard).join('')}</div>`:''}
    ${!total?`<div class="empty-state"><div class="empty-ico">♥</div><strong>아직 저장한 장소가 없어요</strong><p>추천 장소의 ♥를 누르거나 ‘내 장소’에서 인스타 맛집을 저장해 보세요.</p><button class="primary-btn" data-nav="myplaces">내 장소 추가하기</button></div>`:''}
  </section>`);
}
function memoKey(tab){ return `sapporo-memo-${tab}`; }
function getMemo(tab){ return localStorage.getItem(memoKey(tab)) || ''; }
function renderMemo(){
  const tabs=['전체','DAY 1','DAY 2','DAY 3','DAY 4']; const t=APP.state.memoTab || '전체';
  return shell(`<section class="page">${topbar('여행 메모','입력하는 즉시 이 휴대폰에 자동 저장돼요',true)}
    <div class="memo-tabs">${tabs.map(x=>`<button class="memo-tab ${x===t?'active':''}" data-memotab="${x}">${x}</button>`).join('')}</div>
    <div class="memo-card"><div class="memo-head"><div><strong>${t} 메모</strong><small>식당 주문, 살 것, 아이들 요청, 기억할 내용 등을 적어두세요.</small></div><span id="memoStatus">자동 저장</span></div><textarea id="memoText" class="memo-text" placeholder="여기에 메모하세요...">${esc(getMemo(t))}</textarea></div>
    <div class="memo-tip">💡 장소 이름이나 일본어 문장을 적어 두면 현장에서 바로 보여주기 편해요.</div>
  </section>`);
}
function expenseKey(){ return 'sapporo-expenses-v1'; }
function getExpenses(){ try{return JSON.parse(localStorage.getItem(expenseKey())||'[]')}catch{return []} }
function saveExpenses(items){ localStorage.setItem(expenseKey(),JSON.stringify(items)); }
function getBudget(){ return Number(localStorage.getItem('sapporo-budget-yen')||0); }
function yen(n){ return `¥${Math.round(Number(n)||0).toLocaleString('ja-JP')}`; }
function renderExpenses(){
  const items=getExpenses(); const budget=getBudget(); const spent=items.reduce((s,x)=>s+Number(x.amount||0),0); const remain=budget-spent; const pct=budget>0?Math.min(100,Math.round(spent/budget*100)):0;
  const cats=['식사','카페','교통','쇼핑','관광','기타'];
  return shell(`<section class="page">${topbar('여행 경비','예산을 입력하면 사용액과 남은 잔액을 자동 계산해요',true)}
    <div class="budget-summary"><div><small>총 예산</small><strong>${yen(budget)}</strong></div><div><small>사용 금액</small><strong>${yen(spent)}</strong></div><div class="${remain<0?'negative':''}"><small>남은 잔액</small><strong>${yen(remain)}</strong></div></div>
    <div class="budget-progress"><div style="width:${pct}%"></div></div>
    <div class="finance-card"><h3>총 여행 예산 설정</h3><div class="input-row"><div class="money-input"><span>¥</span><input id="budgetInput" type="number" min="0" inputmode="numeric" value="${budget||''}" placeholder="예: 200000"></div><button class="primary-btn" id="saveBudget">예산 저장</button></div><p class="form-help">모든 경비는 엔화(¥) 기준으로 기록합니다.</p></div>
    <div class="finance-card"><h3>사용 금액 추가</h3><div class="expense-form"><select id="expenseDay"><option>DAY 1</option><option>DAY 2</option><option>DAY 3</option><option>DAY 4</option><option>기타</option></select><select id="expenseCat">${cats.map(c=>`<option>${c}</option>`).join('')}</select><input id="expenseMemo" type="text" maxlength="40" placeholder="사용처/메모 예: 나루토 점심"><div class="money-input"><span>¥</span><input id="expenseAmount" type="number" min="1" inputmode="numeric" placeholder="금액"></div><button class="primary-btn" id="addExpense">+ 경비 추가</button></div></div>
    <div class="section-label"><h2>사용 내역</h2><span class="status-pill">${items.length}건</span></div>
    <div class="expense-list">${items.length?items.slice().reverse().map(x=>`<div class="expense-item"><div class="expense-cat">${x.category}</div><div class="expense-main"><strong>${esc(x.memo||x.category)}</strong><small>${x.day} · ${x.category}</small></div><div class="expense-amt">${yen(x.amount)}</div><button class="expense-del" data-expense-delete="${x.id}" aria-label="삭제">×</button></div>`).join(''):`<div class="empty-state compact"><div class="empty-ico">¥</div><strong>아직 기록된 경비가 없어요</strong><p>사용할 때마다 금액을 추가하면 남은 예산이 바로 계산됩니다.</p></div>`}</div>
  </section>`);
}
function renderMore(){ return shell(`<section class="page">${topbar('더보기','여행 중 자주 쓰는 기능')}
  <div class="quick-grid"><button class="quick-tile" data-nav="maps"><div class="quick-icon">🗺️</div><div class="quick-title">Google 지도</div><div class="quick-caption">장소 바로 열기</div></button><button class="quick-tile" data-nav="favorites"><div class="quick-icon">♥</div><div class="quick-title">즐겨찾기</div><div class="quick-caption">저장 장소</div></button><button class="quick-tile" data-nav="memo"><div class="quick-icon">✎</div><div class="quick-title">여행 메모</div><div class="quick-caption">날짜별 저장</div></button><button class="quick-tile" data-nav="expenses"><div class="quick-icon">¥</div><div class="quick-title">여행 경비</div><div class="quick-caption">예산·잔액</div></button><button class="quick-tile" data-nav="myplaces"><div class="quick-icon">＋</div><div class="quick-title">내 장소</div><div class="quick-caption">인스타·웹 저장</div></button><button class="quick-tile" data-nav="japanese"><div class="quick-icon">あ</div><div class="quick-title">여행 일본어</div><div class="quick-caption">음성 재생</div></button><button class="quick-tile" data-place-mode="food"><div class="quick-icon">🍴</div><div class="quick-title">맛집·카페</div><div class="quick-caption">식당·디저트</div></button><button class="quick-tile" data-place-mode="tourism"><div class="quick-icon">📷</div><div class="quick-title">관광지</div><div class="quick-caption">명소 추천</div></button><button class="quick-tile" data-nav="info"><div class="quick-icon">ℹ</div><div class="quick-title">여행 정보</div><div class="quick-caption">전압·통화·긴급</div></button></div>
  <div class="notice-card"><div class="notice-icon">📶</div><div><div class="notice-title">PWA 오프라인 캐시 적용</div><div class="notice-copy">일정·메모·경비는 이 휴대폰에 저장됩니다. ‘내 장소’는 Supabase 연결 후 PC·휴대폰 동기화가 가능합니다.</div></div></div>
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
    case 'maps': html=renderMaps(); break;
    case 'favorites': html=renderFavorites(); break;
    case 'memo': html=renderMemo(); break;
    case 'expenses': html=renderExpenses(); break;
    case 'myplaces': html=renderMyPlaces(); break;
    default: html=renderHome();
  }
  q('#app').innerHTML=html; bind();
}
function bind(){
  qa('[data-nav]').forEach(b=>b.onclick=async()=>{
    const view=b.dataset.nav;
    go(view);
    // 다른 기기에서 저장한 장소를 '내 장소' 진입 시 즉시 다시 불러옵니다.
    if(view==='myplaces' && cloudConfigured() && cloudSignedIn()){
      await syncCloudPlaces(false);
      if(APP.state.view==='myplaces') render();
    }
  });
  qa('[data-place-mode]').forEach(b=>b.onclick=()=>go('places',{placeMode:b.dataset.placeMode,placeFilter:'전체'}));
  qa('[data-day]').forEach(b=>b.onclick=()=>go('day',{day:Number(b.dataset.day),dayTab:'schedule'}));
  qa('[data-daytab]').forEach(b=>b.onclick=()=>replaceViewState({dayTab:b.dataset.daytab}));
  qa('[data-route]').forEach(b=>b.onclick=()=>go('route',{route:b.dataset.route}));
  qa('[data-place]').forEach(b=>b.onclick=()=>go('place',{place:b.dataset.place}));
  qa('[data-filter]').forEach(b=>b.onclick=()=>replaceViewState({placeFilter:b.dataset.filter}));
  qa('[data-jptab]').forEach(b=>b.onclick=()=>replaceViewState({jpTab:b.dataset.jptab}));
  qa('[data-checktab]').forEach(b=>b.onclick=()=>replaceViewState({checkTab:b.dataset.checktab}));
  qa('[data-memotab]').forEach(b=>b.onclick=()=>replaceViewState({memoTab:b.dataset.memotab}));
  qa('[data-check]').forEach(b=>b.onchange=()=>{localStorage.setItem(checkKey(APP.state.checkTab,b.dataset.check),b.checked?'1':'0');render()});
  qa('[data-map]').forEach(b=>b.onclick=()=>mapOpen(b.dataset.map));
  qa('[data-speak]').forEach(b=>b.onclick=()=>speakJapanese(b.dataset.speak));
  qa('[data-copy]').forEach(b=>b.onclick=()=>copyText(b.dataset.copy));
  qa('[data-copy-route]').forEach(b=>b.onclick=()=>copyText(b.dataset.copyRoute));
  qa('[data-fav]').forEach(b=>b.onclick=()=>{toggleFav(b.dataset.fav);render()});
  qa('[data-back]').forEach(b=>b.onclick=()=>historyBack());
  const memo=q('#memoText'); if(memo) memo.oninput=()=>{localStorage.setItem(memoKey(APP.state.memoTab),memo.value);const s=q('#memoStatus');if(s){s.textContent='저장됨 ✓';clearTimeout(bind._memoT);bind._memoT=setTimeout(()=>s.textContent='자동 저장',1200);}};
  const saveBudget=q('#saveBudget'); if(saveBudget) saveBudget.onclick=()=>{const v=Math.max(0,Number(q('#budgetInput').value||0));localStorage.setItem('sapporo-budget-yen',String(v));toast('여행 예산을 저장했어요');render();};
  const addExpense=q('#addExpense'); if(addExpense) addExpense.onclick=()=>{const amount=Math.max(0,Number(q('#expenseAmount').value||0));if(!amount){toast('사용 금액을 입력해 주세요');return;}const items=getExpenses();items.push({id:Date.now(),day:q('#expenseDay').value,category:q('#expenseCat').value,memo:q('#expenseMemo').value.trim(),amount});saveExpenses(items);toast('경비를 추가했어요');render();};
  qa('[data-expense-delete]').forEach(b=>b.onclick=()=>{saveExpenses(getExpenses().filter(x=>String(x.id)!==String(b.dataset.expenseDelete)));toast('경비를 삭제했어요');render();});
  qa('[data-userplace-filter]').forEach(b=>b.onclick=()=>replaceViewState({myPlaceFilter:b.dataset.userplaceFilter}));
  qa('[data-open-url]').forEach(b=>b.onclick=()=>window.open(b.dataset.openUrl,'_blank','noopener'));
  qa('[data-user-place-delete]').forEach(b=>b.onclick=async()=>{const id=b.dataset.userPlaceDelete;const item=getUserPlaces().find(x=>String(x.id)===String(id));if(item?.cloudId&&cloudConfigured()&&cloudSignedIn()){try{await window.SapporoCloud.deletePlace(item.cloudId,item.imagePath||'')}catch(e){console.warn(e)}}saveUserPlaces(getUserPlaces().filter(x=>String(x.id)!==String(id)));toast('장소를 삭제했어요');render();});
  const imgUP=q('#userPlaceImage'); if(imgUP) imgUP.onchange=()=>{pendingUserPlaceImage=null;analyzeSelectedPlaceImage();};
  const retryAI=q('#reanalyzePlaceImage'); if(retryAI) retryAI.onclick=analyzeSelectedPlaceImage;
  const saveUP=q('#saveUserPlace'); if(saveUP) saveUP.onclick=saveUserPlaceFromForm;
  const cloudGoogleLogin=q('#cloudGoogleLogin'); if(cloudGoogleLogin) cloudGoogleLogin.onclick=async()=>{try{await window.SapporoCloud.signInWithGoogle();}catch(e){console.warn(e);const msg=String(e?.message||'');toast(/provider.*disabled|unsupported provider/i.test(msg)?'Supabase에서 Google 로그인을 먼저 활성화해 주세요':(msg?`Google 로그인 실패: ${msg}`:'Google 로그인에 실패했어요'));}};
  const cloudLogin=q('#cloudLogin'); if(cloudLogin) cloudLogin.onclick=async()=>{const email=q('#cloudEmail').value.trim();if(!email){toast('이메일을 입력해 주세요');return;}try{await window.SapporoCloud.sendMagicLink(email);toast('이메일로 로그인 링크를 보냈어요');}catch(e){console.warn(e);const msg=String(e?.message||'');if(Number(e?.status)===429||/rate limit/i.test(msg))toast('메일 발송 한도 초과예요. 잠시 후 다시 시도해 주세요');else toast(msg?`로그인 실패: ${msg}`:'로그인 링크 전송에 실패했어요');}};
  const cloudSync=q('#cloudSync'); if(cloudSync) cloudSync.onclick=pushUnsyncedPlaces;
  const cloudSignout=q('#cloudSignout'); if(cloudSignout) cloudSignout.onclick=async()=>{await window.SapporoCloud.signOut();APP.cloudSession=null;toast('클라우드에서 로그아웃했어요');render();};
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
  else if(['maps','favorites','memo','expenses','myplaces'].includes(APP.state.view)) go('more',{}, {replace:true});
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
if('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('/sw.js?v=11', {scope:'/'}).then(reg=>reg.update().catch(()=>{})).catch(()=>{});
}
async function bootstrapApp(){
  const authCallback=hasSupabaseAuthCallback();
  let authOk=false;
  let authError=null;

  // Magic Link/PKCE 콜백을 앱 라우터보다 먼저 명시적으로 처리합니다.
  // implicit(#access_token...)과 PKCE(?code=...) 둘 다 지원합니다.
  if(authCallback && cloudConfigured()){
    try{
      const session=await window.SapporoCloud.consumeAuthCallback();
      await initCloud(session);
      authOk=Boolean(session?.user || APP.cloudSession?.user);
    }catch(e){
      authError=e;
      console.warn('auth callback init',e);
    }
    // 일회성 인증정보는 처리 후 주소에서 제거합니다.
    history.replaceState(null,'',location.pathname+(authOk?'#myplaces':'#myplaces'));
  }

  initNavigation();
  render();

  if(authCallback && authOk){
    setTimeout(()=>toast('클라우드 로그인 완료'),160);
  }else if(authCallback && authError){
    setTimeout(()=>toast(`로그인 처리 실패: ${String(authError?.message||'다시 로그인해 주세요')}`),180);
  }else if(authCallback && !authOk){
    setTimeout(()=>toast('로그인 세션을 만들지 못했어요. 새 링크로 다시 시도해 주세요'),180);
  }

  // 일반 실행은 첫 화면을 먼저 그리고 클라우드를 뒤에서 초기화합니다.
  if(!authCallback) setTimeout(()=>initCloud(),0);
}

let _cloudRefreshTimer = 0;
async function refreshCloudOnResume(){
  if(!cloudConfigured() || !cloudSignedIn()) return;
  clearTimeout(_cloudRefreshTimer);
  _cloudRefreshTimer=setTimeout(async()=>{
    await syncCloudPlaces(false);
    if(['myplaces','favorites','places','maps'].includes(APP.state.view)) render();
  },120);
}
window.addEventListener('focus', refreshCloudOnResume);
document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='visible') refreshCloudOnResume(); });

bootstrapApp();
