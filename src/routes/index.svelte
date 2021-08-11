<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Logo from '$lib/assets/sitajakhala_hero.png';
  import Doodle from '$lib/assets/572db8a423d483bbff5d5773c84fbd98.jpg';
  import CuteCow1 from '$lib/assets/cute-cow-holding-milk-animal-drink_138676-2036.jpg';
  import CuteCow2 from '$lib/assets/cute-baby-cow-sitting-cartoon-illustration_138676-2777.jpg';
  import Contact from './contact.svelte';

  import tenders from './tenders/tender.json';
</script>

<svelte:head>
  <title>Sitajakhala</title>
</svelte:head>

<section>
  <hero class="relative flex md:flex-row flex-col">
    <div class="z-10 w-full md:w-1/2 p-8 md:p-16 ">
      <h1 class="text-yellow-400 text-3xl md:text-6xl">
        Join Us on the Journey
      </h1>
      <p class="my-4 text-gray-500">
        Sustainably produced. Undeniably delicious. Learn more about dairy’s
        path from farm to table.
      </p>
      <a href="/about">
        <Button>Read more</Button>
      </a>
    </div>
    <div
      class="absolute md:top-0 -top-24 left-0 md:left-1/2 opacity-5 md:opacity-100 z-0 w-full md:w-1/2 h-64"
    >
      <img src={Logo} alt="Cow" />
    </div>
  </hero>
</section>

<section
  class="my-4 md:my-16 p-4 md:p-16 flex flex-col justify-center"
  style="background: #f1faff; box-shadow: 0px -7px 60px 20px #f1faff;"
>
  <p class="my-2 text-blue-500 text-center text-lg">Our Products</p>
  <h1 class="my-2 text-5xl text-yellow-400 text-center">
    Real Food, Real Good
  </h1>
  <p class="my-2 text-center text-gray-500">
    It’s at the farm, in the store and on your table. Dairy is feeding people
    today for whatever comes tomorrow.
  </p>

  <div class="flex justify-center items-center flex-col lg:flex-row">
    <img src={Doodle} class="rounded-3xl w-full md:w-1/2 p-4" alt="doodle" />
    <div>
      <div
        class="my-2 flex md:flex-row flex-col md:text-start text-center justify-between items-center bg-white rounded-xl p-4"
      >
        <img src={CuteCow1} class="rounded-full w-32 h-32" alt="doodle" />
        <div class="w-full md:w-1/2 ">
          <h1 class="text-2xl text-yellow-500">Smart Milk</h1>
          <p class="text-gray-500 my-2">
            Pasteurized and homogenized. Fortified with Vitamin A and D. Great
            source of protein, calcium, riboflavin, essential vitamins &
            minerals.
          </p>
        </div>
      </div>

      <div
        class="my-2 flex md:flex-row flex-col md:text-start text-center justify-between items-center bg-white rounded-xl p-4"
      >
        <img src={CuteCow2} class="rounded-full w-32 h-32" alt="doodle" />
        <div class="w-full md:w-1/2 ">
          <h1 class="text-2xl text-yellow-500">Cream</h1>
          <p class="text-gray-500 my-2">
            Specially produced from high-butterfat layer. Processed to give
            smooth consistency and rich taste.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="my-4 md:my-32 p-4 md:p-16 flex flex-col justify-center">
  <p class="my-2 text-blue-500 text-center text-lg">Notification</p>
  <h1 class="my-2 text-5xl text-yellow-400 text-center">Tender</h1>
  <p class="my-2 text-center text-gray-500">
    Download the Tender Schedule free of cost and then submit the bids before
    its expiration.
  </p>
  <ul class="my-4 flex justify-center flex-wrap">
    {#each tenders as tender, i}
      <li
        class="m-4 p-4 w-full md:w-1/4 shadow-lg hover:shadow-xl flex flex-col rounded-2xl"
        style="border: 2px solid #F0FEFE;"
      >
        <a class="hover:text-blue-600 font-bold text-blue-500" href={`/tenders/${i}`}
          >{tender.title}</a
        >
        <i class="text-gray-500">{tender.date}</i>
        <p class="text-gray-600">{tender.description.slice(0, 100)}...</p>
      </li>
    {/each}
  </ul>
</section>

<Contact />

