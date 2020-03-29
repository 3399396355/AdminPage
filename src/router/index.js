import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use( VueRouter )

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	} ,
	{
		path: '/about',
		name: 'About',
		component: function () {
			return import(/* webpackChunkName: "about" */ '../views/About.vue')
		}
	} ,
	{
		path: '/test' ,
		name: 'Test' ,
		component: function () {
			return import( '../views/Test.vue' )
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router