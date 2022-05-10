const boom = require('@hapi/boom');

class ProductosService {
  constructor() {
    this.productos = [
      {
        id: 1,
        nombre: "silla",
        precio: "2000",
        categoriaId: "1"
      },
      {
        id: 2,
        nombre: "mesa",
        precio: "5000",
        categoriaId: "1"
      },
      {
        id: 3,
        nombre: "limpido",
        precio: "1200",
        categoriaId: "2"
      },
      {
        id: 4,
        nombre: "detergente",
        precio: "2800",
        categoriaId: "2"
      },
    ];
  }
  async create(data) {
    this.productos.push(data);
    return this.productos;
  }


  async find() {
    return this.productos;
  }

  async findOne(id) {
    const producto = this.productos.find(item => item.id == id)
    if (!producto) {
      throw boom.notFound('product not found')
    }
    return producto;
  }

  async update(id, changes) {
    const index = this.productos.findIndex(item => item.id == id) //findIndex para encontrar la posicion del objecto en el array
    if (index === -1) {
      throw ('product not found22222')
    }
    const producto = this.productos[index] // el porducto lo sacamos de la posicion deseada
    this.productos[index] = {
      ...producto, // para mantener los datos que no quiero  cambiar
      ...changes  // con esto aplico solo los nuevos cambios enviados
    };//en la posicion del objeto aplique esos cambios
    return this.productos[index]
  }

  async delete(id) {
    const index = this.productos.findIndex(item => item.id == id)
    if (index === -1) {
      throw ('product not found')

    }
    this.productos.splice(index, 1);//el uno es para decir quiero eliminar un elemento
    return { id }
  }
}

module.exports = ProductosService;
