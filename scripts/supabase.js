// Supabase 클라이언트 초기화
// .env.local 파일에서 환경변수를 읽어옵니다

// 주의: 브라우저에서는 환경변수를 직접 읽을 수 없으므로
// 실제 값을 여기에 직접 입력해야 합니다
const SUPABASE_URL = 'https://ulfcehbqnazkktktxtfc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsZmNlaGJxbmF6a2t0a3R4dGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NTY0NTcsImV4cCI6MjA4MDMzMjQ1N30.8Vv7gta-RxrmW0Fgl8S9iGDvFQNVSLOUHVwq4J-yaYM';

// Supabase 클라이언트 생성
// sessionStorage 사용: 브라우저/탭을 닫으면 자동 로그아웃
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: window.sessionStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// 현재 로그인한 사용자 정보 가져오기
async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

// 로그인 상태 변경 감지
supabase.auth.onAuthStateChange((event, session) => {
    console.log('Auth state changed:', event);
    if (event === 'SIGNED_IN') {
        console.log('User signed in:', session.user);
        updateUIForLoggedInUser(session.user);
    } else if (event === 'SIGNED_OUT') {
        console.log('User signed out');
        updateUIForLoggedOutUser();
    }
});

// UI 업데이트 함수
function updateUIForLoggedInUser(user) {
    // 로그인 버튼을 사용자 정보로 변경
    const navLogin = document.querySelector('.nav-login');
    if (navLogin) {
        const userEmail = user.email.split('@')[0];
        navLogin.innerHTML = `
            <div class="user-menu">
                <span class="user-email">${userEmail}</span>
                <button onclick="handleLogout()" class="logout-btn">로그아웃</button>
            </div>
        `;
    }
}

function updateUIForLoggedOutUser() {
    // 로그인 버튼 복원
    const navLogin = document.querySelector('.nav-login');
    if (navLogin) {
        navLogin.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        `;
        navLogin.href = 'login.html';
    }
}

// 로그아웃 함수
async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('로그아웃 실패:', error.message);
        alert('로그아웃 중 오류가 발생했습니다.');
    } else {
        window.location.href = 'index.html';
    }
}

// 페이지 로드 시 로그인 상태 확인
document.addEventListener('DOMContentLoaded', async () => {
    const user = await getCurrentUser();
    if (user) {
        updateUIForLoggedInUser(user);
    }
});
