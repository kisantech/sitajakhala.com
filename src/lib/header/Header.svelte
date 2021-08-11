<script lang="ts">
	import { page } from '$app/stores';
	import logo from './sitajakhala_logo.png';
</script>

<header class="flex justify-between mx-8 my-2">
	<div class="corner">
		<a href="/">
			<img src={logo} class="h-10" alt="SvelteKit" />
		</a>
	</div>

	<ul class="flex justify-around items-center w-1/4">
		<li class:active={$page.path === '/'} class="p-2"><a sveltekit:prefetch href="/">Home</a></li>
		<li class:active={$page.path === '/about'} class="p-2"><a sveltekit:prefetch href="/about">About</a></li>
		<li class:active={$page.path === '/contact'} class="p-2"><a sveltekit:prefetch href="/contact">Contact</a></li>
		<li class:active={$page.path === '/tenders'} class="p-2"><a sveltekit:prefetch href="/tenders">Tender</a></li>
	</ul>
</header>

