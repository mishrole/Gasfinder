'use strict';

const printData = (stations) => {
	const dataContainer = $('<div class="data-container"></div>');
	const dataName = $('<p class="data-name"><b>'+stations.name+'</p></b>');
	const dataAddress = $('<p class="data-address">'+stations.address+'</p>');
	const dataDistrict = $('<p class="data-district">'+stations.district+'</p>');

	dataContainer.append(dataName);
	dataContainer.append(dataAddress);
	dataContainer.append(dataDistrict);

	return dataContainer;
}

const filterByDistrict = (stations,query) => {

	const showFilter =  $('<div class="show-filter container"></div>');

	state.stations.forEach((stations) => {
		showFilter.append(printData(stations));


	});

	return showFilter;

	/*

	//console.log(state.stations);

	for(var i = 0; i < data.length; i++){
		/*
		if(state.stations[i].district == 'San Isidro'){
			console.log(state.stations[i].name + "\n" + state.stations[i].address + "\n" + state.stations[i].products);
		}
		
		for(var j = 0; j < state.stations.length; j++){
			if(state.stations[i].products[j] == 97){
				console.log(state.stations[i].name + "\n" + state.stations[i].address + "\n" + state.stations[i].products);
			}
		}
		
		for(var j = 0; j < data.length; j++){
			if(data[i].products[j] == 97){

				console.log(data[i].name + "\n" + data[i].address + "\n" + data[i].district);

			}
		}
		
	};
*/
}
