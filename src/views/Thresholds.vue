<script>
	export default {
		name: 'Thresholds',
		components: {
		} ,
		mounted() {
		} ,
		computed: {
			thresholds: {
				get() {
					return this.$store.state.threshold.downloaded.decrypted;
				}
			}
		}
	}
</script>

<template>
	<div class="home">
		<p>All the Currntly Downloaded Thresholds</p>
		<b-container fluid>
			<b-row class="justify-content-center">
				<div v-for="threshold in thresholds.slice().reverse()">
  					<!-- {{ frame.message }} -->
  					<b-img :src=threshold.image_b64 fluid alt="Responsive image"></b-img>
				</div>
			</b-row>
		</b-container>
	</div>
</template>