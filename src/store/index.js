import Vue from 'vue'
import Vuex from 'vuex';

import { personal } from './personal.store';
import { log } from './log.store';
import { info } from './info.store';
import { error } from './error.store';
import { event } from './event.store';
import { record } from './record.store';
import { frame } from './frame.store';
import { delta } from './delta.store';
import { threshold } from './threshold.store';

Vue.use( Vuex )
export const store = new Vuex.Store({
	modules: {
		personal ,
		log ,
		info ,
		error ,
		event ,
		record ,
		frame ,
		delta ,
		threshold ,
	}
});