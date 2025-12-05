// 게시판 CRUD 기능

// 게시글 목록 조회
async function loadPosts() {
    try {
        const { data: posts, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        displayPosts(posts);
    } catch (error) {
        console.error('게시글 목록 조회 실패:', error.message);
        alert('게시글을 불러오는데 실패했습니다.');
    }
}

// 게시글 목록 화면에 표시
function displayPosts(posts) {
    const tbody = document.querySelector('.board-table tbody');

    if (!posts || posts.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px;">
                    등록된 게시글이 없습니다.
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = posts.map((post, index) => `
        <tr class="board-row">
            <td class="col-number">${posts.length - index}</td>
            <td class="col-title">
                <a href="board-detail.html?id=${post.id}" class="board-link">${escapeHtml(post.title)}</a>
            </td>
            <td class="col-author">작성자</td>
            <td class="col-date">${formatDate(post.created_at)}</td>
            <td class="col-views">${post.views || 0}</td>
        </tr>
    `).join('');
}

// HTML 이스케이프 (XSS 방지)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 날짜 포맷 (YYYY-MM-DD)
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 페이지 로드 시 게시글 목록 불러오기
if (window.location.pathname.includes('board.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        loadPosts();
    });
}
