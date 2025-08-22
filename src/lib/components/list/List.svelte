<script lang="ts">
  import type { Snippet } from "svelte";

  type ListProps = {
    title: string;
    children?: Snippet;
    class?: string;
  };

  let { class: className, title, children }: ListProps = $props();
</script>

<div
  class="h-fit bg-glass p-6 rounded-xl space-y-4 border border-glass w-full {className}"
>
  <p class="font-black font-montserrat text-xl">{title}</p>

  <div class="overflow-y-auto space-y-3">
    {@render children?.()}
  </div>
</div>
