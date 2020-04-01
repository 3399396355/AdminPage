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
			state.downloaded.decrypted = [ ...state.downloaded.decrypted , ...new_thresholds ];
		} ,
		newEncryptedThresholds( state , new_thresholds ) {
			state.downloaded.encrypted = [ ...state.downloaded.encrypted , ...new_thresholds ];
		} ,
	}
}