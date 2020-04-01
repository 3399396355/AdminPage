import { errorService } from '../services/error.service.js';

export const error = {
	namespaced: true ,
	state: {
		downloaded: {
			encrypted: [] ,
			decrypted: []
		}
	},
	actions: {
		newDecrypted( { commit } , new_errors ) {
			commit( 'newDecryptedErrors' , new_errors );
		} ,
		newEncrypted( { commit } , new_errors ) {
			commit( 'newEncryptedErrors' , new_errors );
		}
	},
	mutations: {
		newDecryptedErrors( state , new_errors ) {
			if ( new_errors ) {
				if ( new_errors.length > 0 ) {
					state.downloaded.decrypted = [ ...state.downloaded.decrypted , ...new_errors ];
				}
			}
		} ,
		newEncryptedErrors( state , new_errors ) {
			if ( new_errors ) {
				if ( new_errors.length > 0 ) {
					state.downloaded.encrypted = [ ...state.downloaded.encrypted , ...new_errors ];
				}
			}
		} ,
	}
}