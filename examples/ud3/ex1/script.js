tiempo=new Date();
ahoraAbs=tiempo.getTime();
//getTime devuelve los milisegundos transcurridos entre el 1/1/1970 a las 00:00:00 y la hora y fecha guardadas en objeto nombreObjeto.
antesAbs=ahoraAbs+(100*24*60*60*1000);// ahoraAbs+número de milisegundos que hay en 100 días
tiempo.setTime(antesAbs);
//setTime Establece una fecha, agregando o sustrayendo un número específico de milisegundos pasados por parámetro hasta o desde la medianoche del 1/1/1970
anyo=tiempo.getFullYear();
mes=tiempo.getMonth();
dia=tiempo.getDate();
document.write("<br>Dentro de 100 días será el "+dia+"/"+mes+"/"+anyo);