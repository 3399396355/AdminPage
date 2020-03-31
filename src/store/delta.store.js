import { deltaService } from '../services/delta.service.js';

export const error = {
	namespaced: true ,
	state: {
		downloaded: []
	},
	actions: {
		new( { commit } , new_deltas ) {
			commit( 'newDeltas' , new_deltas );
		}
	},
	mutations: {
		newDeltas( state , new_deltas ) {
			state.downloaded = [ ...state.downloaded , ...new_deltas ];
			console.log( state.downloaded );
		} ,
	}
}