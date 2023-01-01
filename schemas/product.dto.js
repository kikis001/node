const Joi = require('joi');

const id = Joi.string()
const name = Joi.string().alphanum().min(3).max(15)
const price = Joi.number().integer().min(10)
const image = Joi.string().uri()

const createProductSchema = Joi.object({
  id, // propiedad que será eliminada cuando se conecte a un DB
  name: name.required(),
  price: price.required(),
  image: image.required()
})

const updateProductSchema = Joi.object({
  name: name,
  price: price
})

const getProductSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema
}
