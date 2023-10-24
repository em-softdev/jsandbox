let veces=0;
let num_color=1;
let activa_color=window.setInterval("Emitir()",1000);
function Emitir(){
  if (num_color==1) {
    document.body.style.backgroundColor="yellow"; num_color=2;
  }else{
    document.body.style.backgroundColor="aqua"; num_color=1;
  }
  veces+=1; 
  if (veces >= 5){
     window.clearInterval(activa_color);alert ("Finalizó el cambio de color");
  }
} 