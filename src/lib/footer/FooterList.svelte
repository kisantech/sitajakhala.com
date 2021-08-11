<script lang="ts">
  export let title = '';
  export let entries: [name: string, link: string][] = [];
</script>

<ul class="my-2">
  <li style="border-left: 3px solid #60a5fa;" class="p-4 font-bold">{title}</li>
  <hr class="my-2" />
  {#each entries as entry}
    <li class="p-2"><a class="hover:text-blue-400" href={entry[1]}>{entry[0]}</a></li>
    <hr />
  {/each}
</ul>

