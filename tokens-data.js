// 스마트홈스토어 Design Tokens — Data Source
// design-tokens.html 에서 분리된 단일 데이터 소스
// TypeScript 버전: tokens.ts

const tokens = {
  borderColors: [
    // ── Style Reference 그레이 스케일 기준 통합 (2026-02-26) ──────────
    { rank:1,  hex:"#CDD1D5", count:1454, widths:{"1":1445,"1.6":5,"1.4":4}, gray:true, step:"10", merged:"#CCCCCC · #D9D9D9 · #CDD1D5" },
    { rank:2,  hex:"#E6E8EA", count:1001, widths:{"1":993,"2":8},            gray:true, step:"5",  merged:"#E9E6E6 · #ECECF1" },
    { rank:3,  hex:"#33363D", count:387,  widths:{"1":95,"2":292},           gray:true, step:"70", merged:"#383838 · #33363D · #404040" },
    { rank:4,  hex:"#58616A", count:272,  widths:{"1":225,"2":47},           gray:true, step:"50", merged:"#58616A · #666666" },
    { rank:5,  hex:"#000000", count:220,  widths:{"1":220},                  gray:true, step:"-" },
    { rank:6,  hex:"#FFFFFF", count:198,  widths:{"1":70,"2":99},            gray:true, step:"-" },
    { rank:7,  hex:"#F4F5F6", count:151,  widths:{"2":149},                  gray:true, step:"0",  merged:"#FAFAFA · #EFEFEF" },
    { rank:8,  hex:"#B1B8BE", count:81,   widths:{"1":68,"2":13},            gray:true, step:"20", merged:"#B1B8BE · #A6A6A6" },
    { rank:9,  hex:"#1E2124", count:27,   widths:{"1":12,"2":15},            gray:true, step:"80", merged:"#191919 · #09090B" },
    { rank:10, hex:"#8A949E", count:18,   widths:{"1":14,"2":1},             gray:true, step:"30", merged:"#8A949E · #999999" },
    { rank:11, hex:"#6D7882", count:6,    widths:{"1":2,"1.6":2,"1.4":2},   gray:true, step:"40" },
    { rank:12, hex:"#464C53", count:3,    widths:{"1.6":3},                  gray:true, step:"60" },
  ],
  colors: [
    { rank:1,  token:"primary",            hex:"#31ADB8", rgba:"rgba(49, 173, 184, 1)",   usage:"CTA 버튼 배경, 링크 텍스트, 포커스 테두리",                           figmaVar:"--clolor/main / --blue_600",           isChar:false },
    { rank:2,  token:"text-primary",       hex:"#383838", rgba:"rgba(56, 56, 56, 1)",      usage:"본문 주요 텍스트, 제목, 네비게이션 레이블",                            figmaVar:"--gray_800 / --colors/text/gray_800",  isChar:false },
    { rank:3,  token:"background-primary", hex:"#FFFFFF", rgba:"rgba(255, 255, 255, 1)",   usage:"카드 배경, 버튼 텍스트, 페이지 기본 배경",                             figmaVar:"--colors/white/white-0",               isChar:false, checkered:true },
    { rank:4,  token:"text-secondary",     hex:"#666666", rgba:"rgba(102, 102, 102, 1)",   usage:"보조 텍스트, 설명 문구, 주소 텍스트",                                  figmaVar:"--gray_600 / --colors/text/gray_600",  isChar:false },
    { rank:5,  token:"border-default",     hex:"#CCCCCC", rgba:"rgba(204, 204, 204, 1)",   usage:"기본 테두리, 구분선, placeholder 텍스트",                              figmaVar:"--colors/border/gray_400",             isChar:false },
    { rank:6,  token:"surface-input",      hex:"#F4F4F5", rgba:"rgba(244, 244, 245, 1)",   usage:"입력 필드 배경, 셀렉트박스 배경",                                      figmaVar:"--clolor/gray_f4f4f5 ⚠️오타",        isChar:false },
    { rank:7,  token:"text-placeholder",   hex:"#A6A6A6", rgba:"rgba(166, 166, 166, 1)",   usage:"입력 필드 placeholder, 비활성 아이콘",                                 figmaVar:"--colors/gray/gray_500",               isChar:false },
    { rank:8,  token:"surface-section",    hex:"#F7F7FA", rgba:"rgba(247, 247, 250, 1)",   usage:"섹션 배경, 배너 배경, 정보 박스",                                      figmaVar:"--clolor/gray_f7f7fa ⚠️오타",        isChar:false },
    { rank:9,  token:"primary-dark",       hex:"#25828A", rgba:"rgba(37, 130, 138, 1)",    usage:"Primary Dark — 다크 버튼 상태, 강조 테두리 (Figma Colors: Blue/Dark)", figmaVar:"Blue/Dark (Colors 페이지 확인)",       isChar:false },
    { rank:10, token:"text-select",        hex:"#424A4A", rgba:"rgba(66, 74, 74, 1)",      usage:"셀렉트박스 선택 텍스트, 드롭다운 옵션",                                figmaVar:"(unnamed)",                            isChar:false },
    { rank:11, token:"secondary-fill",     hex:"#31ADB8", rgba:"rgba(49, 173, 184, 1)",   usage:"Secondary Fill 버튼 배경, 보조 CTA",                                  figmaVar:"--clolor/main ⚠️오타",               isChar:false },
    { rank:12, token:"danger",             hex:"#D12A38", rgba:"rgba(209, 42, 56, 1)",     usage:"에러 메시지, 경고 텍스트",                                             figmaVar:"--colors/danger/red-700",              isChar:false },
    { rank:13, token:"overlay",            hex:"#000000", rgba:"rgba(0, 0, 0, 0.3)",       usage:"모달/팝업 배경 딤처리",                                               figmaVar:"(unnamed)",                            isChar:false, checkered:true },
  ],
  typography: [
    { rank:1, token:"body-bold",       figma:"Global Tokens/body/body_1_bold",    family:"Pretendard", style:"Bold",    size:16, weight:700, lh:24,    ls:0.5,  usage:"강조 본문, 카드 제목, 모달 헤더" },
    { rank:2, token:"subtitle-button", figma:"Global Tokens/body/subtitle_button",family:"Pretendard", style:"Bold",    size:14, weight:700, lh:"100%",ls:1.25, usage:"버튼 텍스트, CTA 레이블" },
    { rank:3, token:"subtitle-bold",   figma:"Global Tokens/body/subtitle_bold",  family:"Pretendard", style:"Medium",  size:14, weight:500, lh:24,    ls:0,    usage:"강조 서브텍스트, 탭 레이블" },
    { rank:4, token:"body2",           figma:"Global Tokens/body/body2",          family:"Pretendard", style:"Regular", size:14, weight:400, lh:25,    ls:2,    usage:"일반 본문, 설명 텍스트" },
    { rank:5, token:"subtitle-0",      figma:"Global Tokens/body/subtitle_0",     family:"Pretendard", style:"Bold",    size:18, weight:700, lh:28,    ls:0,    usage:"페이지 타이틀, 모달 주요 헤딩" },
    { rank:6, token:"subtitle-1",      figma:"Global Tokens/body/subtitle 1",     family:"Pretendard", style:"Regular", size:16, weight:400, lh:28,    ls:-2,   usage:"일반 서브타이틀, 입력 필드 텍스트" },
    { rank:7, token:"caption-bold",    figma:"Global Tokens/body/caption_1",      family:"Pretendard", style:"Bold",    size:12, weight:700, lh:24,    ls:0.4,  usage:"강조 캡션, 레이블 태그" },
    { rank:8, token:"caption",         figma:"Global Tokens/body/caption",        family:"Pretendard", style:"Regular", size:12, weight:400, lh:24,    ls:0.4,  usage:"일반 캡션, 날짜, 보조 정보" },
    { rank:9, token:"caption-2",       figma:"Global Tokens/body/caption_2",      family:"Pretendard", style:"Medium",  size:10, weight:500, lh:10,    ls:0,    usage:"탭 레이블, 최소 텍스트" },
  ],
  radius: [
    { token:"radius-sm", figma:"--rounded-md", value:"6px",  usage:"기본 버튼, 소형 카드" },
    { token:"radius-md", figma:"--radius/3xl", value:"8px",  usage:"입력 필드, 태그" },
    { token:"radius-lg", figma:"--radius/4xl", value:"12px", usage:"카드, 모달" },
    { token:"radius-xl", figma:"--radius/7xl", value:"20px", usage:"칩, 셀렉트박스, 배너" },
  ],
  strokes: [
    { rank:1, token:"stroke-default",       width:1, color:"#CCCCCC", count:453, usage:"카드 테두리, 입력 필드, 구분선 — 가장 많이 사용" },
    { rank:2, token:"stroke-primary",       width:1, color:"#31ADB8", count:147, usage:"선택 상태 테두리, 포커스 인디케이터" },
    { rank:3, token:"stroke-dark",          width:1, color:"#000000", count:137, usage:"아이콘 경계, 강한 구분선" },
    { rank:4, token:"stroke-light",         width:1, color:"#E9E6E6", count:149, usage:"연한 내부 구분선, 리스트 구분" },
    { rank:5, token:"stroke-blue",          width:1, color:"#185DE8", count:50,  usage:"블루 액센트, 링크·뱃지 테두리" },
    { rank:6, token:"stroke-white",         width:1, color:"#FFFFFF", count:31,  usage:"어두운 배경 위 카드 테두리, 오버레이" },
    { rank:7, token:"stroke-primary-thick", width:2, color:"#31ADB8", count:16,  usage:"강조 선택 상태, 활성 탭 인디케이터" },
    { rank:8, token:"stroke-danger",        width:1, color:"#AD1320", count:12,  usage:"에러 상태 입력 필드, 경고 테두리" },
  ],
  effects: [
    { token:"shadow-none",    value:"none",                              cssValue:"none",                                usage:"기본 상태 (그림자 없음)",                             confirmed:false },
    { token:"shadow-sm",      value:"0 1px 4px rgba(0,0,0,0.08)",       cssValue:"0 1px 4px 0 rgba(0,0,0,.08)",         usage:"인라인 카드, 미세 elevation",                         confirmed:false },
    { token:"shadow-md",      value:"0 4px 12px rgba(0,0,0,0.12)",      cssValue:"0 4px 12px 0 rgba(0,0,0,.12)",        usage:"드롭다운, 팝업 요소",                                 confirmed:false },
    { token:"shadow-lg",      value:"0 4px 20px rgba(0,0,0,0.25)",      cssValue:"0 4px 20px 0 rgba(0,0,0,.25)",        usage:"카드 호버, 주요 컴포넌트 — Figma 레이어 30회 확인 ✓", confirmed:true },
    { token:"shadow-overlay", value:"0 8px 32px rgba(0,0,0,0.20)",      cssValue:"0 8px 32px 0 rgba(0,0,0,.20)",        usage:"모달, 바텀시트, 오버레이",                            confirmed:false },
  ],
  spacing: [
    { rank:1, token:"spacing-1",  value:4,  totalCount:318,  usage:"아이콘·텍스트 최소 간격, 배지 내부 여백" },
    { rank:2, token:"spacing-2",  value:8,  totalCount:1711, usage:"컴포넌트 내부 기본 간격, 버튼 좌우 패딩 최소" },
    { rank:3, token:"spacing-3",  value:12, totalCount:153,  usage:"버튼 세로 패딩, 소형 카드 내부" },
    { rank:4, token:"spacing-4",  value:16, totalCount:2359, usage:"카드·섹션 기본 패딩 — 전체 최다 사용 ★" },
    { rank:5, token:"spacing-5",  value:20, totalCount:213,  usage:"중형 컴포넌트 패딩" },
    { rank:6, token:"spacing-6",  value:24, totalCount:559,  usage:"섹션 상하 패딩, 모달·시트 내부" },
    { rank:7, token:"spacing-8",  value:32, totalCount:68,   usage:"대형 섹션 구분 여백" },
    { rank:8, token:"spacing-10", value:40, totalCount:40,   usage:"페이지 상단 여백, 큰 구분" },
    { rank:9, token:"spacing-16", value:64, totalCount:7,    usage:"페이지 레벨 최대 여백" },
  ],
  primaryScale: [
    { token:"primary-light",        hex:"#EAF7F8", label:"Blue/Light",          state:"기본 배경, 호버 영역 배경" },
    { token:"primary-light-hover",  hex:"#E0F3F4", label:"Blue/Light :hover",   state:"Light 호버 상태" },
    { token:"primary-light-active", hex:"#BFE6E9", label:"Blue/Light :active",  state:"Light 액티브 상태" },
    { token:"primary",              hex:"#31ADB8", label:"Blue/Normal ★",       state:"CTA 기본 — 메인 Primary" },
    { token:"primary-hover",        hex:"#2C9CA6", label:"Blue/Normal :hover",  state:"Normal 호버 상태" },
    { token:"primary-active",       hex:"#278A93", label:"Blue/Normal :active", state:"Normal 액티브 상태" },
    { token:"primary-dark",         hex:"#25828A", label:"Blue/Dark",           state:"다크 버튼, 강조 테두리" },
    { token:"primary-dark-hover",   hex:"#1D686E", label:"Blue/Dark :hover",    state:"Dark 호버 상태" },
    { token:"primary-dark-active",  hex:"#164E53", label:"Blue/Dark :active",   state:"Dark 액티브 상태" },
    { token:"primary-darker",       hex:"#113D40", label:"Blue/Darker",         state:"최고 강조, 텍스트 온 Primary" },
  ],
  cssVars: {
    "--clolor/main":"#31ADB8", "--blue_600":"#31ADB8", "--colors/text/blue_600":"#31ADB8",
    "--colors/primary/blue_700":"#25828A",
    "--colors/primary/blue_light":"#EAF7F8",
    "--colors/primary/blue_normal":"#31ADB8",
    "--colors/primary/blue_dark":"#25828A",
    "--colors/primary/blue_darker":"#113D40",
    "--gray_800":"#383838", "--colors/text/gray_800":"#383838",
    "--gray_600":"#666666", "--colors/text/gray_600":"#666666",
    "--colors/border/gray_400":"#CCCCCC",
    "--colors/gray/gray_500":"#A6A6A6", "--clolor/gray":"#A6A6A6",
    "--clolor/gray_f4f4f5":"#F4F4F5",
    "--clolor/gray_f7f7fa":"#F7F7FA",
    "--colors/white/white-0":"#FFFFFF",
    "--colors/danger/red-700":"#D12A38",
    "--rounded-md":"6px", "--radius/3xl":"8px",
    "--radius/4xl":"12px", "--radius/7xl":"20px",
    "--px-4":"16px", "--py-2":"8px",
  },
};

