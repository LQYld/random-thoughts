<script setup lang="ts">
import { formatDate } from '~/logics'

const props = defineProps<{
  date: string
}>()

</script>

<template>
  <time :date="date" :title="date">
    {{ formatDate(props.date) }} 
  </time>
</template>
