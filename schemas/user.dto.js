const Joi = require('joi')

const id = Joi.string()
const name = Joi.string()
const email = Joi.string().email()
const password = Joi.string().alphanum().min(7).max(15)
// const role = Joi.string()

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required()
})

const updateUserSchema = Joi.object({
  name,
  email,
  password,
})

const getUserSchema = Joi.object({
  id: id.required()
})


module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema
}
