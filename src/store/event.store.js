import { eventService } from '../services/event.service.js';

export const error = {
	namespaced: true ,
	state: {
		downloaded: []
	},
	actions: {
		new( { commit } , new_events ) {
			commit( 'newEvents' , new_events );
		}
	},
	mutations: {
		newEvents( state , new_events ) {
			state.downloaded = [ ...state.downloaded , ...new_events ];
			console.log( state.downloaded );
		} ,
	}
}