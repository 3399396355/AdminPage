import vm from '../main.js'

export const deltaService = {
	getTest ,
};

function getTest() {
	vm.$socket.sendObj({
		"type": "redis_get_lrange" ,
		"starting_position": 0 ,
		"ending_position": -1 ,
		"list_key": "sleep.images.deltas.2020.03.25" ,
		"channel": "delta"
	})
}

function getToday() {

}