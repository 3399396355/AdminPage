<script>
	export default {
		name: 'Frames',
		components: {
		} ,
		mounted() {
		} ,
		computed: {
			frames: {
				get() {
					return this.$store.state.frame.downloaded.decrypted;
				}
			}
		} ,
		watch: {
			frames: ( new_value , old_value ) => {
				console.log( new_value );
			}
		}
	}
</script>

<template>
	<div class="home">
		<p>All the Currntly Downloaded Frames</p>
		<b-container fluid>
			<b-row class="justify-content-center">
				<div v-for="frame in frames.slice().reverse()">
  					<!-- {{ frame.message }} -->
  					<b-img :src=frame.image_b64 fluid alt="Responsive image"></b-img>
  					<!-- <img :src=frame.image_b64 alt="Responsive image"></img> -->
				</div>
			</b-row>
		</b-container>
	</div>
</template>