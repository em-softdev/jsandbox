//se modifica para que aparezca A,B,C,D,E,F
let numero = 45879;
let base = 16;
let hexa ="";
//sirve para cualquier base
while (numero > (base - 1)) {
    resto = numero % base;
    //al restar el numero- resto y dividirlo por la base tiene que dar un numero entero
    numero = (numero - resto) / base;
    switch (resto) {
        case 10:
            resto = 'A'
            break;
        case 11:
            resto = 'B'
            break;
        case 12:
            resto = 'C'
            break;
        case 13:
            resto = 'D'
            break;
        case 14:
            resto = 'E'
            break;
        case 15:
            resto = 'F'
            break;
        default:

    }
    hexa=resto+hexa;
}
//la condicion numero>(base-1) hace que salga antes de evaluar el último dígito,
//que también se muestra.
//solo para la base 16
if (base == 16) {
    switch (numero) {
        case 10:
            numero = 'A'
            break;
        case 11:
            numero = 'B'
            break;
        case 12:
            numero = 'C'
            break;
        case 13:
            numero = 'D'
            break;
        case 14:
            numero = 'E'
            break;
        case 15:
            numero = 'F'
            break;
        default:
    }
}
hexa=numero+hexa;
console.log(hexa);