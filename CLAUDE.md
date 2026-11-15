# CLAUDE.md

kreme201(이영일)의 개인 홈페이지. WordPress **Twenty Sixteen** 테마와 비슷한 디자인을 Tailwind CSS로 구현하고, GitHub Pages(`kreme201.github.io`)에 정적 사이트로 배포한다.

## 기술 스택

- SvelteKit 2 + Svelte 4 (`<slot>`, `export let` 문법 — Svelte 5 runes 사용하지 않음)
- `@sveltejs/adapter-static`, 모든 페이지 prerender (`src/routes/+layout.js`)
- Tailwind CSS 3 + PostCSS/Autoprefixer
- Node.js 26 (`.nvmrc`, `package.json`의 `engines`, `.npmrc`의 `engine-strict=true`)

## 명령어

```bash
nvm use            # .nvmrc 버전 사용
npm run dev        # 개발 서버
npm run build      # build/ 에 정적 사이트 생성
npm run preview    # 빌드 결과 미리보기
npm run check      # svelte-check 타입 검사
npm run gh-pages   # 빌드 후 gh-pages 브랜치로 배포
```

## 구조

- `src/app.html` — HTML 뼈대, Google Fonts 로드, `<body>` 기본 색/폰트
- `src/app.css` — Tailwind 지시문 + `.entry-content` 본문 타이포그래피
- `src/routes/+layout.svelte` — 사이트 박스, 헤더(로고·메뉴), 본문 + 사이드바, 푸터
- `src/routes/+page.svelte` — 메인페이지(개인 프로젝트 → 스튜디오 제이티 프로젝트 순서)
- `src/components/` — `Entry`(글 블록), `ProjectList`(프로젝트 카드 그리드, 카드 전체가 새 창 링크), `Widget`(사이드바 위젯), `Link`(외부 링크면 새 창)
- `src/lib/profile.ts` — 프로필, 기술 스택, 프로젝트 목록 데이터 (`$lib/profile`로 import)
  - `studioProjects`: studio-jt.co.kr 프로젝트 중 상세 페이지 "만든사람들"에 이영일이 기재된 것만. 최신순, `url`은 studio-jt 상세 페이지
  - `personalProjects`: GitHub 개인 프로젝트, `url`은 저장소
- `static/assets/images/` — 아바타, 파비콘, `projects/`(회사 프로젝트 카드 썸네일, 640px 정사각 JPEG)

## 디자인 규칙 (Twenty Twelve)

새 UI를 만들 때 아래 규칙과 `tailwind.config.js`의 토큰을 따른다. 임의의 색상값 대신 `tt-*` 색을 쓴다.

- **색**: `tt-bg #e6e6e6`(바깥 배경), `tt-text #444`(본문), `tt-title #515151`(사이트 제목), `tt-nav #5e5e5e`(메뉴), `tt-muted #757575`(메타·푸터), `tt-line #ededed`(구분선), `tt-link #21759b` / `tt-link-hover #0f3647`
- **폰트**: Open Sans 한 가지(한글은 Noto Sans KR). 기본 14px, 줄간격 1.714
- **프레임**: 회색 배경 위 `shadow-site` 그림자의 흰 박스, 최대 폭 960px + 좌우 40px(모바일 24px), 600px 이상에서 위아래 48px 여백
- **헤더**: 아바타 + 24px 굵은 사이트 제목 + 13px 설명, 그 아래 위아래 1px 선 사이의 12px 대문자 메뉴(항목 간격 40px)
- **레이아웃**: `lg` 이상에서 본문 65.104% + 오른쪽 사이드바 26.041%, 그보다 작으면 사이드바가 아래로 쌓임
- **글(Entry)**: 20px 보통 굵기 제목 → 본문 → 13px 메타 한 줄, 글 사이는 4px 이중선(`border-double`)
- **위젯**: 11px 굵은 대문자 제목(`tt-widget`), 13px 본문, 링크는 `tt-muted` → hover `tt-link`
- **인용문**: 테두리 없이 24px 안쪽 여백 + 이탤릭
- 본문 영역의 글은 `.entry-content` 안에 넣으면 p/ul/h3/blockquote/a 스타일이 자동 적용된다
- `Link` 컴포넌트는 스타일 없이 외부 링크 처리만 하므로 `class`로 색을 지정한다

## 콘텐츠 규칙

- 홈페이지 내용은 이력서를 바탕으로 하지만 **공개 사이트이므로 휴대폰 번호, 상세 주소, 나이/생년, 희망연봉은 넣지 않는다.** 공개해도 되는 연락처는 이메일(`kreme201@gmail.com`)과 GitHub뿐이다.
- "총 경력 N년" 같은 시간이 지나면 틀려지는 숫자는 하드코딩하지 않는다(시작 연도로 표현).
- 텍스트는 한국어, 존댓말(~합니다)로 작성한다.
- 헤더와 푸터의 "with Claude Code" 표기는 유지한다.
