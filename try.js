function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function() {
    return producto.precio - (producto.precio * producto.porcentajeDeDescuento)
  }
  return producto
}
const storeItem2 = {
  precio: 5,
  porcentajeDeDescuento: 0.5,
};
const storeItem = {
  precio: 80,
  porcentajeDeDescuento: 0.1,
};

console.log(agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento())
console.log(agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento())
