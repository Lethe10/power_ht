import Vue from 'vue'
import App from './App.vue'
import emitter from './utils/mitt.js'
import router from './router/router-index.js'
import * as echarts from 'echarts';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./utils/video.js"; 
import Axios from 'axios';
import Cookies from 'js-cookie'

Vue.config.productionTip = false

Vue.prototype.$axios = Axios
Vue.prototype.$emitter = emitter;
Vue.prototype.$cookie = Cookies;
Vue.prototype.$echarts = echarts;


Vue.use(ElementUI);
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')