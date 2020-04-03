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
	} ,
	{
		path: '/log' ,
		name: 'Log' ,
		component: function () {
			return import( '../views/Log.vue' )
		}
	} ,
	{
		path: '/events' ,
		name: 'Events' ,
		component: function () {
			return import( '../views/Events.vue' )
		}
	} ,
	{
		path: '/records' ,
		name: 'Records' ,
		component: function () {
			return import( '../views/Records.vue' )
		}
	} ,
	{
		path: '/frames' ,
		name: 'Frames' ,
		component: function () {
			return import( '../views/Frames.vue' )
		}
	} ,
	{
		path: '/thresholds' ,
		name: 'Thresholds' ,
		component: function () {
			return import( '../views/Thresholds.vue' )
		}
	} ,
	{
		path: '/deltas' ,
		name: 'Deltas' ,
		component: function () {
			return import( '../views/Deltas.vue' )
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router