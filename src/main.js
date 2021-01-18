/*
 * @Descripttion: 根目录文件
 * @version: 1.0.0
 * @Author: 王凯杰
 * @Date: 2021-01-18 20:49:21
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-18 21:36:20
 */
import Vue from 'vue'
import App from './App.vue'

import GL_Component from '@/libs/globalComponents'
Vue.config.productionTip = false


Vue.use(GL_Component)


new Vue({
  render: h => h(App),
}).$mount('#app')
