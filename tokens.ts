// 스마트홈스토어 Design Tokens
// Source: design-tokens.json (Figma 전페이지 89p / 2,811 노드 분석)
// Extracted: 2026-02-25

export const colors = {
  // ── Brand ──
  primary:      '#31ADB8',  // CTA 버튼, 링크, 강조 인터랙션
  primaryDark:  '#0D50D7',  // 선택 상태, 강조 테두리 (blue_700)
  danger:       '#D12A38',  // 에러, 경고 텍스트

  // ── Text ──
  textPrimary:     '#383838',  // 주요 텍스트, 제목, 네비게이션 레이블
  textSecondary:   '#666666',  // 보조 텍스트, 설명 문구
  textPlaceholder: '#A6A6A6',  // 입력 필드 placeholder, 비활성 아이콘
  textSelect:      '#424A4A',  // 드롭다운 선택 텍스트

  // ── Background / Surface ──
  backgroundPrimary: '#FFFFFF',  // 카드, 페이지 기본 배경
  surfaceInput:      '#F4F4F5',  // 입력 필드, 셀렉트박스 배경
  surfaceSection:    '#F7F7FA',  // 섹션 배경, 배너, 정보 박스

  // ── Border ──
  borderDefault: '#CCCCCC',  // 기본 테두리, 구분선

  // ── Overlay ──
  overlay: 'rgba(0, 0, 0, 0.3)',  // 모달 딤 처리

  // ── Brand Accent ──
  brandYellow: '#FFB300',  // 별점 아이콘 (kid_star 레이어)
} as const;

export const typography = {
  fontFamily: 'Pretendard, -apple-system, sans-serif',

  styles: {
    'subtitle-0': {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '28px',
      letterSpacing: '0px',
      usage: '페이지 타이틀, 모달 주요 헤딩',
    },
    'body-bold': {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
      letterSpacing: '0.5px',
      usage: '강조 본문, 카드 제목, 섹션 소제목',
    },
    'subtitle-1': {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '28px',
      letterSpacing: '-2px',
      usage: '서브타이틀, 입력 필드 텍스트',
    },
    'subtitle-button': {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '100%',
      letterSpacing: '1.25px',
      usage: '버튼 텍스트, CTA 레이블',
    },
    'subtitle-bold': {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0px',
      usage: '강조 서브텍스트, 탭 레이블',
    },
    'body2': {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '25px',
      letterSpacing: '2px',
      usage: '일반 본문, 설명 텍스트',
    },
    'caption-bold': {
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '24px',
      letterSpacing: '0.4px',
      usage: '강조 캡션, 레이블 태그',
    },
    'caption': {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.4px',
      usage: '일반 캡션, 날짜, 보조 정보',
    },
    'caption-2': {
      fontSize: '10px',
      fontWeight: 500,
      lineHeight: '10px',
      letterSpacing: '0px',
      usage: '하단 탭 아이콘 레이블',
    },
  },
} as const;

export const borderRadius = {
  sm: '6px',   // 기본 버튼, 소형 카드
  md: '8px',   // 입력 필드, 태그
  lg: '12px',  // 카드, 모달
  xl: '20px',  // 칩, 셀렉트박스, 배너
} as const;

export const spacing = {
  xxs: '4px',
  xs:  '8px',
  sm:  '12px',
  md:  '16px',
  lg:  '20px',
  xl:  '24px',
  '2xl': '32px',
  '3xl': '40px',
  '4xl': '64px',
} as const;

export const shadows = {
  none:    'none',
  sm:      '0 1px 4px rgba(0, 0, 0, 0.08)',
  md:      '0 4px 12px rgba(0, 0, 0, 0.12)',
  lg:      '0 4px 20px rgba(0, 0, 0, 0.25)',
  overlay: '0 8px 32px rgba(0, 0, 0, 0.20)',
} as const;

export const effects = {
  blurOverlay: 'blur(4px)',  // 모달 딤 레이어 배경 블러 (Global Tokens/Effect 3)
} as const;

// Figma 원본 CSS 변수명 매핑 (--clolor 오타 포함 원본 그대로)
export const figmaVars = {
  '--blue_600':                '#31ADB8',
  '--colors/text/blue_600':    '#31ADB8',
  '--colors/primary/blue_700': '#0D50D7',
  '--gray_800':                '#383838',
  '--gray_600':                '#666666',
  '--colors/border/gray_400':  '#CCCCCC',
  '--colors/gray/gray_500':    '#A6A6A6',
  '--clolor/gray_f4f4f5':      '#F4F4F5',  // ⚠️ Figma 오타
  '--clolor/gray_f7f7fa':      '#F7F7FA',  // ⚠️ Figma 오타
  '--colors/white/white-0':    '#FFFFFF',
  '--colors/danger/red-700':   '#D12A38',
  '--clolor/main':             '#31ADB8',  // ⚠️ Figma 오타
} as const;

export const tokens = {
  colors,
  typography,
  borderRadius,
  spacing,
  shadows,
  effects,
  figmaVars,
} as const;

export type Colors = typeof colors;
export type Typography = typeof typography;
export type BorderRadius = typeof borderRadius;
export type Spacing = typeof spacing;
export type Shadows = typeof shadows;
export type Tokens = typeof tokens;
