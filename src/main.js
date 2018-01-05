// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.prototype.$http = axios

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'

import iView from 'iview'
import 'iview/dist/styles/iview.css';

// import sass from './assets/css/base.scss'


Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.use(iView);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
