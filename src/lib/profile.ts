// 메인페이지와 사이드바에서 함께 쓰는 프로필 데이터.
// 공개 사이트이므로 휴대폰·주소·나이·희망연봉 같은 개인정보는 넣지 않는다.

export const profile = {
    name: "이영일",
    handle: "kreme201",
    tagline: "웹 백엔드 개발자",
    location: "부산",
    email: "kreme201@gmail.com",
    github: "https://github.com/kreme201",
    skills: [
        "PHP",
        "Laravel",
        "WordPress",
        "MySQL",
        "MariaDB",
        "JavaScript",
        "TypeScript",
        "Vue.js",
        "React",
        "Next.js",
    ],
};

export interface Project {
    title: string;
    date: string;
    client?: string;
    stack?: string;
    role?: string;
    description?: string;
    /** 카드 썸네일 (static 기준 경로) */
    thumbnail?: string;
    /** 상세 페이지 (studio-jt.co.kr 프로젝트 소개 또는 GitHub 저장소) */
    url: string;
}

// 개인 프로젝트 (GitHub)
export const personalProjects: Project[] = [
    {
        title: "File Based Router",
        date: "2024.02",
        stack: "PHP 8.3, Composer, PSR-7, PSR-11",
        description: "pages 폴더의 파일 구조를 그대로 URL로 매핑하는 PHP 라우팅 라이브러리. [id], [...path] 형태의 동적 경로와 PSR-11 컨테이너 기반 의존성 주입을 지원합니다.",
        url: "https://github.com/kreme201/file-base-router",
    },
];

