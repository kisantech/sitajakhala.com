<script lang="ts">
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import Hamburger from 'svelte-icons/fa/FaBars.svelte';
  import CrossIcon from 'svelte-icons/md/MdClose.svelte';
  import logo from '../assets/sitajakhala_logo.png';

  const pages: [name: string, url: string][] = [
    ['ABOUT', '/about'],
    ['CONTACT', '/contact'],
    ['TENDERS', '/tenders']
  ];

  let display = false;
  const onClick = () => (display = !display);
</script>

<header
  class="bg-white text-lg z-20 fixed top-0 left-0 w-full"
  style="box-shadow: 0px 0px 10px 5px white;"
>
  <div class="flex justify-between px-4 lg:px-8 py-2">
    <a href="/">
      <img src={logo} class="h-8 md:h-12" alt="SvelteKit" />
    </a>

    <ul class="justify-around items-center hidden md:flex">
      {#each pages as p}
        <li class:active={$page.path.includes(p[1])} class="px-4">
          <a
            class="hover:text-blue-500 transition-colors duration-500"
            sveltekit:prefetch
            href={p[1]}>{p[0]}</a
          >
        </li>
      {/each}
    </ul>

    <button class="md:hidden h-8 text-blue-400" on:click={onClick}>
      {#if display}
        <span in:fade>
          <CrossIcon />
        </span>
      {:else}
        <span in:fade>
          <Hamburger />
        </span>
      {/if}
    </button>
  </div>

  {#if display}
    <ul
      transition:fade
      class="md:hidden shadow-lg p-4 bg-white w-full flex flex-col"
    >
      {#each pages as p}
        <li class:active={$page.path === p[1]} class="p-2">
          <a sveltekit:prefetch href={p[1]}>{p[0]}</a>
        </li>
        <hr />
      {/each}
    </ul>
  {/if}
</header>

<div class="h-12" />

<style>
  .active {
    border-bottom: 2px solid #60a5fa;
    color: #60a5fa;
  }
</style>

