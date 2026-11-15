<script>
    export let id = "";
    export let title = "";
    /** 첫 글은 h1, 나머지는 h2 */
    export let heading = "h2";
</script>

<!-- Twenty Twelve 글 형태: 20px 보통 굵기 제목, 본문, 아래쪽 메타, 4px 이중선 구분 -->
<article class="mb-6 scroll-mt-6 border-b-4 border-double border-tt-line pb-6 last:border-0" {id}>
    <header class="mb-6">
        <svelte:element class="text-[20px] font-normal leading-[1.2]" this={heading}>{title}</svelte:element>
    </header>

    <div class="entry-content">
        <slot />
    </div>

    {#if $$slots.meta}
        <footer class="text-[13px] leading-[1.846] text-tt-muted">
            <slot name="meta" />
        </footer>
    {/if}
</article>
