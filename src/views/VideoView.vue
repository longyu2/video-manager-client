<script setup lang="ts">
import V3dPlayer from 'v3d-player'
import 'v3d-player/dist/style.css'

import { reactive } from 'vue'
const options = reactive({
  autoplay: true,
  muted: true,
  screenshot: true,
  preventClickToggle: true,
  theme: '#FF3366',
  volume: 0.9,
  src: ''
})
</script>

<template>
  <div class="demo-player">
    <v3d-player ref="playerRef" :options="options" />
  </div>
</template>

<style>
#dplayer {
  width: 300px;
  height: 200px;
}
</style>
