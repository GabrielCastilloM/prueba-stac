const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(3).max(30);
const apellido = Joi.string().min(3).max(30);
const telefono = Joi.number().integer().min(10);
const usuario_id = Joi.number().integer();

const createClienteSchema = Joi.object({
  nombre: nombre.required(),
  apellido: apellido.required(),
  telefono: telefono.required(),
  usuarioId: usuario_id.required()
})

const updateClienteSchema = Joi.object({
  nombre: nombre,
  apellido: apellido,
  telefono: telefono,
  usuario_id
})

const getClienteSchema = Joi.object({
  id: id.required(),
})

module.exports = {createClienteSchema, updateClienteSchema, getClienteSchema}
