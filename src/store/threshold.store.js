import { thresholdService } from '../services/threshold.service.js';

export const error = {
	namespaced: true ,
	state: {
		downloaded: []
	},
	actions: {
		new( { commit } , new_thresholds ) {
			commit( 'newRecords' , new_thresholds );
		}
	},
	mutations: {
		newThresholds( state , new_thresholds ) {
			state.downloaded = [ ...state.downloaded , ...new_thresholds ];
			console.log( state.downloaded );
		} ,
	}
}