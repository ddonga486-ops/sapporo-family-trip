# GitHub → Vercel 배포 가이드

## 1. GitHub 새 저장소 만들기
예: `sapporo-family-trip`

## 2. 이 ZIP을 압축 해제한 뒤 모든 파일 업로드
반드시 `index.html`, `app.js`, `styles.css`, `manifest.webmanifest`, `sw.js`, `assets` 폴더가 저장소 최상단에 있어야 합니다.

## 3. Vercel 배포
- Vercel 로그인
- **Add New → Project**
- GitHub의 `sapporo-family-trip` 선택
- Framework Preset: **Other**
- Build Command: **비워두기**
- Output Directory: **.**
- Deploy

## 4. 휴대폰에서 앱처럼 설치
### iPhone / Safari
배포 주소 접속 → 공유 버튼 → **홈 화면에 추가**

### Android / Chrome
배포 주소 접속 → 우측 상단 메뉴 → **앱 설치** 또는 **홈 화면에 추가**

## 5. 수정할 곳
여행 일정·장소·일본어·체크리스트는 `app.js` 상단 데이터에서 수정합니다.
디자인 색상은 `styles.css` 상단 `:root` 변수에서 수정합니다.

## 현재 반영 내용
- DAY 1: 신치토세공항에서 캐리어를 호텔로 배송 → 숙소 미방문 → 바로 오타루
- DAY 2: 조잔케이 + 유노하나 온천 3시간 + TV타워 야경
- DAY 3: 홋카이도 신궁 + 쇼핑 + 맥주박물관 + 징기스칸 + 돈키호테
- DAY 4: 신치토세공항 관광 + 라멘도장 + 16:00 귀국
