import vm from '../main.js'


function getToday() {
	const suffix = GenericUtils.get_today_eastern_time_key_suffix();
	vm.$socket.sendObj({
		"type": "redis_get_lrange" ,
		"starting_position": 0 ,
		"ending_position": -1 ,
		"list_key": `sleep.raspi.node.errors.${suffix}` ,
		"channel": "events"
	});
}

export const eventService = {
    getToday ,
};