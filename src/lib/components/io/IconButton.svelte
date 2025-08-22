<script lang="ts">
  import type { Snippet } from "svelte";

  type IconButtonProps = {
    children: Snippet;
    onclick?: (
      event: MouseEvent & {
        currentTarget: EventTarget & HTMLButtonElement;
      }
    ) => void;
    disabled?: boolean;
  };

  let { children, onclick, disabled }: IconButtonProps = $props();
</script>

<button
  class="bg-glass border-glass border rounded-xl p-6 h-max hover:bg-glass-dark focus:bg-glass-dark transition-colors outline-none"
  {disabled}
  {onclick}
>
  {@render children()}
</button>
