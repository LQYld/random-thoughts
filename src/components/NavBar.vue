<script setup lang="ts">

</script>

<template>
  <header class="header z-40">
    <RouterLink
      class="h-12 absolute xl:fixed m-5 select-none outline-none flex items-center cursor-pointer"
      to="/"
      focusable="false"
    >
      <img w-9 dark:bg-white p-2 mr-3 rounded-2 src="/quill.png"/>
      <p class="dark:text-white">Random thoughts</p>
    </RouterLink>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" print:op0>
        <RouterLink to="/posts" title="Blog">
          <a class="lt-md:hidden cursor-pointer">Blog</a>
          <div i-ri-article-line md:hidden cursor-pointer />
        </RouterLink>
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

a:after {
  background-color: transparent !important;
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
