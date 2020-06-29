import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Home',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "Home" */ '../views/Home/index.vue'),
    meta: {
      title: '主页',
    },
  },
  {
    path: '/Message',
    name: 'Message',
    component: () =>
      import(/* webpackChunkName: "Message" */ '../views/Message/index.vue'),
    meta: {
      title: '消息',
    },
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: () =>
      import(/* webpackChunkName: "Contacts" */ '../views/Contacts/index.vue'),
    meta: {
      title: '通讯录',
    },
  },
  {
    path: '/My',
    name: 'My',
    component: () =>
      import(/* webpackChunkName: "My" */ '../views/My/index.vue'),
    meta: {
      title: '我的',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
