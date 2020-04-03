<script>
	import { allService } from '../services/all.service'
	import { logService } from '../services/log.service'
	import { recordService } from '../services/record.service'
	import { eventService } from '../services/event.service'
	import { errorService } from '../services/error.service'
	import { frameService } from '../services/frame.service'
	import { deltaService } from '../services/delta.service'
	import { thresholdService } from '../services/threshold.service'
	import { infoService } from '../services/info.service'
	export default {
		name: 'CLIButtons' ,
		// props: {
		//  master_password: String
		// } ,
		mounted() {
			// this.$nextTick( () => {{
			// }});
		} ,
		methods: {
			printAllEncrypted() {
				allService.printEncrypted();
			} ,
			printAllDecrypted() {
				allService.printDecrypted();
			} ,
			printLog() {
				logService.printDecrypted();
			} ,
			printRecords() {
				recordService.printDecrypted();
			} ,
			printEvents() {
				eventService.printDecrypted();
			} ,
			printErrors() {
				errorService.printDecrypted();
			} ,
			printFrames() {
				frameService.printDecrypted();
			} ,
			printDeltas() {
				deltaService.printDecrypted();
			} ,
			printThresholds() {
				thresholdService.printDecrypted();
			} ,
			printInfo() {
				infoService.printDecrypted();
			} ,

		} ,
		computed: {
			// master_password: {
			// 	get() {
			// 		console.log( "MasterPassword get()" );
			// 		return this.$store.state.personal.libsodium.private_key;
			// 	} ,
			// 	set( value ) {
			// 		console.log( `MasterPassword set( ${ value } )` );
			// 		this.$store.dispatch( "personal/updateMasterKey" , value );
			// 		//vm.$store.dispatch( "logs/new" , decrypted )
			// 	}
			// }
		}
	};
</script>

<template>
	<!-- https://bootstrap-vue.js.org/docs/components/modal -->
	<div id="master_password_id">
		<b-container fluid>
			<b-row class="justify-content-center">
				<b-button variant="success" @click="printAllEncrypted">Print All Encrypted</b-button>
				<b-button variant="primary" @click="printAllDecrypted">Print All Decrypted</b-button>
			</b-row>
			<br>
			<b-row class="justify-content-center">
				<b-button variant="success" @click="printLog">Print Log</b-button>
				<b-button variant="primary" @click="printRecords">Print Records</b-button>
				<b-button variant="success" @click="printEvents">Print Events</b-button>
				<b-button variant="primary" @click="printErrors">Print Errors</b-button>
				<b-button variant="success" @click="printFrames">Print Frames</b-button>
				<b-button variant="primary" @click="printDeltas">Print Deltas</b-button>
				<b-button variant="success" @click="printThresholds">Print Thresholds</b-button>
				<b-button variant="primary" @click="printInfo">Print Info</b-button>
			</b-row>
		</b-container>
	</div>
</template>