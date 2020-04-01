import vm from '../main.js'
import { GenericUtils } from '../utils/generic'

function getToday() {
	const suffix = GenericUtils.get_today_eastern_time_key_suffix();
	vm.$socket.sendObj({
		"type": "redis_get_lrange" ,
		"starting_position": 0 ,
		"ending_position": -1 ,
		"list_key": `sleep.raspi.node.errors.${suffix}` ,
		"channel": "error"
	});
	vm.$socket.sendObj({
		"type": "redis_get_lrange" ,
		"starting_position": 0 ,
		"ending_position": -1 ,
		"list_key": `sleep.raspi.python.errors.${suffix}` ,
		"channel": "error"
	});
}

export const errorService = {
	getToday ,
};