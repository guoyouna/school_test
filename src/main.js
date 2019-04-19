// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import './assets/flexible'
import './assets/ganfont/style.css'
import './assets/ganfont/fonts/ganfont.ttf'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/utlis/filters';
import '@/api/interceptors'
import axios from 'axios'
import Share from 'vue-social-share'
import '../static/vue-social-share/dist/client.css';
Vue.use(Share)

Vue.prototype.$http=axios;
Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  
  components: { App },
  template: '<App/>'
})
