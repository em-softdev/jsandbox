<?php
// Generar un numero aleatorio
$numeroAleatorio = rand(0, 10);

// Simular un falso retardo por la red y el servidor (entre 0 y 2 segundos)
sleep($numeroAleatorio % 2);

// El script devuelve alatoriamente 'sí' o 'no' para que la aplicacion
// cliente pueda comprobar los dos casos
echo($numeroAleatorio % 2 == 0)? "si" : "no";
?>