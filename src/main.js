import Vue from 'vue'
import App from './App.vue'
//引入 layui css
//引入 layui css
import '../node_modules/layui-src/dist/css/layui.css'
import '../node_modules/layui-src/dist/layui.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')