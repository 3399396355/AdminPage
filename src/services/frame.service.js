import vm from '../main.js'
import { GenericUtils } from '../utils/generic'
import Decryptor from '../utils/decryptor'

function getToday() {
	const suffix = GenericUtils.get_today_eastern_time_key_suffix();
	vm.$socket.sendObj({
		"type": "redis_get_lrange" ,
		"starting_position": 0 ,
		"ending_position": -1 ,
		"list_key": `sleep.images.frames.${suffix}` ,
		"channel": "frames"
	});
}

function tryToDecryptStoredEncrypted() {
	let success_decrypted_indexes = [];
	let success_decrypted = [];
	for ( let i = 0; i < vm.$store.state.frame.downloaded.encrypted.length; ++i ) {
		const decrypted =  Decryptor( vm.$store.state.frame.downloaded.encrypted[ i ] );
		if ( decrypted ) {
			success_decrypted_indexes.push( i );
			success_decrypted.push( decrypted );
		}
	}
	for ( let i = 0; i < success_decrypted_indexes.length; ++i ) {
		vm.$store.state.frame.downloaded.encrypted.splice( success_decrypted_indexes[ i ] , 1 );
	}
	vm.$store.dispatch( "frame/newDecrypted" , success_decrypted );
}

function printEncrypted() {
	console.log( vm.$store.state.frame.downloaded.encrypted );
}

function printDecrypted() {
	console.log( vm.$store.state.frame.downloaded.decrypted );
}

export const frameService = {
	getToday ,
	tryToDecryptStoredEncrypted ,
	printEncrypted ,
	printDecrypted ,
};