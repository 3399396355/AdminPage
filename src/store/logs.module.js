import { logService } from '../services/log.service.js';

export const logs = {
	namespaced: true ,
	state: {
		downloaded: []
	},
	actions: {
		new( { commit } , new_logs ) {
			commit( 'newLogs' , new_logs );
		}
	},
	mutations: {
		newLogs( state , new_logs ) {
			state.downloaded = [ ...state.downloaded , ...new_logs ];
			console.log( state.downloaded );
		} ,
	}
}