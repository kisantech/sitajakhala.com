<script lang="ts">
  import { page } from '$app/stores';
  import tenders from './tender.json';
  const id: number = parseInt($page.params.id);
  const tender = tenders.find((_, i) => i === id);
  const paras = tender.description.split('\n');
</script>

<div class="px-4 md:p-16">
  <div class="px-4">
    <a href="/tenders" class="text-gray-500 hover:text-blue-500"
      ><i>{'< Back to all tenders'}</i></a
    >
  </div>
  <p class="text-blue-500 text-center">{tender.date}</p>
  <h1 class="text-4xl text-yellow-400 text-center mb-4">{tender.title}</h1>

  {#each paras as para}
    <p class="my-2">{para}</p>
  {/each}

  {#if tender?.link?.length > 0}
    <p class="my-4">
      <a
        target="_blank"
        class="transition duration-500 p-2 px-8 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600"
        style="border-radius: 10px;"
        href={tender.link}
      >
        Download file
      </a>
    </p>
  {/if}
</div>

<hr class="my-2" />

