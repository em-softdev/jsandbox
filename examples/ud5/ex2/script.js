imagen1=new Image;
imagen1.src="ojo.jpg";
imagen2=new Image;
imagen2.src="ojo2.jpg";
var i=1;
function cambio_icono() {                       
   if (i == 1)
      {
      document.images['icono'].src=imagen2.src;
      i=2;
      }
   else 
      {
      document.images['icono'].src=imagen1.src;
      i=1;
      }
}