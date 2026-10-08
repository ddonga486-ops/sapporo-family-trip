import { readSession } from './_utils/auth.js';

const PUBLIC_PATHS = new Set([
  '/api/auth/login',
  '/api/auth/callback',
  '/api/auth/logout',
  '/api/auth/me'
]);

function securityHeaders(extra = {}) {
  return {
    'Cache-Control': 'no-store, no-cache, must-revalidate, private',
    'Pragma': 'no-cache',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'no-referrer',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    ...extra
  };
}

function loginPage() {
  const html = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow,noarchive" />
  <title>한국공교육원 규정관리</title>
  <style>
    *{box-sizing:border-box}html,body{margin:0;min-height:100%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Noto Sans KR",sans-serif;color:#15345f}body{min-height:100vh;background:linear-gradient(135deg,#f4f8fd 0%,#eaf3fc 55%,#f8fbff 100%);display:grid;place-items:center;padding:28px}.shell{width:min(1080px,100%);min-height:610px;background:#fff;border:1px solid #dce8f4;border-radius:32px;box-shadow:0 28px 70px rgba(34,69,117,.12);display:grid;grid-template-columns:1.08fr .92fr;overflow:hidden}.visual{position:relative;padding:58px;background:linear-gradient(145deg,#dceefe,#eef6ff);display:flex;flex-direction:column;justify-content:center}.brand{display:flex;align-items:center;gap:12px;position:absolute;top:38px;left:48px;font-weight:900;font-size:18px}.logo{width:44px;height:34px;border-radius:10px;background:linear-gradient(145deg,#2586ed,#1256af);position:relative;box-shadow:0 10px 18px rgba(27,94,171,.18)}.logo i{position:absolute;left:7px;right:7px;height:4px;border-radius:999px;background:#fff}.logo i:nth-child(1){top:8px}.logo i:nth-child(2){top:15px;width:65%}.logo i:nth-child(3){top:22px;width:82%}.pill{display:inline-flex;align-self:flex-start;padding:9px 14px;border-radius:999px;background:rgba(255,255,255,.72);color:#5f7fa4;font-size:13px;font-weight:800;margin-bottom:18px}.visual h1{font-size:48px;line-height:1.13;letter-spacing:-2px;margin:0 0 18px;color:#123968}.visual h1 em{font-style:normal;color:#2b6ecc}.visual p{font-size:18px;line-height:1.8;color:#5d7391;margin:0;max-width:520px}.features{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:34px}.feature{padding:16px 14px;border-radius:18px;background:rgba(255,255,255,.66);border:1px solid rgba(255,255,255,.8);font-size:13px;color:#4b678a;font-weight:800;text-align:center}.panel{padding:58px 54px;display:flex;flex-direction:column;justify-content:center}.eyebrow{font-size:12px;color:#7390b2;font-weight:900;letter-spacing:.12em}.panel h2{font-size:34px;letter-spacing:-1.2px;margin:12px 0 12px}.panel .desc{font-size:16px;color:#6f819a;line-height:1.7;margin:0 0 30px}.login{height:60px;border:0;border-radius:16px;background:#1e8f57;color:#fff;text-decoration:none;font-weight:900;font-size:17px;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 12px 24px rgba(30,143,87,.18)}.n{width:28px;height:28px;border-radius:8px;background:#fff;color:#1e8f57;display:grid;place-items:center;font-weight:1000}.note{margin-top:18px;padding:14px 16px;border-radius:15px;background:#f5f9fd;border:1px solid #e4edf7;font-size:13px;color:#647a96;line-height:1.6}.security{display:flex;gap:9px;align-items:flex-start;margin-top:26px;color:#7890ab;font-size:12px;line-height:1.6}.contact{margin-top:34px;color:#91a2b7;font-size:12px}.lock{width:18px;height:18px;flex:none;border:2px solid #7da0c7;border-radius:5px;position:relative;margin-top:1px}.lock:before{content:"";position:absolute;width:8px;height:7px;border:2px solid #7da0c7;border-bottom:0;border-radius:8px 8px 0 0;left:3px;top:-8px}@media(max-width:800px){body{padding:14px}.shell{grid-template-columns:1fr;min-height:auto}.visual{padding:80px 28px 34px}.brand{top:28px;left:28px}.visual h1{font-size:36px}.features{display:none}.panel{padding:38px 28px 44px}.panel h2{font-size:28px}}
  </style>
</head>
<body>
  <main class="shell">
    <section class="visual">
      <div class="brand"><span class="logo"><i></i><i></i><i></i></span><span>한국공교육원 규정관리</span></div>
      <span class="pill">KPEC INTERNAL RULES PORTAL</span>
      <h1>필요한 규정을<br><em>빠르고 정확하게</em></h1>
      <p>인사·총무·복지·업무 매뉴얼과 사내 양식을 한 곳에서 확인하는 한국공교육원 임직원 전용 규정 포털입니다.</p>
      <div class="features"><div class="feature">규정 원문 확인</div><div class="feature">업무 양식 다운로드</div><div class="feature">규정봇 질의</div></div>
    </section>
    <section class="panel">
      <span class="eyebrow">EMPLOYEE LOGIN</span>
      <h2>로그인 후 이용해 주세요</h2>
      <p class="desc">사내 규정 및 자료는 임직원 전용 정보입니다.<br>한국공교육원 NAVER WORKS 계정으로 인증해 주세요.</p>
      <a class="login" href="/api/auth/login"><span class="n">N</span><span>NAVER WORKS로 로그인</span><span>→</span></a>
      <div class="note">회사 이메일 <strong>@kpec.kr</strong> 계정만 로그인할 수 있습니다. 로그인 후 규정, 자료실, 다운로드 및 규정봇 기능을 이용할 수 있습니다.</div>
      <div class="security"><span class="lock"></span><span>로그인하지 않은 방문자는 규정 내용, 자료 파일, 다운로드 API에 접근할 수 없도록 차단됩니다.</span></div>
      <div class="contact">문의 · 경영관리팀</div>
    </section>
  </main>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: securityHeaders({
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'"
    })
  });
}

function unauthorizedApi() {
  return new Response(JSON.stringify({ error: 'login_required' }), {
    status: 401,
    headers: securityHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  });
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // OAuth 진입/콜백 및 로그인 상태 확인 API는 로그인 전에도 접근 가능해야 합니다.
  if (PUBLIC_PATHS.has(path)) {
    return context.next();
  }

  const user = await readSession(context.request, context.env);
  if (user) {
    return context.next();
  }

  // 로그인하지 않은 상태에서 API/파일 경로를 직접 호출하면 데이터를 반환하지 않습니다.
  if (path.startsWith('/api/')) {
    return unauthorizedApi();
  }

  // 루트 이외의 정적 파일(app.js, data.js, PDF 등) 직접 접근도 차단합니다.
  if (path !== '/' && path !== '/index.html') {
    return new Response('Unauthorized', {
      status: 401,
      headers: securityHeaders({ 'Content-Type': 'text/plain; charset=utf-8' })
    });
  }

  // 외부 방문자에게는 사내 규정 본문 대신 로그인 전용 화면만 표시합니다.
  return loginPage();
}
