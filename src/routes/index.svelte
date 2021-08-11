<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Logo from '$lib/sitajakhala_hero.png';
  import Doodle from '$lib/572db8a423d483bbff5d5773c84fbd98.jpg';
  import CuteCow1 from '$lib/cute-cow-holding-milk-animal-drink_138676-2036.jpg';
  import CuteCow2 from '$lib/cute-baby-cow-sitting-cartoon-illustration_138676-2777.jpg';
import Contact from '$lib/Contact.svelte';
</script>

<svelte:head>
  <title>Sitajakhala</title>
</svelte:head>

<section>
  <hero class="relative">
    <div class="absolute top-0 left-0 h-24 w-24 z-0">
      <img src={Logo} alt="Cow" />
    </div>
    <div class="z-10">
      <h1>Join Us on the Journey</h1>
      <p>
        Sustainably produced. Undeniably delicious. Learn more about dairy’s
        path from farm to table.
      </p>
      <a href="/about">
        <Button>Read more</Button>
      </a>
    </div>
  </hero>
</section>

<section class="my-8 flex flex-col justify-center">
  <p>Our Products</p>
  <h1>Real Food, Real Good</h1>
  <p>
    It’s at the farm, in the store and on your table. Dairy is feeding people
    today for whatever comes tomorrow.
  </p>
  <div class="flex flex-col lg:flex-row">
    <div>
      <img src={Doodle} class="" alt="doodle" />
      <div>
        <img src={CuteCow1} class="rounded-full w-24" alt="doodle" />
        <h1>Smart Milk</h1>
        <p>
          Pasteurized and homogenized. Fortified with Vitamin A and D. Great
          source of protein, calcium, riboflavin, essential vitamins & minerals.
        </p>
      </div>
      <div>
        <img src={CuteCow2} class="rounded-full w-24" alt="doodle" />
        <h1>Cream</h1>
        <p>
          Specially produced from high-butterfat layer. Processed to give smooth
          consistency and rich taste.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="my-8 flex flex-col justify-center">
  <p>Notification</p>
  <h1>Tender</h1>
  <p>
    Download the Tender Schedule free of cost and then submit the bids before
    its expiration.
  </p>
  <ul>
  </ul>
</section>

<Contact />

