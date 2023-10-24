let numero=13;
let base=2;
let bin="";
//sirve para cualquier base
while(numero>(base-1)){
    resto=numero % base;
    //el numero binario aparece al reves
    bin=resto+bin;
    //al restar el numero- resto y dividirlo por la base tiene que dar
    //un numero entero
    numero=(numero-resto)/base; 
}
//la condicion numero>(base-1) hace que salga antes de evaluar el último dígito,
//que también se muestra.
bin=numero+bin;
console.log(bin);