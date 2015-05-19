function RPNCalculator(){
	this.val = [];
};

RPNCalculator.prototype.value = function(){

	return this.val[this.val.length-1];
}
RPNCalculator.prototype.push = function(n){
	this.val.push(n);
}

RPNCalculator.prototype.plus = function(){
	if(typeof this.val[this.val.length-1]==='undefined'){
		throw 'rpnCalculator is empty'
	}
	this.val.push(this.val.pop(this.val.length-1) + this.val.pop(this.val.length-1));
}

RPNCalculator.prototype.minus = function(){
	if(typeof this.val[this.val.length-1]==='undefined'){
		throw 'rpnCalculator is empty'
	}
	var num1 = this.val.pop(this.val.length-1);
	var num2 = this.val.pop(this.val.length-1);
	var result = num2 - num1;
	this.val.push(result);
}

RPNCalculator.prototype.divide = function(){
	if(typeof this.val[this.val.length-1]==='undefined'){
		throw 'rpnCalculator is empty'
	};
	var num1 = this.val.pop(this.val.length-1);
	var num2 = this.val.pop(this.val.length-1);
	var result = num2 / num1;
	this.val.push(result);
}

RPNCalculator.prototype.times = function(){
	if(typeof this.val[this.val.length-1]==='undefined'){
		throw 'rpnCalculator is empty'
	};
	var num1 = this.val.pop(this.val.length-1);
	var num2 = this.val.pop(this.val.length-1);
	var result = num2 * num1;
	this.val.push(result);
}