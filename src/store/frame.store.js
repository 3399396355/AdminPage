import { frameService } from '../services/frame.service.js';

export const frame = {
	namespaced: true ,
	state: {
		downloaded: {
			encrypted: [] ,
			decrypted: []
		}
	},
	actions: {
		newDecrypted( { commit } , new_frames ) {
			commit( 'newDecryptedFrames' , new_frames );
		} ,
		newEncrypted( { commit } , new_frames ) {
			commit( 'newEncryptedFrames' , new_frames );
		}
	},
	mutations: {
		newDecryptedFrames( state , new_frames ) {
			if ( new_frames ) {
				if ( new_frames.length > 0 ) {
					state.downloaded.decrypted = [ ...state.downloaded.decrypted , ...new_frames ];
				}
			}
		} ,
		newEncryptedFrames( state , new_frames ) {
			if ( new_frames ) {
				if ( new_frames.length > 0 ) {
					state.downloaded.encrypted = [ ...state.downloaded.encrypted , ...new_frames ];
				}
			}
		} ,
	}
}