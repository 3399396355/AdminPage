<script>
import MasterPassword from '@/components/MasterPassword.vue'

export default {
	computed: {
		masterPassword() {
			//return this.$data.personal.libsodium.private_key
			return "not here"
		}
	} ,
	name: 'Test',
	components: {
		MasterPassword
	}
}
</script>

<template>
	<div class="home">
		<p>Computed Master Password === {{ masterPassword }}</p>
		<MasterPassword/>
	</div>
</template>