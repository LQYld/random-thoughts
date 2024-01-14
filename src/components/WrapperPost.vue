<script setup lang="ts">
import {useRoute} from 'vue-router'
const route = useRoute()

import { formatDate } from '../logics'

const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

console.log(frontmatter,'frontmatter')

</script>

<template>
  <div class="prose m-auto mb-8 slide-enter-content">
    <h1 class="mb-0 !-mt-6">
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p v-if="frontmatter.date" class="opacity-50">
     {{ formatDate(frontmatter.date, false) }}
    </p>
    <article ref="content">
      <slot />
    </article>
    <div v-if="route.path !== '/'">
      <span font-mono op50>> </span>
      <RouterLink :to="route?.path.split('/').slice(0, -1).join('/') || '/'" class="font-mono op50 hover:op75"
        v-text="'cd ..'" />
    </div>
  </div>
</template>

<style scoped>
a:after {
  background-color: transparent;
}

.opacity-50 {
  opacity: 0.5 !important;
}
</style>
