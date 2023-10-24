function mayores20(elemento) {
    return elemento >= 20;
  }
  let vector = [12, 51, 8, 130, 44, 6, 23, 75, 18, 109, 5, 38, 20];
  document.write(vector);
  let filtrados = vector.filter(mayores20);
  document.write("<br>Vector filtrado: "+filtrados);