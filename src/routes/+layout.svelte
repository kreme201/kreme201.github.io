<script>
    import "../app.css";
    import Link from "../components/Link.svelte";
    import { profile } from "$lib/profile";

    const menu = [
        { href: "/", label: "Home" },
        { href: "/#projects", label: "Projects" },
    ];

    // 메뉴 오른쪽 끝에 붙는 외부 링크
    const links = [
        { href: profile.github, label: "GitHub" },
        { href: `mailto:${profile.email}`, label: "Email" },
    ];

    const claudeCode = "https://claude.com/claude-code";

    // 스티키 헤더 높이만큼 앵커(#personal 등) 이동 위치를 내려서 제목이 헤더에 가리지 않게 함
    let headerHeight = 0;
    $: if (typeof document !== "undefined" && headerHeight) {
        const gap = window.matchMedia("(min-width: 600px)").matches ? 10 : 0;
        document.documentElement.style.scrollPaddingTop = `${headerHeight + gap + 16}px`;
    }
</script>

<!-- Twenty Twelve: 회색 배경 위 그림자 진 흰 박스 (600px 이상에서 위아래 48px 여백) -->
<div class="mx-auto max-w-[1040px] bg-white px-6 shadow-site min-[600px]:my-12 min-[600px]:px-10">
    <!-- 스티키 헤더 위 여백(600px 이상만 10px): 그 사이로 본문이 비치지 않게 바깥 배경색 띠로 덮음 -->
    <div aria-hidden="true" class="fixed inset-x-0 top-0 z-20 hidden h-[10px] bg-tt-bg min-[600px]:block"></div>

    <!-- 스크롤해도 화면 위에 붙어 있는 헤더 (모바일은 맨 위에 꽉 차게, 600px 이상은 10px 아래)
         음수 마진으로 박스 좌우 여백까지 흰 배경을 넓혀, 밑으로 지나가는 카드 그림자가 헤더 양옆에 비치지 않게 함 -->
    <header bind:clientHeight={headerHeight}
            class="sticky top-0 z-10 -mx-6 bg-white px-6 py-6 min-[600px]:top-[10px] min-[600px]:-mx-10 min-[600px]:px-10">
        <div class="flex flex-wrap items-end justify-between gap-2">
            <a class="group inline-flex items-center gap-3" href="/">
                <img alt="" class="h-10 w-10 rounded" height="40" src="/assets/images/avatar-132x132.jpg" width="40" />
                <span>
                    <span class="block text-[24px] font-bold leading-[1.2857] text-tt-title group-hover:text-tt-link">
                        {profile.handle}
                    </span>
                    <span class="block text-[13px] leading-[1.846] text-tt-muted">{profile.tagline}</span>
                </span>
            </a>
            <p class="text-[13px] leading-[1.846] text-tt-muted">
                with <Link class="text-tt-link hover:text-tt-link-hover" href={claudeCode}>Claude Code</Link>
            </p>
        </div>

        <nav aria-label="주요 메뉴"
             class="mt-6 flex justify-between gap-x-5 whitespace-nowrap border-y border-tt-line text-[12px] uppercase leading-[3.692]">
            <ul class="flex gap-x-5 min-[600px]:gap-x-10">
                {#each menu as item}
                    <li><Link class="text-tt-nav hover:text-tt-link" href={item.href}>{item.label}</Link></li>
                {/each}
            </ul>
            <ul aria-label="링크" class="ml-auto flex gap-x-5">
                {#each links as item}
                    <li><Link class="text-tt-nav hover:text-tt-link" href={item.href}>{item.label}</Link></li>
                {/each}
            </ul>
        </nav>
    </header>

    <!-- Twenty Twelve 전체 폭(full-width) 템플릿: 사이드바 없이 본문만 -->
    <main class="min-w-0 pt-6">
        <slot />
    </main>

    <footer class="flex flex-wrap justify-between gap-2 border-t border-tt-line py-6 text-[12px] text-tt-muted">
        <span>{profile.handle} · with <Link class="hover:text-tt-link" href={claudeCode}>Claude Code</Link></span>
        <span>&copy; {new Date().getFullYear()}. All rights reserved.</span>
    </footer>
</div>
