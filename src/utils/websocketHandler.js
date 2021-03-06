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
			const single = Decryptor( data );
			if ( !single ) { return false; } // aka empty check
			decrypted = [ single ];
		}
		else {
			if ( data.length < 1 ) { return false; }
			let first_try = data[ 0 ];
			first_try = Decryptor( first_try );
			if ( !first_try ) { return false; }
			decrypted = data.map( x => Decryptor( x ) );
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
		case "new_info":
			//console.log( "Got New Info Passed From Raspberry Pi --> redis.publish() --> sleepVPS --> redis.subscribe() --> socket.broadcast()" );
			vm.$store.dispatch( "info/newEncrypted" , decrypted );
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
		case "new_info":
			//console.log( "Got New Info Passed From Raspberry Pi --> redis.publish() --> sleepVPS --> redis.subscribe() --> socket.broadcast()" );
			vm.$store.dispatch( "info/newDecrypted" , decrypted );
			console.log( decrypted );
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
	if ( decrypted ) {
		store_decrypted( type , decrypted_data );
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
