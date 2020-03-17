import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant' // 引入vant组件
import 'vant/lib/index.css' // 引入vant 组件的样式文件 在vant底下找到这个文件
// 以上的做发是完整导入的模式
// 按需引入是用哪个组件就引入哪个组件 没必要在开发阶段做
// 在性能优化阶段做 按需引入最佳
// 以上就完成 Vant的注册 我们可以在任意位置使用
Vue.use(Vant) // 注册组件库
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
