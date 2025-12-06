// 인증 관련 기능 (로그인, 회원가입)

// 이메일/비밀번호 로그인
async function handleEmailLogin(email, password) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) throw error;

        console.log('로그인 성공:', data);
        alert('로그인되었습니다!');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('로그인 실패:', error.message);
        alert('로그인 실패: ' + error.message);
    }
}

// 이메일/비밀번호 회원가입
async function handleEmailSignup(email, password) {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) throw error;

        console.log('회원가입 성공:', data);
        alert('회원가입이 완료되었습니다! 이메일을 확인해주세요.');
        closeSignupModal();
    } catch (error) {
        console.error('회원가입 실패:', error.message);
        alert('회원가입 실패: ' + error.message);
    }
}

// Google 로그인
async function handleGoogleLogin() {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });

        if (error) throw error;
    } catch (error) {
        console.error('Google 로그인 실패:', error.message);
        alert('Google 로그인 실패: ' + error.message);
    }
}

// GitHub 로그인
async function handleGitHubLogin() {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
        });

        if (error) throw error;
    } catch (error) {
        console.error('GitHub 로그인 실패:', error.message);
        alert('GitHub 로그인 실패: ' + error.message);
    }
}

// 네이버 로그인
async function handleNaverLogin() {
    alert('네이버 로그인은 준비 중입니다.\n\nSupabase에서 네이버 OAuth를 설정해야 합니다.\n자세한 내용은 개발자에게 문의하세요.');
    // TODO: 네이버 개발자 센터에서 애플리케이션 등록 후 구현
    // https://developers.naver.com/apps/#/register
}

// 카카오 로그인
async function handleKakaoLogin() {
    alert('카카오 로그인은 준비 중입니다.\n\nSupabase에서 카카오 OAuth를 설정해야 합니다.\n자세한 내용은 개발자에게 문의하세요.');
    // TODO: 카카오 개발자 센터에서 애플리케이션 등록 후 구현
    // https://developers.kakao.com/console/app
}

// 회원가입 모달 열기/닫기
function openSignupModal() {
    document.getElementById('signupModal').style.display = 'flex';
}

function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}

// 모달 외부 클릭 시 닫기
window.addEventListener('click', function(event) {
    const modal = document.getElementById('signupModal');
    if (event.target === modal) {
        closeSignupModal();
    }
});
