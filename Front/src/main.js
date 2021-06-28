import Vue from 'vue'
import app from './App.vue'
import { BootstrapVue,  BootstrapVueIcons } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/fonts/material-icon/css/material-design-iconic-font.min.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueAxios, axios)