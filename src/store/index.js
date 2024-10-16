/*
 * @Author: 刘梦昊 1551316289@qq.com
 * @Date: 2024-09-30 13:56:45
 * @LastEditTime: 2024-10-09 15:06:22
 * @LastEditors: 刘梦昊
 * @FilePath: \vueproject01\src\store\index.js
 * @Description: 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    activeTab: 1
  },
  mutations: {
    setActiveTab (state, value) {
      state.activeTab = value
    }
  }
})

export default store