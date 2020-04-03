import vm from '../main.js'
import { GenericUtils } from '../utils/generic'
import Decryptor from '../utils/decryptor'

function tryToDecryptStoredEncrypted() {
	let success_decrypted_indexes = [];
	let success_decrypted = [];
	for ( let i = 0; i < vm.$store.state.info.downloaded.encrypted.length; ++i ) {
		const decrypted =  Decryptor( vm.$store.state.info.downloaded.encrypted[ i ] );
		if ( decrypted ) {
			success_decrypted_indexes.push( i );
			success_decrypted.push( decrypted );
		}
	}
	for ( let i = 0; i < success_decrypted_indexes.length; ++i ) {
		vm.$store.state.info.downloaded.encrypted.splice( success_decrypted_indexes[ i ] , 1 );
	}
	vm.$store.dispatch( "info/newDecrypted" , success_decrypted );
}

function printEncrypted() {
	console.log( vm.$store.state.info.downloaded.encrypted );
}

function printDecrypted() {
	console.log( vm.$store.state.info.downloaded.decrypted );
}

export const infoService = {
	tryToDecryptStoredEncrypted ,
	printEncrypted ,
	printDecrypted ,
};