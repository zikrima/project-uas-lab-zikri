import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import TaskListPage from '../pages/TaskListPage.vue'
import TaskDetail from '../components/TaskDetail.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/tasks', component: TaskListPage },
  { path: '/tasks/:id', component: TaskDetail, name: 'taskDetail' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
