<script>
	import { allService } from '../services/all.service'
	export default {
		name: 'MasterPassword' ,
		// props: {
		// 	master_password: String
		// } ,
		mounted() {
			this.$nextTick( () => {{
				console.log( "MasterPassword Component Was Mounted ???" );
				// https://www.smashingmagazine.com/2020/01/data-components-vue-js/
				//this.$bvModal.show( "password_input" );
			}});

		} ,
		methods: {
			showModal() {
				this.$root.$emit( 'bv::show::modal' , 'password_input' , '#btnShow' )
			} ,
			hideModal() {
				this.$root.$emit( 'bv::hide::modal' , 'password_input' , '#btnShow' )
			} ,
			toggleModal() {
				this.$root.$emit( 'bv::toggle::modal' , 'password_input' , '#btnToggle' )
			} ,
			onEnter() {
				// https://vuejs.org/v2/api/#v-on
				console.log( "Enter key Pressed" );
				this.$root.$emit( 'bv::hide::modal' , 'password_input' , '#btnShow' )
				allService.tryToDecryptStoredEncrypted();
			}
		} ,
		// https://vuex.vuejs.org/guide/forms.html#two-way-computed-property
		computed: {
			master_password: {
				get() {
					console.log( "MasterPassword get()" );
					return this.$store.state.personal.libsodium.private_key;
				} ,
				set( value ) {
					console.log( `MasterPassword set( ${ value } )` );
					this.$store.dispatch( "personal/updateMasterKey" , value );
					//vm.$store.dispatch( "logs/new" , decrypted )
				}
			}
		}
	};
</script>

<template>
	<!-- https://bootstrap-vue.js.org/docs/components/modal -->
	<div id="master_password_id">
		<b-container fluid>
			<b-row class="justify-content-center">
				<b-button @click="showModal">Enter Password</b-button>
			</b-row>
		</b-container>

		<b-modal id="password_input" title="Input the Master Password">
			<b-container fluid>
<!-- 				<b-row>
					<p>{{ master_password }}</p>
				</b-row> -->
				<b-row>
					<!-- <input v-model="master_password"> -->
					<b-form-input @keyup.enter="onEnter" v-model="master_password" placeholder="Enter Master Password">
					</b-form-input>
				</b-row>
			</b-container>
			<template v-slot:modal-footer>
				<b-button variant="primary" class="float-right" @click="onEnter" >
					Confirm
				</b-button>
			</template>
		</b-modal>
	</div>
</template>