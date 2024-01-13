<script setup lang="ts">
const route = useRoute()

import { formatDate } from '~/logics'

const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

</script>

<template>
 <div m-auto prose> 
  <h1 class="mb-0">
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p
      v-if="frontmatter.date"
      class="opacity-50"
    >
      {{ formatDate(frontmatter.date, false) }} <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
    </p>
    <p v-if="frontmatter.place" class="mt--4!">
      <span op50>at </span>
      <a v-if="frontmatter.placeLink" :href="frontmatter.placeLink" target="_blank">
        {{ frontmatter.place }}
      </a>
      <span v-else font-bold>
        {{ frontmatter.place }}
      </span>
    </p>
    <p
      v-if="frontmatter.subtitle"
      class="opacity-50 italic"
    >
      {{ frontmatter.subtitle }}
    </p>
   <slot />
   <div v-if="route.path !== '/'">
      <span font-mono op50>> </span>
      <RouterLink
        :to="route?.path.split('/').slice(0, -1).join('/') || '/'"
        class="font-mono op50 hover:op75"
        v-text="'cd ..'"
      />
   </div>
</div>
</template>

<style scoped>
a:after{
  background-color: transparent;
}
</style>
