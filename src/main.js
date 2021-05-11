import Vue from 'vue'
<<<<<<< HEAD
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
=======
import app from './App.vue'
import { BootstrapVue,  BootstrapVueIcons } from 'bootstrap-vue'
>>>>>>> 9bee51d65f2c198030df9cef7984f84cd09f28e9
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/fonts/material-icon/css/material-design-iconic-font.min.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
    router,
    render: h => h(App)
=======
  router,
  render: h => h(app)
>>>>>>> 9bee51d65f2c198030df9cef7984f84cd09f28e9
}).$mount('#app')

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueAxios, axios)