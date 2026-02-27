# 스마트홈스토어 — Project Context

> Figma 전페이지(89p) 레이어 2,811개 분석 기반 · 추출일: 2026-02-25

---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | 스마트홈스토어 |
| 플랫폼 | iOS 모바일 앱 (375px 기준) |
| 디자인 파일 | `gLHd8xNMO4Qof0Tt7oyf8T` |
| 총 페이지 | 89페이지 |
| 총 노드 수 | 2,811개 (frame 1,489 / text 680 / instance 310 / rounded 294) |
| 폰트 시스템 | **Pretendard** 단일 패밀리 |

---

## 컬러 시스템

### 브랜드 컬러 (우선순위 순)

| 토큰 | HEX | CSS 변수 | 용도 |
|------|-----|----------|------|
| `primary` | `#31ADB8` | `--clolor/main` | CTA 버튼, 링크, 강조 |
| `primary-dark` | `#0D50D7` | `--colors/primary/blue_700` | 선택 상태, 강조 테두리 |
| `secondary-fill` | `#31ADB8` | `--clolor/main` ⚠️오타 | Secondary Fill 버튼 배경, 보조 CTA |
| `danger` | `#D12A38` | `--colors/danger/red-700` | 에러, 경고 |

### 텍스트 컬러

| 토큰 | HEX | CSS 변수 | 용도 |
|------|-----|----------|------|
| `text-primary` | `#383838` | `--gray_800` | 주요 텍스트 |
| `text-secondary` | `#666666` | `--gray_600` | 보조 텍스트 |
| `text-placeholder` | `#A6A6A6` | `--colors/gray/gray_500` | Placeholder |
| `text-select` | `#424A4A` | (unnamed) | 드롭다운 텍스트 |

### 배경/서피스 컬러

| 토큰 | HEX | CSS 변수 | 용도 |
|------|-----|----------|------|
| `background-primary` | `#FFFFFF` | `--colors/white/white-0` | 기본 배경 |
| `surface-input` | `#F4F4F5` | `--clolor/gray_f4f4f5`⚠️ | 입력 필드 배경 |
| `surface-section` | `#F7F7FA` | `--clolor/gray_f7f7fa`⚠️ | 섹션 배경 |
| `border-default` | `#CCCCCC` | `--colors/border/gray_400` | 기본 테두리 |
| `overlay` | `rgba(0,0,0,0.3)` | (unnamed) | 모달 딤 처리 |

> ⚠️ `clolor` 오타 주의 — 실제 구현 시 `color`로 수정 권장

---

## 타이포그래피 시스템

폰트 패밀리: **Pretendard** (모든 스타일 공통)

| 토큰 | Figma 스타일명 | Size | Weight | LineHeight | LetterSpacing | 용도 |
|------|--------------|------|--------|------------|---------------|------|
| `subtitle-0` | `subtitle_0` | 18px | 700 | 28px | 0 | 페이지 타이틀, 모달 헤딩 |
| `body-bold` | `body_1_bold` | 16px | 700 | 24px | 0.5 | 강조 본문, 카드 제목 |
| `subtitle-1` | `subtitle 1` | 16px | 400 | 28px | -2 | 서브타이틀, 입력 필드 |
| `subtitle-button` | `subtitle_button` | 14px | 700 | 100% | 1.25 | 버튼 텍스트 |
| `subtitle-bold` | `subtitle_bold` | 14px | 500 | 24px | 0 | 서브텍스트, 탭 레이블 |
| `body2` | `body2` | 14px | 400 | 25px | 2 | 일반 본문 |
| `caption-bold` | `caption_1` | 12px | 700 | 24px | 0.4 | 강조 캡션 |
| `caption` | `caption` | 12px | 400 | 24px | 0.4 | 일반 캡션, 날짜 |
| `caption-2` | `caption_2` | 10px | 500 | 10px | 0 | 탭 아이콘 레이블 |

---

## 보더 라디우스

| 토큰 | 값 | CSS 변수 | 용도 |
|------|-----|----------|------|
| `radius-sm` | 6px | `--rounded-md` | 버튼, 소형 카드 |
| `radius-md` | 8px | `--radius/3xl` | 입력 필드, 태그 |
| `radius-lg` | 12px | `--radius/4xl` | 카드, 모달 |
| `radius-xl` | 20px | `--radius/7xl` | 칩, 셀렉트박스, 배너 |

---

## 이펙트

| 토큰 | Figma 스타일 | 타입 | 값 | 용도 |
|------|-------------|------|-----|------|
| `blur-overlay` | `Global Tokens/Effect 3` | BACKGROUND_BLUR | radius: 4px | 모달 배경 블러 |

---

## 주요 컴포넌트

| 컴포넌트 | 노드명 | 특이사항 |
|---------|-------|---------|
| 기본 버튼 | `Button/Primary/large` | 배경 `#31ADB8`, 텍스트 흰색, radius 6px, h 56px |
| 아웃라인 버튼 | `s_button_on` | 테두리 `#0D50D7`, 텍스트 `#0D50D7`, radius 20px |
| 텍스트 입력 | `input text` | 배경 흰색, 테두리 `#A6A6A6`, radius 8px, h 40px |
| 텍스트 에어리어 | `input_text` | 배경 `#F4F4F5`, radius 12px, h 72px |
| 셀렉트박스 | `select` | 배경 `#F4F4F5`, radius 20px |
| 하단 탭바 | `bottom_tab` | 배경 흰색, 상단 테두리 `#CCCCCC` |
| 상단 바 | `top_bar` | 배경 흰색, 로고 + 알림 + 장바구니 |

---

## CSS 변수 전체 목록

```css
:root {
  /* 컬러 */
  --blue_600: #31ADB8;
  --colors-text-blue_600: #31ADB8;
  --colors-primary-blue_700: #0D50D7;
  --gray_800: #383838;
  --colors-text-gray_800: #383838;
  --gray_600: #666666;
  --colors-text-gray_600: #666666;
  --colors-border-gray_400: #CCCCCC;
  --colors-gray-gray_500: #A6A6A6;
  --color-gray_f4f4f5: #F4F4F5;   /* Figma 오타: clolor → color */
  --color-gray_f7f7fa: #F7F7FA;   /* Figma 오타: clolor → color */
  --colors-white-white-0: #FFFFFF;
  --colors-danger-red-700: #D12A38;

  /* 라디우스 */
  --rounded-md: 6px;
  --radius-3xl: 8px;
  --radius-4xl: 12px;
  --radius-7xl: 20px;

  /* 스페이싱 */
  --px-4: 16px;
  --py-2: 8px;
}
```

---

## 관련 파일

| 파일 | 설명 |
|------|------|
| `design-tokens.json` | 전체 디자인 토큰 JSON (구 파일명: adoorgyumdang-design-tokens.json) |
| `design-tokens.html` | 시각화 뷰어 (브라우저에서 열기) |
| `project-context.md` | 이 파일 |
