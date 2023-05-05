<script>
  export let data;
</script>


<h1>Furniture</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/furniture/{slug}">{title}</a></li>
	{/each}
</ul>
