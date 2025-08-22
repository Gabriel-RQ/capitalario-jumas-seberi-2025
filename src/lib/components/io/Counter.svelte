<script lang="ts">
  import { PlusIcon } from "@lucide/svelte";
  import { IconButton } from ".";
  import { scale } from "svelte/transition";

  type CounterProps = {
    current: number;
    total: number;
    class?: string;
  };

  let { current, total, class: className }: CounterProps = $props();

  function increaseCounter() {
    if (current < total) {
      current++;
    }
  }
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

    <IconButton onclick={increaseCounter}>
      <PlusIcon />
    </IconButton>
  </div>

  <span class="col-span-full text-center">
    Capitais depositados, restam {total - current}...
  </span>
</div>
