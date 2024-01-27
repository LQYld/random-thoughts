<script setup lang="ts">

</script>

<template>
  <header class="header z-40">
    <RouterLink
      class="h-12 absolute xl:fixed m-5 select-none outline-none flex items-center cursor-pointer"
      to="/"
      focusable="false"
    >
      <div text-2xl i-ph-book-open-text />
    </RouterLink>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" print:op0>
        <RouterLink to="/posts" title="随想">
          <span class="lt-md:hidden cursor-pointer">随想</span>
          <div i-mdi-lightbulb-on-30 md:hidden cursor-pointer />
        </RouterLink>
        <RouterLink to="/notes" title="笔录">
          <span class="lt-md:hidden cursor-pointer">笔录</span>
          <div i-ri-article-line md:hidden cursor-pointer />
        </RouterLink>
        <RouterLink to="/leetcode" title="力扣">
          <span class="lt-md:hidden cursor-pointer">力扣</span>
          <div i-simple-icons-leetcode md:hidden cursor-pointer />
        </RouterLink>
        <RouterLink to="/co-reading" title="共读">
          <span class="lt-md:hidden cursor-pointer">共读</span>
          <div i-material-symbols-frame-source-sharp md:hidden cursor-pointer />
        </RouterLink>
        <a href="https://github.com/LQYld/random-thoughts/issues" title="issues" target="_blank">
          <span class="lt-md:hidden cursor-pointer">issues</span>
          <div i-codicon-issues md:hidden cursor-pointer />
        </a>
        <a href="https://github.com/LQYld/random-thoughts/" title="github" target="_blank">
          <div i-uil-github-alt cursor-pointer />
        </a>
        <ToggleTheme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
