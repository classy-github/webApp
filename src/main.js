import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入加载执行注册模块
import './utils/register-vant'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
