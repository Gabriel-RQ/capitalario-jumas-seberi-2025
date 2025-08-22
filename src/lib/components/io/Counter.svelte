<script lang="ts">
  import { scale } from "svelte/transition";
  import type { Snippet } from "svelte";

  type CounterProps = {
    current: number;
    total: number;
    class?: string;
    incrementButton: Snippet;
  };

  let {
    current,
    total,
    class: className,
    incrementButton,
  }: CounterProps = $props();
</script>

<div class="flex flex-col items-center {className}">
  <div class="inline-flex gap-4 size-fit items-center">
    {#key current}
      <span
        class="text-9xl md:text-[156px] lg:text-[224px] font-bold font-montserrat"
        in:scale
      >
        {current}
      </span>
    {/key}

    {@render incrementButton()}
  </div>

  <span class="col-span-full text-center">
    Capitais depositados, restam {total - current}...
  </span>
</div>
