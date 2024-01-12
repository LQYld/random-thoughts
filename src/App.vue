<script setup lang="ts">
import IndexMd from '../docs/index.md'
import { onMounted } from 'vue';
import { useEventListener, useWindowScroll } from '@vueuse/core'
import NavBar from './components/NavBar.vue'

onMounted(() => {
  const navigate = () => {
    if (location.hash) {
      const el = document.querySelector(decodeURIComponent(location.hash))
      if (el) {
        const rect = el.getBoundingClientRect()
        const y = window.scrollY + rect.top - 40
        window.scrollTo({
          top: y,
          behavior: 'smooth',
        })
        return true
      }
    }
  }
  useEventListener(window, 'hashchange', navigate)
})
const { y: scroll } = useWindowScroll()
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <NavBar />
  <div class="container">
    <div i-ri-menu-2-fill hidden />
    <IndexMd />
    <button title="Scroll to top" fixed right-3 bottom-3 w-10 h-10 hover:op100 rounded-full hover-bg-hex-8883 transition
      duration-300 z-100 print:hidden :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'" @click="toTop()">
      <div i-ri-arrow-up-line dark:text-white />
    </button>
  </div>
</template>

<style scoped>
.container {
  padding: 5vh 10vw !important;
}
</style>
