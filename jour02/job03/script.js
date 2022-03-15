function addone(){
	document.addEventListener('DOMContentLoaded', (event)=>{
		var number = 0
		var compteur = document.getElementById('compteur')
		var button = document.getElementById('button')

		document.addEventListener('click', function(){
			number++
			compteur.innerHTML = number
		})
		
	})
}

addone()