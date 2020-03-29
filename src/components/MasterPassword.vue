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
	<div id="master_password">
		<p>Input the Master Password to Decrypt WebSocket Messages</p>
		<p>{{ master_password }}</p>
		<input v-model="master_password">
	</div>
</template>