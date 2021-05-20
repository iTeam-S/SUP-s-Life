import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
	{
		path: '/sign',
		name: 'Home',
		component: Home,	
	}

]

const router = new VueRouter({
    routes
})

export default router