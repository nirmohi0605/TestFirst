var factorialIterative = function(num){

	var res = 1;
	
	for (var i = num ; i > 0; i--) {
		res *= i;
	}

	return res;
}

var factorial = function(num){

	if(num === 0){
		return 1;
	}

	else 

		return (num * factorial(num - 1));
}

		

var fib = function(num){

	if( num === 0 || num === 1)
		return 1;
	else {
		return fib(num - 1) + fib(num - 2);
	}
}



function type(obj){
    return Object.prototype.toString.call(obj).slice(8,-1);
}




function stringify(input){

if(type(input) === 'Undefined'){
	return "undefined";

}

if(type(input) === 'Null'){
	return "null";
}

if(type(input) === 'Boolean'){
	return "true";
}

if(type(input) === 'Number'){
	return input + "";
}

if(type(input) === 'String'){
	return '"' + input + '"';
}

if(type(input) === 'Function'){

	return "function () {}";

}

if(	type(input) === 'Array'){
var new_array = [];
 	for (var i = 0; i < input.length; i++) { 
 		new_array.push(stringify(input[i]));
 	}
 	var result = "[" + new_array.join(",") + "]";



return result;

}

if(type(input) == "Object"){
	var keys = Object.keys(input);
	var str = "";
	for (var i = 0; i < keys.length-1; i++) {
            str += '"' + keys[i]+'": '+ stringify(input[keys[i]]) + ","
	}
	str += '"' + keys[keys.length-1]+'": '+ stringify(input[keys[keys.length-1]])
	return "{"+ str +"}";
	}



}
