// studio-jt.co.kr 프로젝트 중 '만든사람들'에 이영일이 기재된 프로젝트 (2026-11 기준)
// thumbnail은 각 상세 페이지의 대표 이미지(og:image)를 640px로 줄여 static/assets/images/projects/ 에 저장한 것
export const studioProjects: Project[] = [
    { title: "나노에이치투오 (NanoH2O)", date: "2026.06", stack: "WordPress", role: "백엔드",
      url: "https://www.studio-jt.co.kr/projects/nanoh2o/",
      thumbnail: "/assets/images/projects/nanoh2o.jpg" },
    { title: "NOBLESSE", date: "2026.01", stack: "WordPress", role: "백엔드",
      url: "https://www.studio-jt.co.kr/projects/noblesse/",
      thumbnail: "/assets/images/projects/noblesse.jpg" },
    { title: "MEDIWHALE", date: "2025.09", stack: "WordPress", role: "개발",
      url: "https://www.studio-jt.co.kr/projects/mediwhale/",
      thumbnail: "/assets/images/projects/mediwhale.jpg" },
    { title: "SANC 기업 대표 홈페이지", date: "2025.06", stack: "WordPress", role: "백엔드",
      url: "https://www.studio-jt.co.kr/projects/sanc-brand/",
      thumbnail: "/assets/images/projects/sanc-brand.jpg" },
    { title: "메덩골 정원 (MEDONGAULE)", date: "2024.11", stack: "Laravel", role: "백엔드 PL",
      url: "https://www.studio-jt.co.kr/projects/medongaule/",
      thumbnail: "/assets/images/projects/medongaule.jpg" },
    { title: "퓨리토 서울", date: "2024.04", stack: "WordPress", role: "백엔드 PA",
      url: "https://www.studio-jt.co.kr/projects/%ed%93%a8%eb%a6%ac%ed%86%a0/",
      thumbnail: "/assets/images/projects/purito.jpg" },
    { title: "Klaytn", date: "2023.04", stack: "WordPress", role: "백엔드 PA",
      url: "https://www.studio-jt.co.kr/projects/klaytn/",
      thumbnail: "/assets/images/projects/klaytn.jpg" },
    { title: "WE DISPLAY", date: "2023.03", stack: "CodeIgniter", role: "백엔드 PL",
      url: "https://www.studio-jt.co.kr/projects/we-display/",
      thumbnail: "/assets/images/projects/we-display.jpg" },
    { title: "카카오엔터프라이즈", date: "2022.08", stack: "WordPress", role: "개발 PA",
      url: "https://www.studio-jt.co.kr/projects/%ec%b9%b4%ec%b9%b4%ec%98%a4%ec%97%94%ed%84%b0%ed%94%84%eb%9d%bc%ec%9d%b4%ec%a6%88/",
      thumbnail: "/assets/images/projects/kakao-enterprise.jpg" },
    { title: "만나교회", date: "2020.06", stack: "WordPress", role: "백엔드",
      url: "https://www.studio-jt.co.kr/projects/%eb%a7%8c%eb%82%98%ea%b5%90%ed%9a%8c-%eb%b0%98%ec%9d%91%ed%98%95-%ec%9b%b9-%ec%82%ac%ec%9d%b4%ed%8a%b8-%ec%98%a8%eb%9d%bc%ec%9d%b8%ec%98%88%eb%b0%b0-%ec%8b%9c%ec%8a%a4%ed%85%9c-%ea%b5%ac%ec%b6%95/",
      thumbnail: "/assets/images/projects/manna.jpg" },
    { title: "나스미디어", date: "2020.03", stack: "WordPress", role: "개발 PA",
      url: "https://www.studio-jt.co.kr/projects/%eb%82%98%ec%8a%a4%eb%af%b8%eb%94%94%ec%96%b4-%ec%9b%b9%ec%82%ac%ec%9d%b4%ed%8a%b8-%ec%a0%9c%ec%9e%91/",
      thumbnail: "/assets/images/projects/nasmedia.jpg" },
    { title: "필보이드 브랜드 웹사이트", date: "2019.12", role: "개발 PL",
      url: "https://www.studio-jt.co.kr/projects/%ed%95%84%eb%b3%b4%ec%9d%b4%eb%93%9c-%eb%b8%8c%eb%9e%9c%eb%93%9c-%ec%9b%b9%ec%82%ac%ec%9d%b4%ed%8a%b8-%ec%a0%9c%ec%9e%91/",
      thumbnail: "/assets/images/projects/fillvoid.jpg" },
    { title: "KLC그룹 웹사이트 리뉴얼", date: "2019.09", stack: "WordPress", role: "백엔드 PA",
      url: "https://www.studio-jt.co.kr/projects/klc%ea%b7%b8%eb%a3%b9-%ec%9b%b9%ec%82%ac%ec%9d%b4%ed%8a%b8-%eb%a6%ac%eb%89%b4%ec%96%bc/",
      thumbnail: "/assets/images/projects/klc.jpg" },
    { title: "비레디 브랜드 웹사이트", date: "2019.09", stack: "WordPress", role: "개발 PL",
      url: "https://www.studio-jt.co.kr/projects/%eb%b9%84%eb%a0%88%eb%94%94-%eb%b8%8c%eb%9e%9c%eb%93%9c-%ec%9b%b9%ec%82%ac%ec%9d%b4%ed%8a%b8-%ec%a0%9c%ec%9e%91/",
      thumbnail: "/assets/images/projects/beready.jpg" },
    { title: "랑벨 글로벌 원스토어 리뉴얼", date: "2019.06", stack: "WordPress, WooCommerce", role: "개발 PA",
      url: "https://www.studio-jt.co.kr/projects/%eb%9e%91%eb%b2%a8-%ea%b8%80%eb%a1%9c%eb%b2%8c-%ec%9b%90%ec%8a%a4%ed%86%a0%ec%96%b4-%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%ec%87%bc%ed%95%91%eb%aa%b0-%ec%a0%9c%ec%9e%91-%ec%82%ac%eb%a1%80/",
      thumbnail: "/assets/images/projects/lanbelle-global.jpg" },
    { title: "디캐이 아이웨어그룹", date: "2019.02", stack: "WordPress", role: "개발 PA",
      url: "https://www.studio-jt.co.kr/projects/%eb%94%94%ec%ba%90%ec%9d%b4-%ec%95%84%ec%9d%b4%ec%9b%a8%ec%96%b4%ea%b7%b8%eb%a3%b9-%eb%b0%98%ec%9d%91%ed%98%95%ec%9b%b9-%ec%a0%9c%ec%9e%91-%ec%82%ac%eb%a1%80/",
      thumbnail: "/assets/images/projects/dk-eyewear.jpg" },
    { title: "삼진어묵 공식 쇼핑몰", date: "2018.10", stack: "고도몰", role: "개발",
      url: "https://www.studio-jt.co.kr/projects/%ec%82%bc%ec%a7%84%ec%96%b4%eb%ac%b5-%ec%87%bc%ed%95%91%eb%aa%b0-%ea%b5%ac%ec%b6%95-%ec%82%ac%eb%a1%80/",
      thumbnail: "/assets/images/projects/samjin.jpg" },
    { title: "천부교", date: "2018.05", stack: "WordPress", role: "개발 PL",
      url: "https://www.studio-jt.co.kr/projects/%ec%b2%9c%eb%b6%80%ea%b5%90-%eb%b0%98%ec%9d%91%ed%98%95%ec%9b%b9-%ec%a0%9c%ec%9e%91-%ec%82%ac%eb%a1%80/",
      thumbnail: "/assets/images/projects/chunbukyo.jpg" },
    { title: "이엔에프테크놀로지", date: "2018.01", stack: "WordPress", role: "개발",
      url: "https://www.studio-jt.co.kr/projects/%ec%9d%b4%ec%97%94%ec%97%90%ed%94%84%ed%85%8c%ed%81%ac%eb%86%80%eb%a1%9c%ec%a7%80-%eb%b0%98%ec%9d%91%ed%98%95%ec%9b%b9-%ea%b5%ac%ec%b6%95-%ec%82%ac%eb%a1%80/",
      thumbnail: "/assets/images/projects/enf.jpg" },
    { title: "한국알콜산업", date: "2018.01", stack: "WordPress", role: "개발 PA",
      url: "https://www.studio-jt.co.kr/projects/%ed%95%9c%ea%b5%ad%ec%95%8c%ec%bd%9c%ec%82%b0%ec%97%85-%eb%b0%98%ec%9d%91%ed%98%95%ec%9b%b9-%ea%b5%ac%ec%b6%95-%ec%82%ac%eb%a1%80/",
      thumbnail: "/assets/images/projects/korea-alcohol.jpg" },
    { title: "워시엔조이", date: "2018", stack: "WordPress", role: "개발",
      url: "https://www.studio-jt.co.kr/projects/%ec%9b%8c%ec%8b%9c%ec%97%94%ec%a1%b0%ec%9d%b4-%eb%b0%98%ec%9d%91%ed%98%95%ec%9b%b9-%ea%b5%ac%ec%b6%95%ec%82%ac%eb%a1%80/",
      thumbnail: "/assets/images/projects/washenjoy.jpg" },
    { title: "랑벨", date: "2017.10", stack: "WordPress", role: "개발",
      url: "https://www.studio-jt.co.kr/projects/%eb%9e%91%eb%b2%a8-%eb%b0%98%ec%9d%91%ed%98%95%ec%9b%b9-%ea%b5%ac%ec%b6%95-%ec%82%ac%eb%a1%80/",
      thumbnail: "/assets/images/projects/lanbelle.jpg" },
    { title: "KVRF 2017 공식 홈페이지", date: "2017.08", stack: "WordPress", role: "개발",
      url: "https://www.studio-jt.co.kr/projects/kvrf-2017-%ea%b3%b5%ec%8b%9d-%ed%99%88%ed%8e%98%ec%9d%b4%ec%a7%80-%eb%b0%98%ec%9d%91%ed%98%95%ec%9b%b9-%ec%a0%9c%ec%9e%91-%ec%82%ac%eb%a1%80/",
      thumbnail: "/assets/images/projects/kvrf-2017.jpg" },
    { title: "LOCUS 대표 홈페이지", date: "2017.08", stack: "WordPress", role: "개발",
      url: "https://www.studio-jt.co.kr/projects/locus-%eb%8c%80%ed%91%9c-%ed%99%88%ed%8e%98%ec%9d%b4%ec%a7%80-%eb%b0%98%ec%9d%91%ed%98%95%ec%9b%b9-%ec%a0%9c%ec%9e%91-%ec%82%ac%eb%a1%80/",
      thumbnail: "/assets/images/projects/locus.jpg" },
];
