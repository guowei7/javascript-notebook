javascript:(function(){
	var style = document.querySelector("#_outline_");
	if(style){
		style.parentNode.removeChild(style);
	}else{
		style = document.createElement('style');
		style.id = "_outline";
		style.innerHTML = "*{outline:1px solid red}";
		document.body.appendChild(style);
	}
})();