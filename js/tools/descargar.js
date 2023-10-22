//Vamos a preparar los zip para descargarlos
//1º - cogemos los 3 ficheros
//2º - construimos el index
//3º - modificamos las rutas de las imágenes
//4º - cogemos y tratamos las imágenes
//5º - zipeamos y descargamos

function descarga_ejercicio() {
    //1º - cogemos los 3 ficheros
    var javascript = obtener_fichero("script.js");
    var documento = obtener_fichero("doc.html");
    var estilos = obtener_fichero("style.css");

    //2º - construimos el index
    var index = '<!doctype html>' +
        '<html lang="es">' +
        '<head>' +
        '	<title>JSandBox: JavierR</title>' +
        '	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' +
        '	<meta charset="utf-8" />' +
        '	<link rel="stylesheet" href="style.css">' +
        '</head>' +
        '<body>';
    index = index + documento;
    index = index + '</body></html>';

    //3º - modificamos las rutas de las imágenes
    //TODO

    //4º - cogemos y tratamos las imágenes
    //TODO

    //5º - zipeamos y descargamos

    var zip = new JSZip();
    zip.file("index.html", index);
    zip.file("script.js", javascript);
    zip.file("style.css", estilos);
    /*var img = zip.folder("img");
    img.file("smile.gif", imgData, { base64: true });*/
    zip.generateAsync({ type: "blob" })
        .then(function (content) {
            // see filesaver.js
            saveAs(content, "UD" + CONFIG.ud + "EJ" + CONFIG.ex + ".zip");
        });
}

function obtener_fichero(fichero) {
    var datos = '';
    $.ajax({
        url: 'examples/ud' + CONFIG.ud + '/ex' + CONFIG.ex + '/' + fichero,
        type: 'GET',
        async: false,
        success: (respuesta) => {
            datos = respuesta;
        }
    });
    return datos;

}