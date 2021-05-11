function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  const coincidencias = arreglo1.filter(item => arreglo2.includes(item))
  return coincidencias
}


let cosas = buscoInterseccion(["You", "are", "beautiful", "looking"], ["You", "are"])
console.log(cosas)