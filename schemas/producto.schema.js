const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(3).max(30).messages({
  'string.base': `" nombre "debe ser un tipo de 'texto'`,
  'string.empty': `"nombre "no puede ser un campo vacío`,
  'string.min': `"nombre" debe tener una longitud mínima de {#limit}`,
  'string.max': `"nombre" debe tener una longitud máxima de {#limit}`
});
const precio = Joi.number().integer().min(10);
const categoriaId = Joi.number().integer();

const createProductoSchema = Joi.object({
  nombre: nombre.required(),
  precio: precio.required(),
  categoriaId: categoriaId.required()
})

const UpdateProductoSchema = Joi.object({
  nombre: nombre,
  precio: precio,
  categoriaId
})

const getProductoSchema = Joi.object({
  id: id.required(),
})

module.exports = {createProductoSchema, UpdateProductoSchema, getProductoSchema}
