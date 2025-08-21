<script lang="ts">
  import "../app.css";
  import logo from "$lib/assets/logo.webp";
  import { ColorBand, Logo } from "$lib/components";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={logo} />
</svelte:head>

<header class="relative p-4 md:p-10 lg:px-20">
  <ColorBand />
  <Logo />
</header>

<main>
  {@render children?.()}
</main>
