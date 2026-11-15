# kreme201.github.io

웹 백엔드 개발자 이영일(kreme201)의 개인 홈페이지입니다.
개인 프로젝트와 스튜디오 제이티에서 참여한 프로젝트를 소개합니다.

**https://kreme201.github.io/**

WordPress Twenty Twelve 테마와 비슷한 디자인을 Tailwind CSS로 구현했고, [Claude Code](https://claude.com/claude-code)와 함께 만들었습니다.

## 기술 스택

- [SvelteKit](https://kit.svelte.dev/) 2 + Svelte 4
- `@sveltejs/adapter-static` — 모든 페이지를 정적 HTML로 미리 생성
- Tailwind CSS 3
- GitHub Pages (`gh-pages` 브랜치)

## 시작하기

Node.js 버전은 `.nvmrc`에 고정되어 있습니다(Node 26).

```bash
nvm use
npm install
npm run dev
```

## 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | `build/`에 정적 사이트 생성 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run check` | svelte-check 타입 검사 |
| `npm run gh-pages` | 빌드 후 `gh-pages` 브랜치로 배포 |

## 구조

```
src/
├── app.html              HTML 뼈대, 웹폰트
├── app.css               Tailwind + 본문 타이포그래피
├── lib/profile.ts        프로필, 기술 스택, 프로젝트 데이터
├── components/
│   ├── Entry.svelte      섹션(글) 블록
│   ├── ProjectList.svelte 프로젝트 카드 그리드
│   └── Link.svelte       외부 링크는 새 창으로 여는 링크
└── routes/
    ├── +layout.svelte    헤더(스티키)·메뉴·푸터
    └── +page.svelte      메인페이지 (About, Projects)
static/assets/images/     아바타, 파비콘, 프로젝트 썸네일
```

## 프로젝트 추가하기

프로젝트 목록은 [`src/lib/profile.ts`](src/lib/profile.ts)의 배열에서 관리합니다.

- **개인 프로젝트** — `personalProjects`에 항목을 추가합니다. `url`은 GitHub 저장소 주소입니다.
- **스튜디오 제이티 프로젝트** — `studioProjects`에 최신순으로 추가합니다. `url`은 studio-jt.co.kr의 프로젝트 상세 페이지, `thumbnail`은 `static/assets/images/projects/`에 넣은 640px 정사각 이미지 경로입니다.

```ts
{
    title: "프로젝트 이름",
    date: "2026.01",
    stack: "WordPress",
    role: "백엔드",
    url: "https://www.studio-jt.co.kr/projects/...",
    thumbnail: "/assets/images/projects/example.jpg",
}
```

## 배포

```bash
npm run gh-pages
```

빌드한 `build/` 폴더를 `gh-pages` 브랜치에 올리고, GitHub Pages가 그 브랜치를 서비스합니다. 소스 변경은 `main` 브랜치에 따로 커밋·푸시합니다.
