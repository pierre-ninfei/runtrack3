function sommenombrespremiers(num1, num2){
	var isnum1prime = true
	var isnum2prime = true

	//loop pour num1
	for(let xi = 2; xi < num1; xi++){
		if(num1 % xi == 0){
			isnum1prime = false
			console.log("le nombre n'est pas premier")
			break
		}
	}

	//loop for num2
	for(let xi = 2; xi < num2; xi++){
		if(num2 % xi == 0){
			isnum2prime = false
			console.log("le nombre n'est pas premier")
			break
		}
	}

	//si les deux nombres sont premiers, on additionne
	if(isnum1prime && isnum2prime){
		const z = num1 + num2
		console.log(z)
	}
	else{
		return "false"
	}
}

const x = parseInt(prompt("Entrez un nombre plus grand que 1"))
const y = parseInt(prompt("Entrez un nombre plus grand que 1"))

sommenombrespremiers(x, y)