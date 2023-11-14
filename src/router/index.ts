import { createRouter, createWebHistory } from 'vue-router'
import VideoPlayerView from '../views/VideoView.vue'
import HomeView from '../views/HomeView.vue'

import UploadView from '../views/UploadView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/upload',
      component: UploadView
    },
    {
      path: '/player',
      component: VideoPlayerView
    }
  ]
})

export default router
