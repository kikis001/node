const express = require('express');

const ProductsService = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schemas/product.dto');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
  }
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.status(202).json(product);
    } catch (err) {
      next(err);
    }
  }
);

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(`deleted ${rta}`);
});

module.exports = router;
/*
{
    "name": "kikis",
    "price": 10,
    "id": "holamundonuevo2345",
    "image": "https://static.platzi.com/media/achievements/badge-backend-nodejs-apirest-expressjs-3fc7bca3-8dcb-459c-9638-12c92d502f5f.png"
}
*/
