<script>
  import { onMount } from 'svelte';

  let currentURL = '';

  onMount(() => {
    currentURL = window.location.pathname;
  });
</script>

<nav>
  {#if currentURL !== '/egetprojekt'}
  <a href="/">Hem</a>
  <a href="/telltale">Telltale</a>
  <a href="/todo">Todo</a>
  <a href="/memory">Memory</a>
  <a href="/chatbot">Chatbot</a>
  <a href="/blog">Blog</a>
  <a
    target="_blank"
    href="https://github.com/Plankisen/Plankisen.github.io"
    >GitHub</a
  >
  {/if}
</nav>

<hr />

<slot />
