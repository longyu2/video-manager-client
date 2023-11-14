<script setup lang="ts">
import VideoList from '@/components/VideoList.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
import axios from 'axios'

import { server_url } from '@/assets/server_url'

let [AllList, pageIndex, searchWord] = [ref([]), ref(0), ref('')]

axios.get(`${server_url}/videos`).then((result) => {
  AllList.value = result.data.data
})

// 搜索视频
const searchVideos = () => {
  axios.get(`${server_url}/videos/${searchWord.value}`).then((result) => {
    AllList.value = result.data.data
  })
}
</script>

<template>
  <main>
    <div class="serach-box">
      <el-input class="serach-input" v-model="searchWord" />
      <el-button @click="searchVideos">搜索</el-button>
      <el-button @click="router.push('/upload')">上传</el-button>
    </div>

    <VideoList :list="AllList[pageIndex]" />

    <div class="page">
      <el-button @click="pageIndex = 1">
        <el-icon><DArrowLeft /></el-icon>
      </el-button>
      <button
        class="button"
        v-for="i in AllList.length"
        :class="i - 1 == pageIndex ? 'button-checked' : ''"
        @click="pageIndex = i - 1"
        :key="i"
        color="#626aef"
        plain
      >
        {{ i }}
      </button>

      <el-button @click="pageIndex = AllList.length">
        <el-icon><DArrowRight /></el-icon>
      </el-button>
    </div>
  </main>
</template>

<style lang="scss">
$box-width: 80vw;

main {
  margin: auto;
  width: $box-width;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.serach-box {
  width: $box-width;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .serach-input {
    height: 5vh;
    flex-grow: 0;

    width: 50vw;
  }
}
button {
  margin: 10px;
  font-size: medium;
}
.button {
  font-size: medium;
  width: 60px;
  height: 33px;
  background-color: white;
  border: 1px solid #79bbff;
  border-radius: 5px;
  &:hover {
    color: white;
    background: #409eff;
  }
  &:active {
    background: #337ecc;
  }
}
.button-checked {
  color: white;
  background: #79bbff;
}
</style>
