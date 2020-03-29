<script>
	export default {
		name: 'MasterPassword' ,
		props: {
			master_password: String
		}
	}
	//this.data.personal.libsodium.private_key
</script>

<template>
	<div id="master_password">
		<p>Input the Master Password to Decrypt WebSocket Messages</p>
		<p>{{ master_password }}</p>
		<input v-model="master_password">
	</div>
</template>