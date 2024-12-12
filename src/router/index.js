/*
 * @Author: 刘梦昊 1551316289@qq.com
 * @Date: 2024-09-27 11:05:42
 * @LastEditTime: 2024-11-20 11:43:43
 * @LastEditors: 刘梦昊
 * @FilePath: \vueproject01\src\router\index.js
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/demo1',
    component: () => import('../views/demo1/filterTable.vue')
  },
  {
    path: '/demo2',
    component: () => import('../views/demo2/mediaDevices.vue')
  },
  {
    path: '/demo3',
    component: () => import('../views/demo3/canvasBall.vue')
  },
  {
    path: '/demo4',
    component: () => import('../views/demo4/canvasTriangle.vue')
  },
  {
    path: '/demo5',
    component: () => import('../views/demo5/svg.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
