import { deltaService } from '../services/delta.service.js';

export const delta = {
	namespaced: true ,
	state: {
		downloaded: {
			encrypted: [] ,
			decrypted: []
		}
	},
	actions: {
		newDecrypted( { commit } , new_deltas ) {
			commit( 'newDecryptedDeltas' , new_deltas );
		} ,
		newEncrypted( { commit } , new_deltas ) {
			commit( 'newEncryptedDeltas' , new_deltas );
		}
	},
	mutations: {
		newDecryptedDeltas( state , new_deltas ) {
			state.downloaded.decrypted = [ ...state.downloaded.decrypted , ...new_deltas ];
			console.log( state.downloaded.decrypted );
		} ,
		newEncryptedDeltas( state , new_deltas ) {
			state.downloaded.encrypted = [ ...state.downloaded.encrypted , ...new_deltas ];
			console.log( state.downloaded.encrypted );
		} ,
	}
}