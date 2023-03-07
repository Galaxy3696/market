import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
Vue.config.productionTip = false
//三级联动全局组件
import TypeNav from '@/components/TypeNav'
import '@/mock/mockServe'
Vue.component(TypeNav.name,TypeNav)

// import {reqGetSearchInfo} from '@/apis/index'
// console.log(reqGetSearchInfo({}))
import "swiper/css/swiper.css"
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  router,
  store,
}).$mount('#app')
