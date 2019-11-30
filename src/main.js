import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入加载执行注册Vant模块
import './utils/register-vant'

// 引入amfe-flexible动态设置rem基准值
import 'amfe-flexible'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
