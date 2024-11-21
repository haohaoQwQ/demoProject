/*
 * @Author: 刘梦昊 1551316289@qq.com
 * @Date: 2024-09-27 11:05:42
 * @LastEditTime: 2024-11-12 14:32:12
 * @LastEditors: 刘梦昊
 * @FilePath: \vueproject01\src\main.js
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from '@/store'
import '@/assets/css/index.scss'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
