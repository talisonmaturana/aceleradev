media = (notaA, pesoA, notaB, pesoB) => {
  return ((notaA*pesoA) + (notaB*pesoB))/(pesoA + pesoB);
}

console.log(`Resultado: ${media(8,3,4,2)}`);

console.log(`Prova real ${((8*3) + (4*2))/(3 + 2)}`);

/**
 * const notas = {
 *  a: 8,
 *  b: 4
 * };
 * 
 * const pesos = {
 *  a: 3,
 *  b: 2
 * }
 * 
 * const result = (
 * (notas.a * pesos) + (notas.b + pesos.b)
 * ) / (pesos.a + pesos.b);
 * 
 * console.log(`Resultado: ${result}`);
 * 
 * 
 */

 module.exports = media();