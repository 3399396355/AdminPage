<script>
	export default {
		name: 'Log',
		components: {
		} ,
		mounted() {
		} ,
		computed: {
			logs: {
				get() {
					return this.$store.state.log.downloaded.decrypted;
				}
			}
		} ,
		watch: {
			// frames: ( new_value , old_value ) => {
			// 	console.log( new_value );
			// }
		}
	}
</script>
<style>
/*https://stackoverflow.com/a/57931476*/
tr:nth-of-type( odd ) {
	background-color: #03A678;
}
tr:nth-of-type( even ) {
	background-color: #1496BB;
}
</style>

<template>
	<div class="home">
		<b-container fluid>
			<b-row class="justify-content-center">
				<b-table-simple>
					<b-thead>
						<p>All the Currntly Downloaded Logs</p>
					</b-thead>
					<b-tbody>
						<b-th>
							<b-row>
								<b-col>Date</b-col>
								<b-col>Time</b-col>
								<b-col>Comment</b-col>
								<b-col>Check</b-col>
								<b-col>Type</b-col>
							</b-row>
						</b-th>
						<b-tr v-for="log in logs.slice().reverse()">
							<b-td>
								<b-row>
									<b-col>
  										{{ log.message.split( " @@ " )[ 0 ] }}
									</b-col>
									<b-col>
  										{{ log.message.split( " @@ " )[ 1 ].split( "===" )[ 0 ] }}
									</b-col>
									<b-col>
										{{ log.message.split( "===" )[ 2 ] }}
									</b-col>
									<b-col>
										{{ log.message.split( "===" )[ 3 ] }}
									</b-col>
									<b-col>
										{{ log.message.split( "===" )[ 4 ] }}
									</b-col>
								</b-row>
							</b-td>
						</b-tr>
					</b-tbody>
				</b-table-simple>
			</b-row>
		</b-container>
	</div>
</template>