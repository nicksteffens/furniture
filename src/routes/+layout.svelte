<script>
  import "../app.css";
  const today = new Date();
</script>

<svelte:head>
  <title>Nicklas Steffens | Furniture</title>
</svelte:head>

<main class="p-4">
  <header>
    <nav class="flex flex-row gap-4">
      <a href="/" title="home" class="prose prose-2xl">Nicklas Steffens</a>
      <a href="/furniture">
        furniture
      </a>
    </nav>
  </header>

  <slot />
</main>
