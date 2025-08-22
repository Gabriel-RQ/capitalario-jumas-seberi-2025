<script lang="ts">
  import type { Snippet } from "svelte";

  type IconButtonProps = {
    children: Snippet;
  };

  let { children }: IconButtonProps = $props();
</script>

<button
  class="bg-glass border-glass border rounded-xl p-6 h-max hover:bg-glass-dark focus:bg-glass-dark transition-colors outline-none"
>
  {@render children()}
</button>
