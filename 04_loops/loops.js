function repeat(word, count){
	var res = "";
	for(count; count>0; count--){
		res += word;
	}
	return res;
}

function sum(array){
	var sum = 0;
	for(var i = 0; i < array.length; i++){
		sum += array [i];
	}
	return sum;
}

function gridGenerator(size){
	var grid = "";
		for(var i = 0; i < size; i++){
			for(var j = 0; j < size; j++){
				if((i+j) % 2 === 0){
					grid += "#";	
				} else {
				grid += " ";
			}
		}
			grid += "\n";
	}	
	return grid;
}

function largestTriplet(c){
	triArray = [0,0,0];
	function sideSq(side){
		return side * side;
	}
	for(var a = 1; a < c; a++){
		for(var b = 1; b<c; b++){
			for(var count = 0; count <= c; count++){
				if(a<b && b>=triArray[1]){
					if(sideSq(a)+ sideSq(b) === sideSq(count)){
						triArray = [a,b,count];
					}
				}
			}
		}
	}
	return triArray;
}

function join(array, delimiter){
	var string = ""
	for(var i = 0; i < array.length; i++){
		string += array[i];
		if(delimiter === undefined){
			delimiter = "";
		}
		if(i < array.length - 1){
			string += delimiter;
		}
	}
	return string;
}

function paramify(obj){
	param = [];
	for(key in obj){
		if(obj.hasOwnProperty(key)){
			param.push(key + "=" + obj[key]);
		}
	}
	param.sort();
	return join(param, "&")
}
