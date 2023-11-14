<script setup lang="ts">
import { defineProps } from 'vue'
import VideoCard from './VideoCard.vue'
const props = defineProps(['list'])
</script>

<template>
  <div class="video-list">
    <VideoCard v-for="i in props.list" :content="i" :key="i" />
  </div>
</template>

<style lang="scss">
.video-list {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  min-height: 70vh;
  width: 80vw;
  justify-content: flex-start;
}
</style>
