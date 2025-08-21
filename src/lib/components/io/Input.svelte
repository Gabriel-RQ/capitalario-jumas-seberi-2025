<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  type InputProps = {
    label: string;
    type?: "text" | "email" | "password" | "tel";
    name: string;
  } & HTMLInputAttributes;

  let { label, type = "text", name, ...restProps }: InputProps = $props();
</script>

<label class="flex flex-col gap-3 text-xl">
  {label}
  <input
    {type}
    {name}
    {...restProps}
    class="bg-glass-dark border-glass-stroke border-1 rounded-lg px-3 py-5 outline-none"
  />
</label>
