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
					new_frames = new_frames.map( x => JSON.parse( x ) );
					for ( let i = 0; i < new_frames.length; ++i ) {
						new_frames[ i ][ "image_b64" ] = "data:image/png;base64," + new_frames[ i ][ "image_b64" ];
					}
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