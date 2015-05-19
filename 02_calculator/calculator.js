function createCalculator () {

	
	var calculator = {};
	
	calculator.res = 0;
	
	calculator.value = function() {
		return this.res;
		
	}

	calculator.add = function(num) {
		 this.res += num;
		return this.res;
	}

	calculator.subtract = function(num) {
		 this.res -= num;
		return this.res;
	}



	
    return calculator;
}
 

