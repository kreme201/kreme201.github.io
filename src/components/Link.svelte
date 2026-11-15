<script>
    export let href = "#";
    let className = "";
    export { className as class };

    $: external = href.startsWith("http");
</script>

<a
    class={className}
    href={href}
    rel={external ? "noopener noreferrer" : undefined}
    target={external ? "_blank" : undefined}
>
    <slot />
</a>
