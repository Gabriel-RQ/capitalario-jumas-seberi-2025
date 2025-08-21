<script lang="ts">
  import type { Snippet } from "svelte";

  type ButtonProps = {
    onclick?: () => void;
    variant?: "yellow" | "blue";
    children: Snippet;
    class?: string;
    type?: "button" | "submit";
  };

  let {
    onclick,
    variant = "blue",
    children,
    class: className,
    type = "button",
  }: ButtonProps = $props();
</script>

<button
  {onclick}
  {type}
  class="{variant === 'blue'
    ? 'bg-jumas-blue'
    : 'bg-jumas-yellow text-jumas-blue'} px-12 py-6 rounded-lg font-semibold {className}"
>
  {@render children()}
</button>