// ── CSS 변수 주입 (tokens-data.js → :root)
// tokens 데이터가 단일 소스가 되어 HTML의 CSS 변수를 동적으로 설정
(function applyTokensToCSS() {
  const root = document.documentElement;

  // 토큰명 → CSS 변수명 매핑
  const colorMap = {
    'primary':            '--primary',
    'primary-dark':       '--primary-dark',
    'text-primary':       '--text-primary',
    'text-secondary':     '--text-secondary',
    'border-default':     '--border',
    'surface-input':      '--surface-input',
    'surface-section':    '--surface-section',
    'text-placeholder':   '--placeholder',
    'text-select':        '--text-select',
    'danger':             '--danger',
    'background-primary': '--card',
  };

  // 색상 토큰 주입
  tokens.colors.forEach(c => {
    const cssVar = colorMap[c.token];
    if (cssVar) root.style.setProperty(cssVar, c.hex);
  });

  // 보더 라디우스 토큰 주입
  tokens.radius.forEach(r => {
    root.style.setProperty('--' + r.token, r.value);
  });

  // 스페이싱 토큰 주입
  tokens.spacing.forEach(s => {
    root.style.setProperty('--' + s.token, s.value + 'px');
  });

  // Primary 스케일 주입
  tokens.primaryScale.forEach(p => {
    root.style.setProperty('--' + p.token, p.hex);
  });
})();
