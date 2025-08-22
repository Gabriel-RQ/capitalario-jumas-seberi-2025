<script lang="ts">
  import { XIcon } from "@lucide/svelte";
  import { fade, scale } from "svelte/transition";
  import { Link } from "./io";
  import type { Snippet } from "svelte";

  type ModalProps = {
    title: string;
    banner: string;
    content: string;
    cta?: Snippet;
  };

  let { title, banner, content, cta }: ModalProps = $props();
</script>

<div
  class="fixed bg-black/50 backdrop-blur-lg inset-0 z-10"
  transition:fade={{ duration: 200 }}
></div>

<div
  class="z-20 fixed top-1/2 left-1/2 -translate-1/2 bg-glass-dark border border-glass p-4 rounded-lg min-w-[340px] max-w-9/10 w-max md:w-[424px] lg:w-[564px] backdrop-blur-lg grid grid-rows-[150px_1fr_auto] gap-y-3"
  transition:scale={{ duration: 200 }}
>
  <div
    class="text-center inline-flex gap-2 justify-between w-full before:absolute before:inset-0 before:h-40 {`before:bg-[url(${banner})]`} before:bg-cover before:opacity-25 before:rounded-lg *:z-10"
  >
    <div class="w-9"></div>
    <h3 class="font-montserrat font-bold text-2xl">{title}</h3>
    <button onclick={() => history.back()} class="self-start">
      <XIcon class="size-9" />
    </button>
  </div>

  <p>
    {content}
  </p>

  {@render cta?.()}
</div>
