import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'HomePage',
    component: Home,
}, ]

const router = new VueRouter({
    routes
})

export default router