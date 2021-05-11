function mayuscula(array) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código
  const newArray = array.filter(item => {
    return item.charAt(0) === 'a'
  })
  return newArray
}
var array = ['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo'];

console.log(mayuscula(array))
