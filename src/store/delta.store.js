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
			if ( new_deltas ) {
				if ( new_deltas.length > 0 ) {
					state.downloaded.decrypted = [ ...state.downloaded.decrypted , ...new_deltas ];
				}
			}
		} ,
		newEncryptedDeltas( state , new_deltas ) {
			if ( new_deltas ) {
				if ( new_deltas.length > 0 ) {
					state.downloaded.encrypted = [ ...state.downloaded.encrypted , ...new_deltas ];
				}
			}
		} ,
	}
}