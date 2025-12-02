# 프로젝트 개요
- **목적**: 저수준(low-level) 코딩으로 웹제작하기
- **핵심가치**: 명확성, 자율성, 투명성
- **타겟사용자**: 웹의 기본원리를 확실하게 이해하고자 하는 학습자, 이해가능한 코드를 하고 싶은 웹개발자


# 기술 스택
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend/Database**: Supabase
- **배포**: Vercel
- **버전관리**: GitHub

# 프로젝트 구조
```
project/
├── index.html
├── page1.html
├── page2.html
├── page3.html
├── page4.html
├── login.html
├── board.html
├── styles/
│   ├── main.css
│   ├── navigation.css
│   └── responsive.css
└── scripts/
    ├── main.js
    └── navigation.js
```

# 1단계: 프로젝트 기본 구조 (현재 목표)

## 생성할 페이지
1. **index.html** - 메인 홈페이지
2. **page1.html ~ page4.html** - 빈 메뉴 페이지 4개 (추후 내용 추가)
3. **login.html** - 로그인 페이지 (UI만)
4. **board.html** - 게시판 페이지 (UI만)

## 공통 요구사항
- 모든 페이지에 동일한 네비게이션 메뉴
- 네비게이션 메뉴: 홈, 메뉴1, 메뉴2, 메뉴3, 메뉴4, 게시판, 로그인
- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 깔끔하고 현대적인 UI

## CSS 구조
- **main.css**: 전체 레이아웃, 타이포그래피, 색상
- **navigation.css**: 네비게이션 메뉴 스타일
- **responsive.css**: 미디어 쿼리

# 2단계: Supabase 연동 (추후)
- Supabase 프로젝트 생성 및 설정
- 환경변수 설정
- Authentication 테이블 설정

# 3단계: 로그인 기능 (추후)
- 이메일/비밀번호 로그인
- 소셜 로그인 (Google, GitHub 등)
- 로그인 상태 유지
- 로그아웃 기능

# 4단계: 게시판 기능 (추후)
- 게시글 목록 보기 (Read)
- 게시글 작성 (Create)
- 게시글 수정 (Update)
- 게시글 삭제 (Delete)

# 5단계: 게시판 고급 기능 (추후)
- 댓글 기능
- 이미지 업로드
- 페이지네이션
- 검색 기능

# 현재 작업 범위
**1단계만 진행**: 기본 HTML 페이지 구조와 네비게이션 생성
기능 구현은 하지 않고, UI 틀만 만들기



# TODO

## 프로젝트 초기 설정
- [x] claude.md 파일을 클로드코드에게 주어서 완료
- [ ] GitHub에 커밋, Vercel 배포 테스트
- [ ] Supabase 설정 

## 인증 기능 구현
- [ ] 클로드코드에게 "login.html에 Supabase 이메일 로그인 기능 추가" 요청

## 게시판 기능 구현
- [ ] 게시판 CRUD 기능 추가
  - [ ] 게시글 목록 조회 (Read)
  - [ ] 게시글 작성 (Create)
  - [ ] 게시글 수정 (Update)
  - [ ] 게시글 삭제 (Delete)

## 고급 기능 추가
- [ ] 댓글 기능 추가
- [ ] 이미지 업로드 기능 추가
- [ ] 기타 고급 기능