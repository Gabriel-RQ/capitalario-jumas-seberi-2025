<script lang="ts">
  import { ExternalLinkIcon, Link2Icon } from "@lucide/svelte";

  type LinkProps = {
    href: string;
    text: string;
    type?: "external" | "internal";
    variant?: "dark" | "light";
  };

  let { href, type = "external", text, variant = "dark" }: LinkProps = $props();
</script>

<a
  {href}
  class="border-glass-stroke border text-center rounded-md px-6 py-3 grid grid-cols-[1fr_auto] text-nowrap gap-4 min-w-max md:text-xl"
  class:bg-glass-dark={variant === "dark"}
  class:bg-glass={variant === "light"}
  target={type === "external" ? "_blank" : "_self"}
  rel="noreferrer"
>
  {text}

  <span class="*:size-6 my-auto">
    {#if type === "external"}
      <ExternalLinkIcon />
    {:else}
      <Link2Icon />
    {/if}
  </span>
</a>
