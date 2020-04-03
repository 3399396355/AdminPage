<script>
	export default {
		name: 'Records',
		components: {
		} ,
		mounted() {
		} ,
		computed: {
			records: {
				get() {
					return this.$store.state.record.downloaded.decrypted;
				}
			}
		}
	}
</script>

<template>
	<div class="home">
		<b-container fluid>
			<b-row class="justify-content-center">
				<b-table-simple>
					<b-thead>
						<p>All the Currently Downloaded Records</p>
					</b-thead>
					<b-tbody>
						<b-th>
							<b-row>
								<b-col>Date</b-col>
								<b-col>Time</b-col>
								<b-col>Message</b-col>
							</b-row>
						</b-th>
						<b-tr v-for="record in records.slice().reverse()">
							<b-td>
								<b-row>
									<b-col>
  										{{ record.message.split( " @@ " )[ 0 ] }}
									</b-col>
									<b-col>
  										{{ record.message.split( " @@ " )[ 1 ].split( "===" )[ 0 ] }}
									</b-col>
									<b-col>
										{{ record.message.split( "=== " )[ 1 ].split( " @@" )[ 0 ] }}
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