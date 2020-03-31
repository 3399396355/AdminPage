import Vue from 'vue'
import Vuex from 'vuex';

import { personal } from './personal.store';
import { log } from './log.store';

Vue.use( Vuex )
export const store = new Vuex.Store({
	modules: {
		personal ,
		log ,
		//alert,
		//authentication,
		//users
	}
});