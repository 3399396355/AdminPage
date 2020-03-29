import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
import VueNativeSock from 'vue-native-websocket'

import './registerServiceWorker'
import { store } from './store';
import Personal from '../personal'
import WebsocketHandler from './utils/websocketHandler.js'

Vue.use( VueNativeSock , `ws://${ Personal.websocket.host }:${ Personal.websocket.port }` , {
	reconnection: true ,
	reconnectionAttempts: 5 ,
	reconnectionDelay: 3000 ,
	format: 'json'
})

Vue.config.productionTip = false

const vm = new Vue({
	router ,
	store ,
	render: function (h) { return h(App) } ,
	data: {
		personal: {
			libsodium: {
				private_key: "blah" ,
			}
		} ,
		downloaded: {
			logs: [] ,
			events: [] ,
			records: [] ,
			frames: [] ,
			thresholds: [] ,
			deltas: [] ,
			errors: [] ,
		}
	}
}).$mount('#app')

vm.$options.sockets.onopen = WebsocketHandler.onopen
vm.$options.sockets.onmessage = WebsocketHandler.onmessage

export default vm