<script>
    export let id = "";
    export let title = "";
    /** 첫 글은 h1, 나머지는 h2 */
    export let heading = "h2";
</script>

<!-- Twenty Twelve 글 형태: 18px 굵은 대문자 제목, 본문, 아래쪽 메타, 4px 이중선 구분 -->
<article class="mb-6 border-b-4 border-double border-tt-line pb-6 last:border-0" {id}>
    <header class="mb-6">
        <svelte:element class="text-[18px] font-bold uppercase leading-[1.2] text-tt-widget" this={heading}>{title}</svelte:element>
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
