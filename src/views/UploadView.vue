<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import { server_url } from '@/assets/server_url'

// const action = `${server_url}/videos`
const action = `http://127.0.0.1:3000/videos`
</script>
<template>
  <el-upload class="upload-demo" name="" drag :action="action" multiple>
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
    <template #tip>
      <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </template>
  </el-upload>
</template>
