import { eventService } from '../services/event.service.js';

export const event = {
	namespaced: true ,
	state: {
		downloaded: {
			encrypted: [] ,
			decrypted: []
		}
	},
	actions: {
		newDecrypted( { commit } , new_events ) {
			commit( 'newDecryptedEvents' , new_events );
		} ,
		newEncrypted( { commit } , new_events ) {
			commit( 'newEncryptedEvents' , new_events );
		}
	},
	mutations: {
		newDecryptedEvents( state , new_events ) {
			if ( new_events ) {
				if ( new_events.length > 0 ) {
					state.downloaded.decrypted = [ ...state.downloaded.decrypted , ...new_events ];
				}
			}
		} ,
		newEncryptedEvents( state , new_events ) {
			if ( new_events ) {
				if ( new_events.length > 0 ) {
					state.downloaded.encrypted = [ ...state.downloaded.encrypted , ...new_events ];
				}
			}
		} ,
	}
}