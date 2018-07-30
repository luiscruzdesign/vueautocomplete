import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import EpisodeList from '@/components/EpisodeList.vue'
import Episode from '@/components/Episode.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/serie/:id',
      name: 'EpisodeList',
      component: EpisodeList
    },
    {
      path: '/episode/:id',
      component: Episode
    }
  ]




})
