const express = require("express");

const productoRouter = require('./producto.router')
const clieteRouter = require('./cliente.router')

function routerApi(app) {

  const router = express.Router();
  app.use('/api/v1', router)


  router.use('/productos', productoRouter)
  router.use('/clientes', clieteRouter)
}

module.exports = routerApi;
