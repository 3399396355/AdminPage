// TESTING ONLY
import PersonalJSON from '/Users/morpheous/.config/personal/raspi_motion_alarm_rewrite.json'

export const personal = {
	namespaced: true ,
	state: {
		libsodium: {
			//private_key: "NOT SET"
			// TESTING ONLY
			private_key: PersonalJSON[ 'libsodium' ][ 'private_key' ]
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