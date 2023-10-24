let x=10;
let i=0;
//si tipo es 0 se suman todos, si tipo 1 solo pares, si tipo 2 solo impares
let tipo=2;
let total=0;
let elementos=0;
//si tipo es 0 incremento es uno, en caso contrario es 2 para pares e impares
let incremento=1;
if(tipo>0)
    incremento=2;
//en caso de que sea impar, se empieza en uno
if(tipo==2)
    i=1;
//no es necesario inicializar la i en el for
//aunque se puede hacer 
for(;i<=x;i=i+incremento){
    console.log(i);
    total=total+i;
    elementos=elementos+1;
}
console.log("Suma un total de "+total+ " la media de "+elementos+" es"+total/elementos);