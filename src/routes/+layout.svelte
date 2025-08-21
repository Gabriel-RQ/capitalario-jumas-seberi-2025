<script lang="ts">
  import "../app.css";
  import logo from "$lib/assets/logo.webp";
  import { ColorBand, Logo } from "$lib/components";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={logo} />
</svelte:head>

<header class="absolute p-4 md:p-10 lg:px-20 w-full">
  <ColorBand />
  <Logo />
</header>

<main class="size-full">
  {@render children?.()}
</main>
