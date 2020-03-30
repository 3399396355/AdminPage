<script>
	export default {
		name: 'MasterPassword' ,
		// props: {
		// 	master_password: String
		// } ,
		mounted() {
			console.log( "MasterPassword Component Was Mounted ???" );
			// https://www.smashingmagazine.com/2020/01/data-components-vue-js/
			console.log( this.$store.state.logs.downloaded );
			this.$bvModal.show("password_input");
		} ,
		// https://vuex.vuejs.org/guide/forms.html#two-way-computed-property
		computed: {
			master_password: {
				get() {
					console.log( "MasterPassword get()" );
				} ,
				set( value ) {
					console.log( `MasterPassword set( ${ value } )` );
					this.$store.dispatch( "personal/updateMasterKey" , value );
					//vm.$store.dispatch( "logs/new" , decrypted )
				}
			}
		}
	}
</script>

<template>
	<!-- https://bootstrap-vue.js.org/docs/components/modal -->
	<div id="master_password">
		<b-modal id="password_input" title="Input the Master Password">
			<b-container fluid>
				<b-row>
					<p>{{ master_password }}</p>
				</b-row>
				<b-row>
					<!-- <input v-model="master_password"> -->
					<b-form-input v-model="master_password" placeholder="Enter Master Password"></b-form-input>
				</b-row>
			</b-container>
		</b-modal>
	</div>
</template>