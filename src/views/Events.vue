<script>
	export default {
		name: 'Events',
		components: {
		} ,
		mounted() {
		} ,
		computed: {
			events: {
				get() {
					return this.$store.state.event.downloaded.decrypted;
				}
			}
		} ,
		// watch: {
		// 	frames: ( new_value , old_value ) => {
		// 		console.log( new_value );
		// 	}
		// }
	}
</script>

<template>
	<div class="home">
		<p>All the Currntly Downloaded Events</p>
		<b-container fluid>
			<b-row class="justify-content-center">
				<div v-for="event in events.slice().reverse()">
  					{{ event.message }}
				</div>
			</b-row>
		</b-container>
	</div>
</template>