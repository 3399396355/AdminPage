import { TextEncoder, TextDecoder } from 'text-encoding-utf-8';
import tweetnacl from 'tweetnacl'
import tweetnacl_util from 'tweetnacl-util'
import tweetnacl_sealedbox_js from 'tweetnacl-sealedbox-js'
tweetnacl.util = tweetnacl_util;
tweetnacl.sealedbox = tweetnacl_sealedbox_js;

import vm from '../main.js'

function Decryptor( encrypted_base64_string ) {
	try {
		const private_key = vm.$store.state.personal.libsodium.private_key;
		const secretKeyBinary = tweetnacl.util.decodeBase64( private_key );
		const publicKeyBinary = tweetnacl.box.keyPair.fromSecretKey( secretKeyBinary ).publicKey;
		const decryptMessageBinary = tweetnacl.util.decodeBase64( encrypted_base64_string );
		const decryptedBinary = tweetnacl.sealedbox.open( decryptMessageBinary , publicKeyBinary , secretKeyBinary );
		const decryptedUTF8 = new TextDecoder( "utf-8" ).decode( decryptedBinary );
		return decryptedUTF8;
	}
	catch ( e ) { console.log( "Couldn't Decrypt" ); return false; }
}

export default Decryptor