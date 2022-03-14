function bisextile(year){
	//3 conditions nécessaire pour trouver une année bisextile
	if(((0 == year % 4) && (0 != year % 100)) || (0 == year % 400)){
		console.log(year + ' est bisextile')
	}
	else{
		console.log(year + " n'est pas bisextile")
	}
}

//input de l'année
const year = prompt("Entrez une année")

bisextile(year)