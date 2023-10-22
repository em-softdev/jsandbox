function genera() {

    // Generar números aleatorios entre 0 y 9
    var numero1 = (Math.random()*9).toFixed();
    var numero2 = (Math.random()*9).toFixed();
    
    // Guardaremos cada número aleatorio creado en sendos <p> (como nodos hijos de texto) que crearemos
    // y estos párrafos serán hijos de cada una de las cajas superiores <div>

    // Obtenemos los nodos padre de los párrafos (div) (ver DOMInspector antes y después de generarlos)
    var primero = document.getElementById("primero");
    var segundo = document.getElementById("segundo");

    // Obtenemos cada uno de los párrafos si ya existen
    var parrafoAnterior1 = primero.firstChild;
    var parrafoAnterior2 = segundo.firstChild;

    // Creamos el nuevo párrafo con el contenido del primer número aleatorio
    var parrafo1 = document.createElement("p");
    var texto1 = document.createTextNode(numero1);
    parrafo1.appendChild(texto1);
    // Si ya existía un párrafo (hijo del div), sustituirlo por el creado. Si no, añadirlo como hijo del primer div:
    // la primera vez genera parrafo1 con el número aleatorio 1 dentro y lo añade al primer div: primero
    // el resto de las veces reemplaza el párrafo que existía parrafoAnterior1 por el nuevo generado que contendrá un nuevo número aleatorio 1
    if (parrafoAnterior1 !== null) {
        //var parrafoAnterior1 = primero.firstChild;
      primero.replaceChild(parrafo1, parrafoAnterior1);
    }
    else {
      primero.appendChild(parrafo1);
    }

    // Crear el otro nuevo párrafo con el contenido del segundo número aleatorio
    var parrafo2 = document.createElement("p");
    var texto2 = document.createTextNode(numero2);
    parrafo2.appendChild(texto2);
    // Si ya existía un párrafo (hijo del div), sustituirlo por el creado. Si no, añadirlo como hijo del segundo div:
    // la primera vez genera parrafo2 con el número aleatorio 2 dentro y lo añade al segundo div: segundo
    // el resto de las veces reemplaza el párrafo que existía parrafoAnterior2 por el nuevo generado que contendrá un nuevo número aleatorio 2
    if(parrafoAnterior2 !== null) {
      segundo.replaceChild(parrafo2, parrafoAnterior2);
    }
    else {
      segundo.appendChild(parrafo2);
    
    }
 }

 function compara() {

    // Obtenemos los nodos padre de los párrafos
    var primero = document.getElementById("primero");
    var segundo = document.getElementById("segundo");

    // Obtenemos los párrafos (existen varios métodos...), hijos de los div anteriores
    //var parrafo1 = primero.getElementsByTagName("p")[0];
    var parrafo1 = document.getElementById("primero").childNodes[0];
    var parrafo2 = segundo.firstChild;

    // Obtenemos los números a través del nodo hijo de tipo Text de cada nodo de tipo Element de los parrafos
    var numero1 = parseInt(parrafo1.firstChild.nodeValue);
    var numero2 = parseInt(parrafo2.firstChild.nodeValue);

    // Determinamos cual de los dos es mayor y elegimos el párrafo correspondiente
    var parrafoMayor = (numero1 > numero2)? parrafo1 : parrafo2;

    // Obtenemos el nodo padre del div resultado
    var resultado = document.getElementById("resultado");

    // Obtenemos su hijo si ya existe,
    var parrafoAnterior = resultado.firstChild;
    // Si ya existía un párrafo de resultado anterior, sustituirlo. Si no, añadirlo
    if(parrafoAnterior !== null) {
        resultado.replaceChild(parrafoMayor, parrafoAnterior);
      // reemplaza parrafoAnterior por parrafoMayor
    }
    else {
      resultado.appendChild(parrafoMayor);
    }
 
 }