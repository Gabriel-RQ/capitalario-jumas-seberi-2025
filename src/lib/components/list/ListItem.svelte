<script lang="ts">
  import { ChevronRightIcon, ImageIcon } from "@lucide/svelte";

  type ListItemProps = {
    description: string;
    onclick?: () => void;
  };

  let { description, onclick }: ListItemProps = $props();
</script>

<button
  class="bg-glass-dark py-3 px-2 inline-flex items-center justify-between gap-2 w-full rounded-lg hover:bg-glass focus:bg-glass transition-colors outline-none"
  {onclick}
>
  <span
    class="p-2 bg-glass-dark rounded-md size-16 inline-flex items-center justify-center shrink-0"
  >
    <ImageIcon class="size-8" />
  </span>

  <span class="text-nowrap overflow-hidden overflow-ellipsis">
    {description}
  </span>

  <ChevronRightIcon class="size-12 shrink-0" />
</button>
