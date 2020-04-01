function get_today_eastern_time_key_suffix( day_offset=0 ) {
	let now = new Date( new Date().toLocaleString( "en-US" , { timeZone: "America/New_York" } ) );
	now.setDate( now.getDate() + day_offset );
	const now_hours = now.getHours();
	const now_minutes = now.getMinutes();
	const dd = String( now.getDate() ).padStart( 2 , '0' );
	const mm = String( now.getMonth() + 1 ).padStart( 2 , '0' );
	const yyyy = now.getFullYear();
	const hours = String( now.getHours() ).padStart( 2 , '0' );
	const minutes = String( now.getMinutes() ).padStart( 2 , '0' );
	const seconds = String( now.getSeconds() ).padStart( 2 , '0' );
	const key_suffix = `${ yyyy }.${ mm }.${ dd }`;
	return key_suffix;
}

export const GenericUtils = {
	get_today_eastern_time_key_suffix
};