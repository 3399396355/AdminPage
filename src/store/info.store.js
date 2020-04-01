export const info = {
	namespaced: true ,
	state: {
		downloaded: {
			decrypted: [] ,
			encrypted: []
		}
	},
	actions: {
		newDecrypted( { commit } , new_info ) {
			commit( 'newDecryptedInfo' , new_info );
		} ,
		newEncrypted( { commit } , new_info ) {
			commit( 'newEncryptedInfo' , new_info );
		}
	},
	mutations: {
		newDecryptedInfo( state , new_info ) {
			if ( new_info ) {
				if ( new_info.length > 0 ) {
					state.downloaded.decrypted = [ ...state.downloaded.decrypted , ...new_info ];
				}
			}
		} ,
		newEncryptedInfo( state , new_info ) {
			if ( new_info ) {
				if ( new_info.length > 0 ) {
					state.downloaded.encrypted = [ ...state.downloaded.encrypted , ...new_info ];
				}
			}
		} ,
	}
}