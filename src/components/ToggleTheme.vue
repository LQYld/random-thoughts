<script setup lang='ts'>
import { toggleDark } from '../logics'
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <div i-ri-sun-line dark:i-ri-moon-line dark:text-white/>
  </a>
</template>

<style scoped>
a:after {
  background-color: transparent !important;
}
</style>
