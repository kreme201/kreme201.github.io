<script>
    import {page} from "$app/stores";
    import "../app.css";
    import Link from "../components/Link.svelte";
</script>

<svelte:head>
    <link href={$page.url.origin + $page.url.pathname} rel="canonical" />
</svelte:head>

<header class="mb-4">
    <div class="flex gap-2">
        <img alt="avatar" class="w-10 rounded" src="/assets/images/avatar-132x132.jpg" />
        <h2 class="text-3xl font-semibold uppercase">kreme201</h2>
    </div>
    <nav class="border-t border-b flex space-x-4 mt-4 p-3 text-sm">
        <Link href="/">Home</Link>
    </nav>
</header>

<main class="py-1">
    <slot />
</main>

<footer class="border-t mt-4">
    <div class="flex justify-between mt-4 text-sm">
        <div class="justify-start space-x-3">
            <Link href="https://github.com/kreme201">Github</Link>
            <Link href="mailto:kreme201@gmail.com">Contact</Link>
        </div>
        <p class="text-sm font-semibold">&copy; {(new Date()).getFullYear()}. All rights reserved.</p>
    </div>
</footer>
