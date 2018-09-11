function next() {
	var slider = document.getElementById('js-image');
	num++;
	if(num >= images.length) {
		num = 0;
	}
	slider.src = images[num];
}
function prev() {
	var slider = document.getElementById('js-image');
	num--;
	if(num < 0) {
		num = images.length-1;
	}
	slider.src = images[num];
}

function addText() {
	var superior = document.getElementById("js-upper-input").value;
	var inferior = document.getElementById("js-lower-input").value;
	var textoSup = document.getElementById("js-upper-text");
	var textoInf = document.getElementById("js-lower-text");
	
		textoSup.innerHTML = superior;
		textoInf.innerHTML = inferior;
}

function saveImage() {

	var meme = document.getElementById("js-meme");

	html2canvas(meme, {
		allowTaint : true,
		useCORS : true,
		backgroundColor : null
		}).then(function(canvas) {
			canvas.crossOrigin = 'anonymous';
			document.body.appendChild(canvas);
			var imageLink = document.createElement('a');
			imageLink.href = canvas.toDataURL();
			imageLink.innerHTML = "Abrir Imagem"; 
			document.body.appendChild(imageLink);
			window.open(canvas.toDataURL());
	});
}

function readURL(){
	var loadedImage = document.getElementById("js-upload-image").files[0];

	if (loadedImage !== null) {
		var reader = new FileReader();
		reader.onload = function() {
			document.getElementById('js-image').src = reader.result;
			reader.readAsDataURL(loadedImage);
		}

		document.getElementById('js-image').src = reader.result;
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
	document.getElementById("js-upload-image").addEventListener('onchange', readURL, true);
	document.getElementById("js-upper-input").addEventListener('keyup', addText, true);
	document.getElementById("js-lower-input").addEventListener('keyup', addText, true);
});