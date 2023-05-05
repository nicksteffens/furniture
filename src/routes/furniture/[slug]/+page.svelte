<script>
	export let data;
</script>

<div class="flex flex-col gap-4 p-4 rounded">
  <h3>
    {data.post.title}
    <em>{data.post.year}</em>
  </h3>

  <div class="flex flex-row gap-4">
    {#each data.post.images as image}
      <img src="/images/{image}" alt="{data.post.title}">
    {/each}

    <p>
      {data.post.description}
    </p>
  </div>
</div>
