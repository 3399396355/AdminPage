<script>
	export default {
		name: 'Deltas',
		components: {
		} ,
		mounted() {
		} ,
		computed: {
			deltas: {
				get() {
					return this.$store.state.delta.downloaded.decrypted;
				}
			}
		}
	}
</script>

<template>
	<div class="home">
		<p>All the Currntly Downloaded Deltas</p>
		<b-container fluid>
			<b-row class="justify-content-center">
				<div v-for="delta in deltas.slice().reverse()">
  					<!-- {{ frame.message }} -->
  					<b-img :src=delta.image_b64 fluid alt="Responsive image"></b-img>
				</div>
			</b-row>
		</b-container>
	</div>
</template>