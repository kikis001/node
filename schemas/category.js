const Joi = require('Joi')

const id = Joi.string().uuid()
const category = Joi.string()

const createCategorySchema = Joi.object({
  id: id.required(),
  category: category.required()
})

const updateCategorySchema = Joi.object({
  id,
  category
})

const getCategorySchema = Joi.object({
  id: id.required()
})

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema
}
