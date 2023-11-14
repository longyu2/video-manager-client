<script setup lang="ts">
import { defineProps } from 'vue'
import { server_url } from '@/assets/server_url'
const props = defineProps(['content'])

const video = props.content

const go = () => {
  location.href = `${server_url}${video.video_path.replace('upload', '')}`
}
</script>

<template>
  <div class="card" @click="go">
    <img src="https://misaka-fans-photos.github.io/pic/waterfall1.webp" alt="" />
    <nav>{{ video.video_name }}</nav>
    <nav>{{ video.video_introduction }}</nav>
  </div>
</template>

<style lang="scss">
.card {
  padding: 0px;
  margin: 1%;
  width: 18%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  img {
    border-radius: 6px;
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
}
</style>
