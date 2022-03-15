function showhide(){
	document.getElementById('button')
	document.addEventListener('click', function(){
		let article = document.getElementById('article')
		if(article.style.display !== 'none'){
			article.style.display = 'none'
		}
		else{
			article.style.display = 'block'
		}
	})
}

showhide()