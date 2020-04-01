import { logService } from '../services/log.service.js';

export const log = {
	namespaced: true ,
	state: {
		downloaded: {
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
			state.downloaded.decrypted = [ ...state.downloaded.decrypted , ...new_logs ];
			console.log( state.downloaded.decrypted );
		} ,
		newEncryptedLogs( state , new_logs ) {
			state.downloaded.encrypted = [ ...state.downloaded.encrypted , ...new_logs ];
			console.log( state.downloaded.encrypted );
		} ,
	}
}