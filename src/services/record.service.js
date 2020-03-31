import vm from '../main.js'

export const recordService = {
	getTest ,
};

function getTest() {
	vm.$socket.sendObj({
		"type": "redis_get_lrange" ,
		"starting_position": 0 ,
		"ending_position": -1 ,
		"list_key": "sleep.records.2020.03.25" ,
		"channel": "records"
	})
}

function getToday() {

}