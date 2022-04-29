import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rooms from '../views/Rooms.vue'
import SingleRoom from '../views/SingleRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/rooms/:slug',
    name: 'room',
    component: SingleRoom
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
