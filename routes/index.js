const express = require("express")

const usersRouter = require('./users.router');
const productsRouter = require('./products.router');
const categoryRouter = require('./category.router');

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router) //path global
  router.use('/products', productsRouter)
  router.use('/categories', categoryRouter)
  router.use('/users', usersRouter)
}

module.exports = routerApi;
