<script setup lang="ts">
import {useRoute} from 'vue-router'
import Footer from './Footer.vue';
const route = useRoute()

import { formatDate } from '../logics'

const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

</script>

<template>
  <div class="prose m-auto mb-8">
    <h1 class="mb-0 slide-enter-50">
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p v-if="frontmatter.date"    class="opacity-50 !-mt-6 slide-enter-50">
     {{ formatDate(frontmatter.date, false) }}
    </p>
    <article ref="content">
      <slot />
    </article>
    <div class="prose m-auto mt-8 mb-8 slide-enter animate-delay-500 print:hidden" v-if="route.path !== '/'">
      <span font-mono op50>> </span>
      <RouterLink :to="route?.path.split('/').slice(0, -1).join('/') || '/'" class="font-mono op50 hover:op75"
        v-text="'cd ..'" />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.opacity-50 {
  opacity: 0.5 !important;
}
</style>
