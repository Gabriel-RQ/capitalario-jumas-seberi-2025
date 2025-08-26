<script lang="ts">
  import {
    Counter,
    IconButton,
    Link,
    List,
    ListItem,
    Modal,
  } from "$lib/components";
  import { onMount } from "svelte";
  import { pushState } from "$app/navigation";
  import { page } from "$app/state";
  import bannerPozzobon from "$lib/assets/heroes/pozzobon.webp";
  import bannerEngling from "$lib/assets/heroes/engling.webp";
  import bannerReinisch from "$lib/assets/heroes/reinisch.webp";
  import type { PageProps } from "./$types";
  import { CheckIcon, PlusIcon, RotateCwIcon } from "@lucide/svelte";
  import { enhance } from "$app/forms";

  const heroes = [
    {
      id: "pozzobon",
      name: "João Luiz Pozzobon",
      banner: bannerPozzobon,
      description:
        "João Luiz Pozzobon foi um diácono permanente e missionário brasileiro. É considerado Servo de Deus pela Igreja Católica desde o ano de 1994, quando foram iniciados os trabalhos por sua beatificação. Em 2025 ele foi declarado Venerável pelo Papa Leão XIV.",
      href: "https://schoenstatt.org.br/home/espiritualidade/joao-luiz-pozzobon",
    },
    {
      id: "engling",
      name: "José Engling",
      banner: bannerEngling,
      description:
        "José Engling foi um dos primeiros membros do Movimento de Schoenstatt, fundado por Padre José Kentenich. Nascido na Alemanha, ele se destacou por sua profunda fé, dedicação e heroísmo durante a Primeira Guerra Mundial. Ele ofereceu sua vida a Deus e à Mãe de Deus como sacrifício pela fecundidade espiritual do Movimento de Schoenstatt. Morreu em combate em 1918 e é considerado um dos heróis de Schoenstatt. Sua causa de beatificação foi iniciada em 1952.",
      href: "https://schoenstatt.org.br/home/espiritualidade/jose-engling",
    },
    {
      id: "reinisch",
      name: "Franz Reinisch",
      banner: bannerReinisch,
      description:
        "Franz Reinisch foi um sacerdote e membro do Movimento de Schoenstatt. Ele ficou conhecido por sua oposição firme e corajosa ao regime nazista durante a Segunda Guerra Mundial. Ele se recusou a fazer o juramento de lealdade a Hitler, pois acreditava que isso ia contra a sua fé e sua consciência. Por essa recusa, ele foi preso e condenado à morte. Foi executado por guilhotina em 1942. Sua causa de beatificação foi iniciada em 2021.",
      href: "https://schoenstatt.org.br/home/espiritualidade/pe-francisco-reinisch",
    },
  ];

  function showModal(heroId: string) {
    pushState("", {
      showModal: true,
      heroId,
    });
  }

  onMount(() => {
    document.body.style.setProperty("--bg-color", "var(--color-jumas-blue)");
  });

  let { data }: PageProps = $props();

  let counterStatus: "default" | "increasing" | "done" = $state("default");
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
    <form
      action="?/increment"
      method="POST"
      class="col-span-full md:col-span-6 md:col-start-2 lg:col-span-6 lg:col-start-5"
      use:enhance={() => {
        return async ({ update }) => {
          counterStatus = "increasing";
          await update();
          counterStatus = "done";
          setTimeout(() => {
            counterStatus = "default";
          }, 1500);
        };
      }}
    >
      <Counter current={data.counter} total={data.maxCounter}>
        {#snippet incrementButton()}
          <IconButton disabled={counterStatus !== "default"}>
            {#if counterStatus === "increasing"}
              <RotateCwIcon class="animate-spin" />
            {:else if counterStatus === "done"}
              <CheckIcon />
            {:else}
              <PlusIcon />
            {/if}
          </IconButton>
        {/snippet}
      </Counter>
    </form>

    <List
      title="Saiba mais"
      class="col-span-full md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-1 lg:row-1"
    >
      {#each heroes as { id, name }}
        <ListItem description={name} onclick={() => showModal(id)} />
      {/each}
    </List>
  </div>
</section>

{#if page.state.showModal}
  {@const currentHero = heroes.find((h) => h.id === page.state.heroId)}
  <Modal
    title={currentHero!.name}
    banner={currentHero!.banner}
    content={currentHero!.description}
  >
    {#snippet cta()}
      <Link
        text="Saiba mais"
        href={currentHero?.href as string}
        type="external"
        variant="light"
      />
    {/snippet}
  </Modal>
{/if}

<footer class="text-center pb-4 font-montserrat space-y-4 text-sm">
  <p>Hier bin Ich!</p>
  <p>© Jumas Seberi 2025</p>
</footer>
