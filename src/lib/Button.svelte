<script lang="ts">
  export let type: string = '';
  export let disabled = false;
</script>

<button
  {disabled}
  {type}
  style="border-radius: 10px;"
  class="transition duration-500 p-2 px-8 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600"
  on:click
>
  <slot />
</button>

