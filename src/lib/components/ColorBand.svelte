<script lang="ts">
  const colorClasses = [
    "bg-jumas-blue",
    "bg-jumas-red",
    "bg-jumas-green",
    "bg-jumas-yellow",
  ];
</script>

<div class="absolute inset-x-0 top-0 inline-flex h-1.5 *:grow">
  {#each colorClasses as className}
    <span class={className}></span>
  {/each}
</div>
