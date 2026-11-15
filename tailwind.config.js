import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
    ],
    theme: {
        extend: {
            // WordPress Twenty Twelve 테마의 색상 체계
            colors: {
                tt: {
                    bg: "#e6e6e6",         // 바깥 배경
                    text: "#444444",       // 본문 글자
                    title: "#515151",      // 사이트 제목
                    nav: "#5e5e5e",        // 메뉴 글자
                    widget: "#636363",     // 위젯 제목
                    muted: "#757575",      // 메타 정보, 사이트 설명, 푸터
                    line: "#ededed",       // 구분선
                    link: "#21759b",       // 링크
                    "link-hover": "#0f3647",
                },
            },
            // Open Sans 한 가지 서체 (한글은 Noto Sans KR로 대체)
            fontFamily: {
                sans: ["\"Open Sans\"", "\"Noto Sans KR\"", ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                site: "0 2px 6px rgba(100, 100, 100, 0.3)",
            },
        },
    },
    plugins: [],
};
