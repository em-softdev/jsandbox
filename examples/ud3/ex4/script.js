function verImagen()
{ //ejemplo que muestra una galería de imagenes
	if(!document.images) return
	
	document.images.MuestraImg.src = document.FormImagenes.imagen.options[document.FormImagenes.imagen.selectedIndex].value;
}