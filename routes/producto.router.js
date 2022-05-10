const express = require('express');
const ProductoService = require('../services/producto.servicio');

const router = express.Router();
const service = new ProductoService();

router.get('/', async (req, res, next) => {
  try {
    const curso = await service.find();
    res.json(curso);
  } catch (error) {
    next(error);
  }
});


router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const producto = await service.findOne(id);
      res.json(producto);
    } catch (error) {
      next(error);
    }
  }
);


router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProducto = await service.create(body);
      res.status(201).json(newProducto);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const producto = await service.update(id, body);
      res.json(producto);
    } catch (error) {
      next(error);
    }
  }
);


router.delete('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
