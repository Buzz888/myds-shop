import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  //消息
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/menu.vue')
  },
  {
    path: '/say',
    name: 'say',
    component: () => import('../views/say.vue')
  },
  //购物车
  {
    path: '/car',
    name: 'car',
    component: () => import('../views/car.vue')
  },
  //我的
  {
    path: '/me',
    name: 'me',
    component: () => import('../views/me.vue')
  },
  //商品路由
  {
    path: '/list/:id',
    name: 'mlist',
    props:true,
    component: () => import('../views/list.vue')
  },
  //提交路由
  {
    path: '/ok',
    name: 'ok',
    props:true,
    component: () => import('../views/ok.vue')
  },
  //发货路由
  {
    path: '/fahuo',
    name: 'fahuo',
    props:true,
    component: () => import('../views/fahuo.vue')
  },
  //密码错误跳转路由
  {
    path: '/stop',
    name: 'stop',
    props:true,
    component: () => import('../views/stop.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
