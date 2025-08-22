<script lang="ts">
  import { Counter, List, ListItem } from "$lib/components";
  import { onMount } from "svelte";

  const heroes = [
    {
      name: "João Luiz Pozzobon",
      href: "/pozzobon",
    },
    {
      name: "José Engling",
      href: "/engling",
    },
    {
      name: "Franz Reinisch",
      href: "/reinisch",
    },
  ];

  onMount(() => {
    document.body.style.setProperty("--bg-color", "var(--color-jumas-blue)");
  });
</script>

<section class="column-system grid-rows-[repeat(2,auto)_1fr]">
  <h2
    class="title col-span-full md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3"
  >
    Capitalário dos Heróis
  </h2>

  <p class="col-span-full font-medium font-montserrat md:text-4xl text-center">
    Deposite seu capital de graças para a conquista do quadro dos heróis
  </p>

  <div class="col-span-full grid grid-cols-subgrid items-center">
    <Counter
      current={0}
      total={200}
      class="col-span-full md:col-span-6 md:col-start-2 lg:col-span-6 lg:col-start-5"
    />

    <List
      title="Saiba mais"
      class="col-span-full md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-1 lg:row-1"
    >
      {#each heroes as { name, href }}
        <ListItem description={name} />
      {/each}
    </List>
  </div>
</section>

<footer class="text-center pb-4 font-montserrat space-y-4 text-sm">
  <p>Hier bin Ich!</p>
  <p>© Jumas Seberi 2025</p>
</footer>
