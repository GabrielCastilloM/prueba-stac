const express = require("express");

//importamos archivos de routes
const productoRouter = require('./producto.router')


function routerApi(app) {
  //creamos un patch global para todos los enpoints
  const router = express.Router();
  app.use('/api/v1', router)
  //enpoints principales

  router.use('/productos', productoRouter)
}

module.exports = routerApi;
