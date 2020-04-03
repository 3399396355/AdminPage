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
					new_deltas = new_deltas.map( x => JSON.parse( x ) );
					for ( let i = 0; i < new_deltas.length; ++i ) {
						new_deltas[ i ][ "image_b64" ] = "data:image/png;base64," + new_deltas[ i ][ "image_b64" ];
					}
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