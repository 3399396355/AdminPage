
export const personal = {
	namespaced: true ,
	state: {
		libsodium: {
			private_key: false
		}
	} ,
	actions: {
		updateMasterKey( { commit } , master_key ) {
			commit( 'updateMasterKey' , master_key );
		}
	} ,
	mutations: {
		updateMasterKey( state , master_key ) {
			state.libsodium.private_key = master_key;
			console.log( state.libsodium );
		} ,
	}
}