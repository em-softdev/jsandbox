function consultar(){
   let objProvincias = document.getElementById("provincias");
   let texto = objProvincias.options[objProvincias.selectedIndex].text;
   let valor = objProvincias.options[objProvincias.selectedIndex].value;
   alert("Datos de la opción seleccionada:\n\nTexto: "+texto+"\nValor: "+valor);
}