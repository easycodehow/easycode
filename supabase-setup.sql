-- ============================================
-- EasyCode 자유게시판 데이터베이스 설정
-- ============================================

-- 1. posts 테이블 생성 (게시글)
CREATE TABLE IF NOT EXISTS posts (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. comments 테이블 생성 (댓글)
CREATE TABLE IF NOT EXISTS comments (
    id BIGSERIAL PRIMARY KEY,
    post_id BIGINT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. 인덱스 생성 (성능 최적화)
CREATE INDEX IF NOT EXISTS idx_posts_author_id ON posts(author_id);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_comments_post_id ON comments(post_id);
CREATE INDEX IF NOT EXISTS idx_comments_author_id ON comments(author_id);

-- 4. RLS (Row Level Security) 활성화
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- 5. posts 테이블 정책 설정
-- 누구나 게시글 조회 가능
CREATE POLICY "Anyone can view posts"
    ON posts FOR SELECT
    USING (true);

-- 로그인한 사용자만 게시글 작성 가능
CREATE POLICY "Authenticated users can create posts"
    ON posts FOR INSERT
    WITH CHECK (auth.uid() = author_id);

-- 본인 게시글만 수정 가능
CREATE POLICY "Users can update own posts"
    ON posts FOR UPDATE
    USING (auth.uid() = author_id);

-- 본인 게시글만 삭제 가능
CREATE POLICY "Users can delete own posts"
    ON posts FOR DELETE
    USING (auth.uid() = author_id);

-- 6. comments 테이블 정책 설정
-- 누구나 댓글 조회 가능
CREATE POLICY "Anyone can view comments"
    ON comments FOR SELECT
    USING (true);

-- 로그인한 사용자만 댓글 작성 가능
CREATE POLICY "Authenticated users can create comments"
    ON comments FOR INSERT
    WITH CHECK (auth.uid() = author_id);

-- 본인 댓글만 삭제 가능
CREATE POLICY "Users can delete own comments"
    ON comments FOR DELETE
    USING (auth.uid() = author_id);

-- 7. updated_at 자동 업데이트 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 8. posts 테이블에 트리거 연결
CREATE TRIGGER update_posts_updated_at
    BEFORE UPDATE ON posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 설정 완료!
-- ============================================
