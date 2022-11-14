import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardView from '../views/CardView.vue'
import DetailView from '../views/DetailView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/card',
    name: 'cardview',
    component: CardView
  },
  {
    path: '/detail/:id',
    name: 'detailview',
    component: DetailView
  },
]

const router = new VueRouter({
  routes
})

export default router
