import { thresholdService } from '../services/threshold.service.js';

export const threshold = {
	namespaced: true ,
	state: {
		downloaded: {
			encrypted: [] ,
			decrypted: []
		}
	},
	actions: {
		newDecrypted( { commit } , new_thresholds ) {
			commit( 'newDecryptedThresholds' , new_thresholds );
		} ,
		newEncrypted( { commit } , new_thresholds ) {
			commit( 'newEncryptedThresholds' , new_thresholds );
		}
	},
	mutations: {
		newDecryptedThresholds( state , new_thresholds ) {
			if ( new_thresholds ) {
				if ( new_thresholds.length > 0 ) {
					new_thresholds = new_thresholds.map( x => JSON.parse( x ) );
					for ( let i = 0; i < new_thresholds.length; ++i ) {
						new_thresholds[ i ][ "image_b64" ] = "data:image/png;base64," + new_thresholds[ i ][ "image_b64" ];
					}
					state.downloaded.decrypted = [ ...state.downloaded.decrypted , ...new_thresholds ];
				}
			}
		} ,
		newEncryptedThresholds( state , new_thresholds ) {
			if ( new_thresholds ) {
				if ( new_thresholds.length > 0 ) {
					state.downloaded.encrypted = [ ...state.downloaded.encrypted , ...new_thresholds ];
				}
			}
		} ,
	}
}