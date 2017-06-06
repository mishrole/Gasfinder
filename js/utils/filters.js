'use strict';

const filterByDistrict = (stations,query) => {


	//console.log(state.stations);

	for(var i = 0; i < state.stations.length; i++){
		/*
		if(state.stations[i].district == 'San Isidro'){
			console.log(state.stations[i].name + "\n" + state.stations[i].address + "\n" + state.stations[i].products);
		}
		
		for(var j = 0; j < state.stations.length; j++){
			if(state.stations[i].products[j] == 97){
				console.log(state.stations[i].name + "\n" + state.stations[i].address + "\n" + state.stations[i].products);
			}
		}
		*/
		for(var j = 0; j < state.stations.length; j++){
			if(state.stations[i].products[j] == 97){
				console.log(state.stations[i].name + "\n" + state.stations[i].address + "\n" + state.stations[i].district);
			}
		}
		
	};

}
