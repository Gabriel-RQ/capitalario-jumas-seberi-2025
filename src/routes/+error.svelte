<script lang="ts">
  import { page } from "$app/state";
  import { BombIcon } from "@lucide/svelte";
</script>

<div class="m-auto space-y-4">
  <BombIcon class="size-96" />
  <h1 class="font-bold text-3xl">{page.status} {page.error?.message}</h1>
</div>
