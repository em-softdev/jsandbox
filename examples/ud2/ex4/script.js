let base = 7;
let i = 0;
let j = 0;
let fila = "";
//mitad de la piramide
let mitad = base;
//tamanyo de cada fila
let tope=base*2+1;
for (i = 0; i <= base; i++) {
    fila = "";
    //para cada fila se tienen que imprimir tope caracteres
    //o espacios o el valor de i
    for (j = 0; j < tope; j++) {
        /*se imprime desde la mitad-i hasta la mitad+1
        por ejemplo:
        base=3;
        i=0;
        se imprime desde mitad 3 -0 hasta mitad 3+0, por tanto en la posicion 3 se imprime 0
        i=1
        inicio=3-1=2, fin =3+1=4, imprime desde la posicion 2 hasta la 4
        i=2
        inicio=3-2=1, fin =3+2=5, imprime desde la posicion 1 hasta la 5
        ....
        */
        if (j >= (mitad - i) && j <= (mitad + i))
            fila = fila + i;
        else
            fila = fila + "_";
    }
    console.log(fila);
}