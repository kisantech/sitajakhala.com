<script lang="ts">
  import tenders from './tender.json';
  import { debounce } from '$lib/debounce';

  let searchEle: HTMLInputElement;
  let shownTenders = tenders;
  function onInput(e: any) {
    const filter: string = e.target.value.toLowerCase();
    if (filter.length == 0) {
      shownTenders = tenders;
    } else {
      shownTenders = tenders.filter(({ date, title, description }) => {
        return (
          date.includes(filter) ||
          title.toLowerCase().includes(filter) ||
          description.toLowerCase().includes(filter)
        );
      });
    }
  }
</script>


<svelte:head>
  <title>Tenders - Sitajakhala</title>
</svelte:head>

<p class="text-blue-500 text-center">All Tenders and Notices</p>
<h1 class="text-6xl text-yellow-400 text-center mb-4">Tenders</h1>

<div class="flex justify-center">
  <input
    type="search"
    bind:this={searchEle}
    on:input={debounce(onInput, 700)}
    class="shadow-lg w-full md:w-2/3 p-2 rounded-xl"
    style="border: 2px solid #F0FEFE;"
    placeholder="Search Notices 🔍"
  />
</div>

{#if shownTenders.length > 0}
  <ul class="p-8 flex md:flex-row flex-col flex-wrap justify-evenly">
    {#each shownTenders as tender, i}
      <li
        class="m-2 p-2 w-full md:w-2/6 shadow-lg hover:shadow-xl flex flex-col rounded-2xl"
        style="border: 2px solid #F0FEFE; border-left-color: #60a5fa"
      >
        <a
          class="hover:text-blue-600 font-bold text-blue-500"
          href={`/tenders/${i}`}
        >
          {tender.title}
        </a>
        <i class="text-gray-400 mb-2">{tender.date}</i>
        <p class="text-gray-600">
          {tender.description.slice(0, 150)}
          ...
          <a 
            class="hover:text-blue-600 italic text-blue-500"
            href={`/tenders/${i}`}
          >
            Read More
          </a>
        </p>
        {#if tender?.link?.length > 0}
          <p class="p-4">
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
      </li>
    {/each}
  </ul>
{:else}
  <p class="m-8 text-gray-400 text-center">
    No Tenders present. Check the search bar and try again later.
  </p>
{/if}

