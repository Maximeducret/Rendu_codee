window.addEventListener("load", resize);
window.addEventListener("resize", resize);

function ismobile(){ // Detecte si l'appareil est un téléphone ou non
	return( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function resize(){
	// Liste de variable
	var width = document.getElementById("inside_container_right").offsetWidth;
	var widthTotal = document.getElementById("container_2_main_box").offsetWidth;
	var widthPadding = (widthTotal - 2*width)/2;
 	var heightWindow = window.innerHeight;
	var heightContainer = document.getElementById("container").offsetHeight;
	var margin = (heightWindow - heightContainer)/ 2;
	//

	var widthWindow = window.innerWidth;
	console.log(widthWindow); // Log

	switch(true) {
	case ismobile(): 
		document.getElementById("inside_text_left").style.paddingRight = '0px';
		document.getElementById("body").style.marginTop = '0px';
		document.getElementById("inside_text_mid").style.paddingRight = '0px';
		document.getElementById("inside_text_left").style.width = 'auto';
		document.getElementById("inside_text_mid").style.width = 'auto';
		break;
	case widthWindow > 1200 :
		document.getElementById("inside_text_left").style.width = width +'px';
		document.getElementById("inside_text_left").style.paddingRight = widthPadding +'px';
		document.getElementById("inside_text_mid").style.width = width +'px';
		document.getElementById("inside_text_mid").style.paddingRight = widthPadding +'px';
		document.getElementById("body").style.marginTop = margin +'px';
		break;
	default:
		document.getElementById("inside_text_left").style.paddingRight = '0px';
		document.getElementById("body").style.marginTop = '0px';
		document.getElementById("inside_text_mid").style.paddingRight = '0px';
		document.getElementById("inside_text_left").style.width = 'auto';
		document.getElementById("inside_text_mid").style.width = 'auto';
		break;

	}
}