<script lang="ts">
  export let type: string = '';
</script>

<button
  {type}
  style="border-radius: 10px;"
  class="p-2 px-8 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600"
  on:click
>
  <slot />
</button>

