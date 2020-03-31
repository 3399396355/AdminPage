<script>
	import MasterPassword from '@/components/MasterPassword.vue'

	export default {
		name: 'Test',
		components: {
			MasterPassword
		} ,
		mounted() {
			console.log( "Test.vue Was Mounted ???" );
		} ,
		computed: {
			master_password: {
				get() {
					return this.$store.state.personal.libsodium.private_key;
				}
			}
		}
	}
</script>

<template>
	<div class="home">
		<p>Computed Master Password === {{ master_password }}</p>
		<MasterPassword/>
	</div>
</template>