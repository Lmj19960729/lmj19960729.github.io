import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import ProjectView from '../views/ProjectView.vue'
import DemoView from '../views/DemoView.vue'
import NoteView from '../views/NoteView.vue'
import RecommendView from '../views/RecommendView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blogs',
    name: 'Blog',
    component: BlogView 
  },
  {
    path: '/projects',
    name: 'Project',
    component: ProjectView  
  },
  {
    path: '/demos',
    name: 'Demos',
    component: DemoView 
  },

  {
    path: '/notes',
    name: 'Notes',
    component: NoteView
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: RecommendView
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
