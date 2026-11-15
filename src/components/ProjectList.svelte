<script lang="ts">
    import type { Project } from "$lib/profile";

    export let projects: Project[] = [];
</script>

<!-- 프로젝트 카드 목록: 카드 전체가 상세 페이지로 가는 새 창 링크 -->
<ul class="!ml-0 grid !list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each projects as project}
        <li class="min-w-0">
            <a
                class="group flex h-full flex-col overflow-hidden rounded-sm border border-tt-line bg-white p-4 !text-tt-text !no-underline shadow-[0_1px_2px_rgba(100,100,100,0.08)] transition hover:border-tt-link hover:shadow-[0_2px_6px_rgba(100,100,100,0.2)]"
                href={project.url}
                rel="noopener noreferrer"
                target="_blank"
            >
                {#if project.thumbnail}
                    <!-- 썸네일: 카드 안쪽 여백을 상쇄해 카드 폭에 꽉 차게 -->
                    <span class="-mx-4 -mt-4 mb-4 block aspect-square overflow-hidden border-b border-tt-line bg-tt-line">
                        <img alt="" class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                             decoding="async" height="640" loading="lazy" src={project.thumbnail} width="640" />
                    </span>
                {/if}
                <span class="text-[12px] leading-[1.846] text-tt-muted">{project.date}</span>
                <span class="mt-1 font-bold leading-snug text-tt-link group-hover:text-tt-link-hover">
                    {project.title}<span class="sr-only"> (새 창)</span>
                    <svg aria-hidden="true" class="ml-0.5 inline h-3 w-3 align-baseline" fill="none" stroke="currentColor"
                         stroke-width="2" viewBox="0 0 24 24">
                        <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
                    </svg>
                </span>
                {#if project.description}
                    <span class="mt-2 text-[13px] leading-[1.846]">{project.description}</span>
                {/if}
                <span class="mt-auto pt-3 text-[12px] leading-[1.846] text-tt-muted">
                    {[project.client, project.stack, project.role].filter(Boolean).join(" · ")}
                </span>
            </a>
        </li>
    {/each}
</ul>
