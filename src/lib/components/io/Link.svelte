<script lang="ts">
  import { ExternalLinkIcon, Link2Icon } from "@lucide/svelte";

  type LinkProps = {
    href: string;
    text: string;
    type?: "external" | "internal";
  };

  let { href, type = "external", text }: LinkProps = $props();
</script>

<a
  {href}
  class="bg-glass-dark border-glass-stroke border text-center rounded-md px-6 py-3 grid grid-cols-[1fr_auto] text-nowrap gap-4 min-w-max md:text-xl"
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
