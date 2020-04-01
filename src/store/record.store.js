import { recordService } from '../services/record.service.js';

export const record = {
	namespaced: true ,
	state: {
		downloaded: {
			encrypted: [] ,
			decrypted: []
		}
	},
	actions: {
		newDecrypted( { commit } , new_records ) {
			commit( 'newDecryptedRecords' , new_records );
		} ,
		newEncrypted( { commit } , new_records ) {
			commit( 'newEncryptedRecords' , new_records );
		}
	},
	mutations: {
		newDecryptedRecords( state , new_records ) {
			state.downloaded.decrypted = [ ...state.downloaded.decrypted , ...new_records ];
			console.log( state.downloaded.decrypted );
		} ,
		newEncryptedRecords( state , new_records ) {
			state.downloaded.encrypted = [ ...state.downloaded.encrypted , ...new_records ];
			console.log( state.downloaded.encrypted );
		} ,
	}
}