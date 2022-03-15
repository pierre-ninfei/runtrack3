document.addEventListener('DOMContentLoaded', (event)=>{
	document.addEventListener('keypress', (event)=>{
		var name = event.key
		var keylogger = document.getElementById('keylogger')
		keylogger.innerHTML = keylogger.textContent + name
	})
})