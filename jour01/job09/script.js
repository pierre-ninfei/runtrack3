function tri(numbers, order){
	var done = false;


  	while(!done){
	    done = true;
	    if(order == "desc"){
	    	for(var i = 1; i < numbers.length; i++){
		    	if(numbers[i - 1] < numbers[i]){
			        done = false;
			        var tmp = numbers[i - 1];
			        numbers[i - 1] = numbers[i];
			        numbers[i] = tmp;
		    	}
	    	}
	    }
	    else if(order == "asc"){
		    for(var i = 1; i < numbers.length; i++){
		    	if(numbers[i - 1] > numbers[i]){
			        done = false;
			        var tmp = numbers[i - 1];
			        numbers[i - 1] = numbers[i];
			        numbers[i] = tmp;
		    	}
	    	}
	    }
	    else{
	    	console.log("Veuillez entrer asc ou desc uniquement")
	    }
  	}
  	for( x = 0; x < numbers.length; x++){
  		console.log(numbers[x])
  	}
}

var order = prompt("Entrez une valeur (SOIT asc, SOIT desc UNIQUEMENT")
var numbers = [1, 10, 11, 7, 21, 31, 37, 80, 7, 41]
tri(numbers, order)
console.log(order)