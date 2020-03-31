import { errorService } from '../services/error.service.js';

export const error = {
	namespaced: true ,
	state: {
		downloaded: []
	},
	actions: {
		new( { commit } , new_errors ) {
			commit( 'newErrors' , new_errors );
		}
	},
	mutations: {
		newErrors( state , new_errors ) {
			state.downloaded = [ ...state.downloaded , ...new_errors ];
			console.log( state.downloaded );
		} ,
	}
}