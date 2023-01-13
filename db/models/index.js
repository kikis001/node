// archivo que se encarga de la conexión a los modelos para hacer mapeo de los datos
const { User, UserSchema } = require('./user.model')
// const { Product, ProductSchema }  = require('./product.model')

/**
 * @function setupModels
 * @param {String} sequelize receive the connection to the db
 */
function setupModels(sequelize) {
  // init también es un static
  User.init(UserSchema, User.config(sequelize)) //este modelo debe seguir ese schema, lueog se le envia la configuración. No se hace una instancia porque es estatico
  // Product.init(ProductSchema, Product.config(sequelize))
}

module.exports = setupModels;
