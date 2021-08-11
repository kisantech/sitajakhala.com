<script context="module">
  import { browser, dev } from '$app/env';

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="m-8">
  <h1 class="text-center font-bold">SITAJAKHALA DUGDHA UTPADAK SAMABAI SAMITI LTD</h1>
  <h1 class="text-center font-bold">1958 (Regd. No.67/58-59, Amlighat)</h1>
  <h1 class="text-center font-bold">Amlighat, Dist:-Morigaon, Assam, 782410</h1>

  <section class="mx-8 md:mx-16 my-8">
    <b>How and why the Society was formed ?</b>
    <p>
      During the period of establishment it was viewed that the Production of
      milk in villages surrounding Amlighat was substantial, But the producers
      were deprived of a legitimate price because of unorganized marketing
      system. So some socially conscious people thought about collecting the
      production and sell it through organized marketing. This thought was the
      nutshell of inspiration behind the formation of this cooperative society.
    </p>
  </section>

  <section class="mx-8 md:mx-16 my-8">
    <b>Business Activities</b>
    <p>
      Procurement and sell of raw milk, pasteurized cow milk Procurement,
      preparation and sell of cattle feed Sale of value added milk products
      Provide free vaccination facility and etc
    </p>
  </section>
  <section class="mx-8 md:mx-16 my-8">
    <b>Social welfare Activities </b>
    <p>
      Organizes various training and seminar for the benefit of members as well
      as other farmers of Assam Financial assistance to poor and talented
      students of the locality. Has played a major role in establishing Jagiroad
      College, and Sitajakhala H.S School Provides financial assistance for the
      improvement of sports, Culture and other Such social Institutions
    </p>
  </section>
  <section class="mx-8 md:mx-16 my-8">
    <b>Production of raw milk</b>
    <p>Around 18,000 to 20,000 liters a day</p>
  </section>
</div>

