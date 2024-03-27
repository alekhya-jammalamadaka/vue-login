import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from "./i18n";


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(i18n)
Vue.use(VeeValidate);
Vue.use(Vuex);
// to avoid vue development mode warning messages
Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')