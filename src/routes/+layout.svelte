<script>
    import "../app.css";
    import Link from "../components/Link.svelte";
    import Widget from "../components/Widget.svelte";
    import { profile } from "$lib/profile";

    const menu = [
        { href: "/", label: "Home" },
        { href: "/#personal", label: "개인 프로젝트" },
        { href: "/#studio-jt", label: "스튜디오 제이티" },
        { href: profile.github, label: "GitHub" },
    ];

    const widgetLink = "text-tt-muted hover:text-tt-link";
    const claudeCode = "https://claude.com/claude-code";
</script>

<!-- Twenty Twelve: 회색 배경 위 그림자 진 흰 박스 (600px 이상에서 위아래 48px 여백) -->
<div class="mx-auto max-w-[1040px] bg-white px-6 shadow-site min-[600px]:my-12 min-[600px]:px-10">
    <header class="py-6">
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

        <nav aria-label="주요 메뉴" class="mt-6 border-y border-tt-line">
            <ul class="flex flex-wrap gap-x-5 text-[12px] min-[600px]:gap-x-10 uppercase leading-[3.692]">
                {#each menu as item}
                    <li><Link class="text-tt-nav hover:text-tt-link" href={item.href}>{item.label}</Link></li>
                {/each}
            </ul>
        </nav>
    </header>

    <div class="grid gap-y-12 pt-6 lg:grid-cols-[65.104%_26.041%] lg:justify-between">
        <main class="min-w-0">
            <slot />
        </main>

        <aside aria-label="사이드바">
            <Widget title="About">
                <p>
                    {profile.location}에서 일하는 {profile.tagline} <strong>{profile.name}</strong>입니다.
                    PHP, WordPress, Laravel을 중심으로 웹 서비스를 만들고 운영합니다.
                </p>
            </Widget>

            <Widget title="Skills">
                <ul class="flex flex-wrap gap-1.5">
                    {#each profile.skills as skill}
                        <li class="rounded-sm bg-tt-line px-2 text-[12px] text-tt-text">{skill}</li>
                    {/each}
                </ul>
            </Widget>

            <Widget title="Links">
                <ul>
                    <li><Link class={widgetLink} href={profile.github}>GitHub</Link></li>
                    <li><Link class={widgetLink} href="mailto:{profile.email}">Email</Link></li>
                </ul>
            </Widget>
        </aside>
    </div>

    <footer class="flex flex-wrap justify-between gap-2 border-t border-tt-line py-6 text-[12px] text-tt-muted">
        <span>{profile.handle} · with <Link class="hover:text-tt-link" href={claudeCode}>Claude Code</Link></span>
        <span>&copy; {new Date().getFullYear()}. All rights reserved.</span>
    </footer>
</div>
