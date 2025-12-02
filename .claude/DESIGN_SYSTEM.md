# 디자인 시스템 가이드

## 컬러 시스템

### Primary Colors
메인 브랜드 컬러로 사용되는 핵심 색상입니다.

```css
--primary-green: #B8C5A0;      /* 메인 그린 */
--primary-rose: #C9A8A0;       /* 메인 로즈 */
```

### Secondary Colors
보조 색상으로 카드, 섹션 배경 등에 활용됩니다.

```css
--secondary-green-light: #D4DCC4;  /* 라이트 그린 */
--secondary-rose-medium: #B89890;  /* 미디엄 로즈 */
--secondary-gray-warm: #9B8D85;    /* 웜 그레이 */
```

### Neutral Colors
텍스트, 배경, 경계선 등 기본적인 UI 요소에 사용됩니다.

```css
--white: #FFFFFF;
--gray-900: #333333;           /* 본문 텍스트 */
--gray-700: #666666;           /* 보조 텍스트 */
--gray-400: #999999;           /* 비활성 텍스트 */
--gray-200: #E5E5E5;           /* 경계선 */
--gray-100: #F5F5F5;           /* 배경 */
```

### Accent Colors
포인트 색상으로 아이콘이나 강조 요소에 사용됩니다.

```css
--accent-yellow: #F4C542;      /* 아이콘 포인트 */
```

---

## 폰트 시스템

### Font Family
한글 최적화된 웹폰트를 사용합니다.

```css
--font-primary: 'Pretendard', 'Noto Sans KR', sans-serif;
--font-secondary: 'Spoqa Han Sans Neo', sans-serif;
```

### Font Sizes
반응형을 고려한 폰트 크기 시스템입니다.

```css
/* Headings */
--font-size-h1: 60px;          /* 메인 타이틀 */
--font-size-h2: 48px;          /* 섹션 타이틀 */
--font-size-h3: 40px;          /* 서브 타이틀 */
--font-size-h4: 32px;          /* 카드 타이틀 */
--font-size-h5: 28px;          /* 작은 헤딩 */
--font-size-h6: 24px;          /* 최소 헤딩 */

/* Body Text */
--font-size-body-lg: 18px;     /* 큰 본문 */
--font-size-body: 16px;        /* 기본 본문 */
--font-size-body-sm: 14px;     /* 작은 본문 */
--font-size-caption: 12px;     /* 캡션 */
```

### Font Weights
다양한 강조 수준을 표현하는 폰트 굵기입니다.

```css
--font-weight-bold: 700;       /* 굵게 */
--font-weight-semibold: 600;   /* 중간 굵게 */
--font-weight-medium: 500;     /* 중간 */
--font-weight-regular: 400;    /* 보통 */
--font-weight-light: 300;      /* 얇게 */
```

### Line Heights
가독성을 고려한 줄 간격입니다.

```css
--line-height-tight: 1.2;      /* 헤딩용 */
--line-height-normal: 1.5;     /* 기본 */
--line-height-relaxed: 1.8;    /* 본문용 */
```

### Letter Spacing
텍스트 간격 조정으로 시각적 균형을 맞춥니다.

```css
--letter-spacing-tight: -0.02em;   /* 타이틀 */
--letter-spacing-normal: 0;        /* 기본 */
--letter-spacing-wide: 0.02em;     /* 버튼, 캡션 */
```

---

## 사용 예시

### CSS Variables 적용
```css
:root {
  /* Colors */
  --primary-green: #B8C5A0;
  --primary-rose: #C9A8A0;
  --secondary-green-light: #D4DCC4;
  --secondary-rose-medium: #B89890;
  --secondary-gray-warm: #9B8D85;
  --white: #FFFFFF;
  --gray-900: #333333;
  --gray-700: #666666;
  --gray-400: #999999;
  --gray-200: #E5E5E5;
  --gray-100: #F5F5F5;
  --accent-yellow: #F4C542;

  /* Typography */
  --font-primary: 'Pretendard', 'Noto Sans KR', sans-serif;
  --font-secondary: 'Spoqa Han Sans Neo', sans-serif;
  
  --font-size-h1: 60px;
  --font-size-h2: 48px;
  --font-size-h3: 40px;
  --font-size-h4: 32px;
  --font-size-h5: 28px;
  --font-size-h6: 24px;
  --font-size-body-lg: 18px;
  --font-size-body: 16px;
  --font-size-body-sm: 14px;
  --font-size-caption: 12px;

  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-medium: 500;
  --font-weight-regular: 400;
  --font-weight-light: 300;

  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.8;

  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;
}
```

### Tailwind Config 적용
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#B8C5A0',
          rose: '#C9A8A0',
        },
        secondary: {
          'green-light': '#D4DCC4',
          'rose-medium': '#B89890',
          'gray-warm': '#9B8D85',
        },
        gray: {
          900: '#333333',
          700: '#666666',
          400: '#999999',
          200: '#E5E5E5',
          100: '#F5F5F5',
        },
        accent: {
          yellow: '#F4C542',
        }
      },
      fontFamily: {
        primary: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
        secondary: ['Spoqa Han Sans Neo', 'sans-serif'],
      },
      fontSize: {
        'h1': '60px',
        'h2': '48px',
        'h3': '40px',
        'h4': '32px',
        'h5': '28px',
        'h6': '24px',
        'body-lg': '18px',
        'body': '16px',
        'body-sm': '14px',
        'caption': '12px',
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        medium: 500,
        regular: 400,
        light: 300,
      },
      lineHeight: {
        tight: '1.2',
        normal: '1.5',
        relaxed: '1.8',
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
      }
    }
  }
}
```

---

## 주의사항

1. **컬러 사용**: Primary 컬러는 브랜드 아이덴티티를 나타내는 핵심 색상이므로 일관되게 사용하세요.
2. **폰트 로딩**: 웹폰트는 성능을 고려하여 필요한 weight만 로드하세요.
3. **반응형**: 모바일에서는 폰트 크기를 80-90% 수준으로 조정하세요.
4. **접근성**: 텍스트와 배경의 명암비(contrast ratio)는 최소 4.5:1 이상을 유지하세요.
5. **일관성**: 정의된 변수를 사용하여 디자인 시스템의 일관성을 유지하세요.
