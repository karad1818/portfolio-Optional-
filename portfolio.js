var header = document.querySelector(".header");
var offset = header.offsetTop;
document.addEventListener("scroll",function(){
	if(window.pageYOffset>offset){
		header.classList.add("addscroll");
	}else{
		header.classList.remove("addscroll");
	}
});

