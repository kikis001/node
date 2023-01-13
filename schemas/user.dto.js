const Joi = require('joi')

const id = Joi.string()
const email = Joi.string().email()
const password = Joi.string().alphanum().min(7).max(15)
// const role = Joi.string().min(5)

const createUserSchema = Joi.object({
  // name: name.required(),
  email: email.required(),
  password: password.required(),
  // role: role.required()
})

const updateUserSchema = Joi.object({
  email,
  // role
})

const getUserSchema = Joi.object({
  id: id.required()
})


module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema
}
