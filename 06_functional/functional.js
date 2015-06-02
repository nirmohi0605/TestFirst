// 06_Functional 

function map (array, doubler){

	for(i = 0; i < array.length; i++){

		array[i] = doubler (array[i]);
	};

	return array;

}

var doubler = function (num){
	return num * 2;
}

function filter (array, filterFunc){
		var res = [];

	for(i = 0; i < array.length; i++){
		if (filterFunc(array[i]) === true)
			res.push(array[i]);
	}
	return res;

}


function contains (collection, value){

	if(typeof collection === 'object'){
		for( var key in collection){
			if(collection[key] === value){
				return true;
			}
		}
		return false;
} else{
	for( var i = 0; i < collection.length; i++){
		if(collection[i] === value){
			return true;
		}
	}
	return false;	
}

}
function countWords(string){
	
	return string.split(" ").length;
}


function reduce (array, startVal, reducerFunc){

	var currentVal = startVal;

	for(var i = 0; i < array.length; i++){
		currentVal = reducerFunc(currentVal, array[i]);
	}

	return currentVal;

}

var countWordsInReduce = function (a, b){
	return a + countWords(b);
}

var sum = function(arr){
	return reduce(arr, 0 , function (a,b){
	return a + b;
});
};

var every = function(array, everyFunc){
	if (array.length === 0)
		return true;
	for(i = 0; i < array.length; i++){
		var res = everyFunc(array[i]);
		if(res === false){
			return false;}
	}
	return true;
}


var any = function (array, anyFunc){
	if(array.length === 0)
		return false;
	for(i = 0; i < array.length; i++){
		var res = anyFunc(array[i]);
		if( res === true)
			return true;
	}

	return false;
}





