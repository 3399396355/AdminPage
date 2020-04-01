import vm from '../main.js'
import Decryptor from './decryptor'

import { allService } from '../services/all.service'

function on_error( error ) {
	console.log( error );
}

function send_ping() {
	vm.$socket.sendObj({
		"type": "ping"
	});
}

function on_open() {
	console.log( "Supposedly Connected To WebSocket" );
	send_ping();
	allService.getToday();
}

function try_to_decrypt_data( data ) {
	let decrypted = [];
	try {
		if ( typeof data === 'string' || data instanceof String ) {
			//const single = Decryptor( Personal.libsodium_private_key , data );
			const single = Decryptor( vm.$store.state.personal.libsodium.private_key , data );
			if ( !single ) { return false; }
			decrypted = [ single ];
		}
		else {
			let first_try = data.shift();
			first_try = Decryptor( vm.$store.state.personal.libsodium.private_key , first_try );
			if ( !first_try ) { return false; }
			//decrypted = data.map( x => Decryptor( Personal.libsodium_private_key , x ) )
			decrypted = data.map( x => Decryptor( vm.$store.state.personal.libsodium.private_key , x ) );
			decrypted.unshift( first_try );
		}
		return decrypted
	}
	catch( e ) { console.log( e ); return false; }
}

function store_encrypted( type , encrypted ) {
	switch( type ) {
		case "new_logs":
			vm.$store.dispatch( "log/newEncrypted" , encrypted );
			break;
		case "new_events":
			vm.$store.dispatch( "event/newEncrypted" , encrypted );
			break;
		case "new_records":
			vm.$store.dispatch( "record/newEncrypted" , encrypted );
			break;
		case "new_frames":
			vm.$store.dispatch( "frame/newEncrypted" , encrypted );
			break;
		case "new_thresholds":
			vm.$store.dispatch( "threshold/newEncrypted" , encrypted );
			break;
		case "new_deltas":
			vm.$store.dispatch( "delta/newEncrypted" , encrypted );
			break;
		case "new_errors":
			vm.$store.dispatch( "error/newEncrypted" , encrypted );
			break;
		default:
			console.log( "You fucked up. No Handler Registered for: " + type );
	}
}

function store_decrypted( type , decrypted ) {
	switch( type ) {
		case "new_logs":
			vm.$store.dispatch( "log/newDecrypted" , decrypted );
			break;
		case "new_events":
			vm.$store.dispatch( "event/newDecrypted" , decrypted );
			break;
		case "new_records":
			vm.$store.dispatch( "record/newDecrypted" , decrypted );
			break;
		case "new_frames":
			vm.$store.dispatch( "frame/newDecrypted" , decrypted );
			break;
		case "new_thresholds":
			vm.$store.dispatch( "threshold/newDecrypted" , decrypted );
			break;
		case "new_deltas":
			vm.$store.dispatch( "delta/newDecrypted" , decrypted );
			break;
		case "new_errors":
			vm.$store.dispatch( "error/newDecrypted" , decrypted );
			break;
		default:
			console.log( "You fucked up. No Handler Registered for: " + type );
	}
}

function websocket_message_decoder( message ) {
	try { message = JSON.parse( message.data ) }
	catch( e ) { /* // aka not JSON console.log( e ); */ }
	console.log( message );
	if ( !message ) { return }
	let encrypted = true;
	let decrypted = false;
	let decrypted_data;
	if ( message.data ) {
		decrypted_data = try_to_decrypt_data( message.data );
		if ( decrypted_data ) {
			if ( decrypted_data.length > 0 ) {
				decrypted = true;
			}
		}
	}
	const type = message.message;
	if ( type === "pong" ) {
		console.log( "WebSocket Server PONGED! VoHiYo" );
		return;
	}
	if ( type === "new_info" ) {
		console.log( "Got New Info Passed From Raspberry Pi --> redis.publish() --> sleepVPS --> redis.subscribe() --> socket.broadcast()" );
		console.log( "We Need to Reroute this Into A known Handler" );
		console.log( message );
	}
	if ( decrypted ) {
		store_decrypted( type , decrypted );
	}
	else {
		store_encrypted( type , message.data );
	}
}

const WebsocketHandler = {
	onerror: on_error ,
	onopen: on_open ,
	onmessage: websocket_message_decoder
}

export default WebsocketHandler
