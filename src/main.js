import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'

import VueNativeSock from 'vue-native-websocket'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import './registerServiceWorker'
import { store } from './store';
import Personal from '../personal'
import WebsocketHandler from './utils/websocketHandler.js'

// https://support.apple.com/guide/server/import-a-certificate-identity-apd0c9b2a9d/mac
//Vue.use( VueNativeSock , `wss://${ Personal.websocket.host }:${ Personal.websocket.port }` , {
Vue.use( VueNativeSock , `ws://${ Personal.websocket.host }:${ Personal.websocket.port }` , {
	reconnection: true ,
	reconnectionAttempts: 5 ,
	reconnectionDelay: 3000 ,
	format: 'json'
})

Vue.config.productionTip = false

//Vue.use( VueSidebarMenu )

Vue.use( BootstrapVue )
Vue.use( IconsPlugin )

const vm = new Vue({
	router ,
	store ,
	render: function (h) { return h(App) } ,
	data: {
		global_state: {
			loaded: false
		}
	}
}).$mount('#app')

vm.$options.sockets.onopen = WebsocketHandler.onopen
vm.$options.sockets.onerror = WebsocketHandler.onerror
vm.$options.sockets.onmessage = WebsocketHandler.onmessage

export default vm