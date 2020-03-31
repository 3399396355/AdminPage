import { recordService } from '../services/record.service.js';

export const error = {
	namespaced: true ,
	state: {
		downloaded: []
	},
	actions: {
		new( { commit } , new_records ) {
			commit( 'newRecords' , new_records );
		}
	},
	mutations: {
		newRecords( state , new_records ) {
			state.downloaded = [ ...state.downloaded , ...new_records ];
			console.log( state.downloaded );
		} ,
	}
}