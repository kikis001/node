const express = require('express');

const CategoriesService = require('./../services/category.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
} = require('./../schemas/category');

const router = express.Router();
const service = new CategoriesService();

router.get('/', async (req, res) => {
  const category = await service.find();
  res.json(category);
});

router.get(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.send(id)
    } catch (err) {
      next(err);
    }
  }
);

router.post('/', validatorHandler(createCategorySchema, 'body'), async (req, res, next) => {
  try {
    const body = req.body
    const newCategory = await service.create(body)
    res.json(newCategory)
  }catch(err) {
    next(err)
  }
})

router.patch(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const updateCategory = await service.update(id, body)
      res.json(updateCategory)
    }catch (err) {
      next(err)
    }
  }
);

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const rta = service.delete(id)
  res.json(rta)
})

module.exports = router;
