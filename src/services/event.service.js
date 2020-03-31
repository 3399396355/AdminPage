import vm from '../main.js'

export const eventService = {
	getTest ,
};

function getTest() {
	vm.$socket.sendObj({
		"type": "redis_get_lrange" ,
		"starting_position": 0 ,
		"ending_position": -1 ,
		"list_key": "sleep.events.2020.03.25" ,
		"channel": "events"
	})
}

function getToday() {

}