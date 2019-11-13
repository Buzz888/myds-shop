import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import push from '../views/push.vue'
import list from '../views/list.vue'
import buy from '../views/buy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path:'shop/push',component:push},
      {path:'shop/list',component:list},
      {path:'shop/push/:id',component:push,props:true},
      {path:'shop/buy',component:buy,props:true}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
