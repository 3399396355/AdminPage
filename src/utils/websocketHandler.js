import vm from '../main.js'
import Decryptor from './decryptor'
//import Personal from '../../personal'
//import { store } from '../store';

function on_error( error ) {
	console.log( error );
}

function send_ping() {
	console.log( "Supposedly Connected To WebSocket" );
	vm.$socket.sendObj({
		"type": "ping"
	});
}

function send_test( data ) {
	vm.$socket.sendObj({
		"type": "redis_get_lrange" ,
		"starting_position": 0 ,
		"ending_position": -1 ,
		"list_key": "sleep.log.2020.03.29" ,
		"channel": "log"
	})
}

function try_to_decrypt_data( data ) {
	let decrypted = [];
	try {
		if ( typeof data === 'string' || data instanceof String ) {
			//const single = Decryptor( Personal.libsodium_private_key , data );
			const single = Decryptor( vm.$store.state.personal.libsodium.private_key , data );
			decrypted = [ single ];
		}
		else {
			//decrypted = data.map( x => Decryptor( Personal.libsodium_private_key , x ) )
			decrypted = data.map( x => Decryptor( vm.$store.state.personal.libsodium.private_key , x ) )
		}
		return decrypted
	}
	catch( e ) { console.log( e ); return decrypted; }
}

function websocket_message_decoder( message ) {
	try { message = JSON.parse( message.data ) }
	catch( e ) { /* // aka not JSON console.log( e ); */ }
	console.log( message );
	if ( !message ) { return }
	let decrypted = [];
	if ( message.data ) {
		decrypted = try_to_decrypt_data( message.data );
	}
	const type = message.message;
	if ( type === "pong" ) {
		console.log( "WebSocket Server PONGED! VoHiYo" );
		return;
	}
	if ( type === "new_info" ) {
		console.log( "Got New Info Passed From Raspberry Pi --> redis.publish() --> sleepVPS --> redis.subscribe() --> socket.broadcast()" );
		console.log( message );
		return;
	}
	if ( type === "new_logs" ) {
		//vm.$data.downloaded.logs = [ ...vm.$data.downloaded.logs , decrypted ]
		// Mutations vs Actions in Vuex
		vm.$store.dispatch( "logs/new" , decrypted );
		//vm.$store.commit( "logs/new" , decrypted )
	}
	if ( type === "new_events" ) {
		vm.$data.downloaded.events = [ ...vm.$data.downloaded.events , decrypted ]
		return;
	}
	if ( type === "new_records" ) {
		vm.$data.downloaded.records = [ ...vm.$data.downloaded.records , decrypted ]
		return;
	}
	if ( type === "new_frames" ) {
		vm.$data.downloaded.frames = [ ...vm.$data.downloaded.frames , decrypted ]
		return;
	}
	if ( type === "new_thresholds" ) {
		vm.$data.downloaded.thresholds = [ ...vm.$data.downloaded.thresholds , decrypted ]
		return;
	}
	if ( type === "new_deltas" ) {
		vm.$data.downloaded.deltas = [ ...vm.$data.downloaded.deltas , decrypted ]
		return;
	}
	if ( type === "new_errors" ) {
		vm.$data.downloaded.errors = [ ...vm.$data.downloaded.errors , decrypted ]
		return;
	}
	console.log( "You fucked up. No Handler Registered for: " + type );
}

const WebsocketHandler = {
	onerror: on_error ,
	onopen: send_ping ,
	onmessage: websocket_message_decoder
}

export default WebsocketHandler
