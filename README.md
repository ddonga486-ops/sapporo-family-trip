# SAPPORO FAMILY TRIP 2026

가족 4인의 2026.10.20~10.23 삿포로 자유여행용 반응형 PWA입니다.

## 실행
정적 파일만으로 동작합니다. 로컬 테스트는 폴더에서 간단한 HTTP 서버를 실행하세요.

```bash
python -m http.server 8080
```

브라우저에서 `http://localhost:8080` 접속.

## Vercel 배포
1. 이 폴더 전체를 GitHub 저장소에 업로드
2. Vercel > Add New Project > 저장소 선택
3. Framework Preset: `Other`
4. Build Command: 비워둠
5. Output Directory: `.`
6. Deploy

## 주요 기능
- 여행 전/여행 중 메인 화면 자동 표시
- DAY 1~4 상세 타임라인
- 초보자용 이동 단계와 일본어/한국어 발음
- Google 지도 검색 바로가기
- 맛집·카페·관광지 상세
- 여행 일본어 음성 재생(Web Speech API)
- 준비물/예약 체크리스트(localStorage)
- 오프라인 캐시(PWA)
