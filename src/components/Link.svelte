<script>
    export let href = "#";
    let target = "_self";

    if (href.startsWith("http")) {
        target = "_blank";
    }
</script>

<a class="text-gray-400 font-semibold hover:text-gray-500 hover:underline uppercase" href={href} target={target}>
    <slot />
</a>