import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
//三级联动全局组件
import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name,TypeNav)

import {reqCategoryList} from '@/apis/index'
reqCategoryList()
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
