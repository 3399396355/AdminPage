import { frameService } from '../services/frame.service.js';

export const error = {
	namespaced: true ,
	state: {
		downloaded: []
	},
	actions: {
		new( { commit } , new_frames ) {
			commit( 'newEvents' , new_frames );
		}
	},
	mutations: {
		newFrames( state , new_frames ) {
			state.downloaded = [ ...state.downloaded , ...new_frames ];
			console.log( state.downloaded );
		} ,
	}
}