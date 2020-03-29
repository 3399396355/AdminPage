import vm from '../main.js'
import Decryptor from './decryptor'
import Personal from '../../personal'

function send_test( data ) {
	vm.$socket.sendObj({
		"type": "redis_get_lrange" ,
		"starting_position": 0 ,
		"ending_position": -1 ,
		"list_key": "sleep.log.2020.03.25" ,
		"channel": "log"
	})
}

function websocket_message_decoder( message ) {
	try { message = JSON.parse( message.data ) }
	catch( e ) { console.log( e ) }
	if ( !message ) { return }
	console.log( message )
	let decrypted = false;
	try {
		if ( typeof message.data === 'string' || message.data instanceof String ) {
			const single = Decryptor( Personal.libsodium_private_key , message.data );
			decrypted = [ single ];
		}
		else {
			decrypted = message.data.map( x => Decryptor( Personal.libsodium_private_key , x ) )
		}
	}
	catch( e ) { console.log( e ); return; }
	if ( !decrypted ) { return; }
	const type = message.message;
	console.log( type );
	//console.log( decrypted )
	if ( type === "new_logs" ) {
		//vm.$data.downloaded.logs = [ ...vm.$data.downloaded.logs , decrypted ]
		// Mutations vs Actions in Vuex
		vm.$store.dispatch( "logs/new" , decrypted )
		//vm.$store.commit( "logs/new" , decrypted )
	}
	else if ( type === "new_events" ) {
		vm.$data.downloaded.events = [ ...vm.$data.downloaded.events , decrypted ]
	}
	else if ( type === "new_records" ) {
		vm.$data.downloaded.records = [ ...vm.$data.downloaded.records , decrypted ]
	}
	else if ( type === "new_frames" ) {
		vm.$data.downloaded.frames = [ ...vm.$data.downloaded.frames , decrypted ]
	}
	else if ( type === "new_thresholds" ) {
		vm.$data.downloaded.thresholds = [ ...vm.$data.downloaded.thresholds , decrypted ]
	}
	else if ( type === "new_deltas" ) {
		vm.$data.downloaded.deltas = [ ...vm.$data.downloaded.deltas , decrypted ]
	}
	else if ( type === "new_errors" ) {
		vm.$data.downloaded.errors = [ ...vm.$data.downloaded.errors , decrypted ]
	}
	else {
		console.log( "No Handler Registered for: " + type );
	}
}

const WebsocketHandler = {
	onopen: send_test ,
	onmessage: websocket_message_decoder
}

export default WebsocketHandler
