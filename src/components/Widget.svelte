<script>
    export let title = "";
</script>

<!-- Twenty Twelve 사이드바 위젯: 작은 대문자 제목 + 13px 본문 -->
<section class="mb-12 text-[13px] leading-[1.846]">
    {#if title}
        <h2 class="mb-4 text-[11px] font-bold uppercase leading-[2.18] text-tt-widget">{title}</h2>
    {/if}
    <slot />
</section>
