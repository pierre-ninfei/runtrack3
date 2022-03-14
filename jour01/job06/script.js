function fizzbuzz(){
	for(x = 1; x <= 151; x++){
		if((0 == x % 3) && (0 == x % 5)){
			console.log("FizzBuzz")
		}
		else if(0 == x % 5){
			console.log("Buzz")
		}
		else if(0 == x % 3){
			console.log("Fizz")
		}
		else{
			console.log(x)
		}
	}

}

fizzbuzz()