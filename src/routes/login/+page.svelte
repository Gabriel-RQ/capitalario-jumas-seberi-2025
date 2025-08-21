<script lang="ts">
  import { enhance } from "$app/forms";
  import { Button, Input } from "$lib/components";
  import { TriangleAlertIcon } from "@lucide/svelte";
  import type { PageProps } from "./$types";
  import { scale } from "svelte/transition";
  import { expoInOut } from "svelte/easing";

  let { form }: PageProps = $props();
</script>

<section
  class="column-system items-center transition-colors duration-500 ease-in-out"
  class:bg-jumas-red={form?.error}
  class:bg-jumas-yellow={!form?.error}
>
  <div class="col-span-full grid grid-cols-subgrid gap-y-14">
    <h2 class="title col-span-full">Acesse o capitalário</h2>

    <form
      method="post"
      class="flex flex-col gap-6 col-span-full md:col-span-6 md:col-start-2 lg:col-start-4"
      use:enhance
    >
      <Input
        label="Senha de acesso"
        type="password"
        name="password"
        required
        minlength={6}
      />
      <Button type="submit">Acessar</Button>

      {#if form?.error}
        <div
          class="p-6 inline-flex items-center bg-jumas-yellow rounded-xl shadow-lg"
          in:scale={{ easing: expoInOut }}
        >
          <TriangleAlertIcon
            class="size-12 fill-jumas-red stroke-jumas-yellow"
          />
          <span class="font-bold text-xl m-auto text-jumas-red">
            {form.message}
          </span>
        </div>
      {/if}
    </form>
  </div>
</section>
