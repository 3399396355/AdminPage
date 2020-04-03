import { logService } from '../services/log.service.js';

export const log = {
	namespaced: true ,
	state: {
		downloaded: {
			message_ids: {} ,
			decrypted: [] ,
			encrypted: []
		}
	},
	actions: {
		newDecrypted( { commit } , new_logs ) {
			commit( 'newDecryptedLogs' , new_logs );
		} ,
		newEncrypted( { commit } , new_logs ) {
			commit( 'newEncryptedLogs' , new_logs );
		}
	},
	mutations: {
		newDecryptedLogs( state , new_logs ) {
			if ( new_logs ) {
				if ( new_logs.length > 0 ) {
					new_logs = new_logs.map( ( x ) => { x = JSON.parse( x ); console.log( x[ 'message' ] ); return x; } );
					state.downloaded.decrypted = [ ...state.downloaded.decrypted , ...new_logs ];
				}
			}
		} ,
		newEncryptedLogs( state , new_logs ) {
			if ( new_logs ) {
				if ( new_logs.length > 0 ) {
					state.downloaded.encrypted = [ ...state.downloaded.encrypted , ...new_logs ];
				}
			}
		} ,
	}
}