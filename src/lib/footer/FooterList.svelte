<script lang="ts">
  export let title = '';
  export let entries: [name: string, link: string][] = [];
</script>

<ul>
  <li>{title}</li>
  {#each entries as entry}
    <li><a href={entry[1]}>{entry[0]}</a></li>
  {/each}
</ul>

