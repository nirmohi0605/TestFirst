// Functions.js

var concat_string = function (){
	var myArr = Array.prototype.slice.call(arguments);
	myArr = myArr.join("");

	return myArr;
}

var yourFunctionRunner = function(){
	var newArr = Array.prototype.slice.call(arguments);
		var str = [];
	for (var i = 0; i < newArr.length; i++){
		str.push(newArr[i]());

	}

	str = str.join("");	

	return str;
}


var makeAdder = function (A){


	var myFunc = function(n){

		return (n + A);
	}

	return myFunc;
}

function once(func){
    var param = 1;
    return function(){
        if(param === 1){
         
           func();   
        }
        param++;
    };
}

function createObjectWithTwoClosures(){
    var res = 0;
    var object = {};
       object.oneIncrementer = function(){
           res += 1;
       };
       object.tensIncrementer = function(){
           res += 10;
       };
       object.getValue=  function(){
           return res;
       };
   
   return object;


}