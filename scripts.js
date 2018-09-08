function next() {
	var slider = document.getElementById('imagem');
	num++;
	if(num >= images.length) {
		num = 0;
	}
	slider.src = images[num];
}
function prev() {
	var slider = document.getElementById('imagem');
	num--;
	if(num < 0) {
		num = images.length-1;
	}
	slider.src = images[num];
}

function addText() {
	var superior = document.getElementById("input-superior").value;
	var inferior = document.getElementById("input-inferior").value;
	var textoSup = document.getElementById("texto-superior");
	var textoInf = document.getElementById("texto-inferior");
	
		textoSup.innerHTML = superior;
		textoInf.innerHTML = inferior;
}

function saveImage() {
//	meme.style.width = document.getElementById('imagem').width.toString() + "px";
//	meme.style.height = document.getElementById('imagem').width.toString() + "px";
	html2canvas(meme, {
		allowTaint : true,
		useCORS : true,
		backgroundColor : null
		}).then(function(canvas) {
		document.body.appendChild(canvas);
	});
}

function readURL(){

	var loadedImage = document.getElementById("carregarImagem").files[0];

	if (loadedImage !== null) {
		var reader = new FileReader();
		reader.onload = function() {
			document.getElementById('imagem').src = reader.result;
			reader.readAsDataURL(loadedImage);
		}

		document.getElementById('imagem').src = reader.result;
		reader.readAsDataURL(loadedImage);
	} else {
		return;
	}
}

var images = [
	'https://www.sololearn.com/uploads/slider/1.jpg', 
	'https://www.sololearn.com/uploads/slider/2.jpg', 
	'https://www.sololearn.com/uploads/slider/3.jpg'
];

var num = 0;


window.addEventListener('DOMContentLoaded', function() {
	images.crossOrigin = "Anonymous";
	document.getElementById("carregarImagem").addEventListener('onchange', readURL, true);
	var meme = document.getElementById("meme");
});