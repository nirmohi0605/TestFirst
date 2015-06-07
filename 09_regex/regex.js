function findACount(str){

	str = str.replace(/[^aA]/g,"");
	return str.length;
}

function areaCodeFinder(num){

	num = num.replace(/[^\d]/g,'').substr(0,3);

	return parseInt(num);
}


function IDcheck(string){

	var res = string.match(/ID=\d{3}/g);
		if(res === null)
			return false;
		else return true;
}

function adjustUrlParameter(url, param){

	
		if(IDcheck(url) === false && IDcheck(param) === true ){
			
			return url + "?" + param; 
		}

		else if(IDcheck(param) === false)
			return url + "&" + param;

			else 

			url = url.replace(/\?ID=\d{3}/g,"");

			return url + "?" + param; 

}

function countDigits(number){

	var digits = number.toString().length;

	return digits;

}


function stringPlusPlus(string){

	var numberPattern = /\d+/g; 
	var patt = /[1-9][0-9]*/g
	var alphaPattern = /[a-zA-Z]/g;

	if (string.match(alphaPattern) === null){
		var temp = parseInt(string) + 1;
		return temp.toString();

	}
		


	if (string.match(numberPattern) === null)

		return string + "1";	

	else{
		var array = string.match(patt);

		if(array !== null){
		var num = parseInt(array[0]) + 1;

			if(countDigits(num) > countDigits(parseInt(array[0]))){
				string = string.replace(/0[1-9][0-9]*/g, "");
				return string + num;


			}
			else{
			string = string.replace(/[1-9][0-9]*/g, "");
			return string + num;
			}		
		
		}
		

		else{
			string = string.substring(0, string.length - 1);
			return string + "1";
		}
		
		}
}




