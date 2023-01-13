const { Model, DataTypes, Sequelize } = require('sequelize')

const USER_TABLE = 'users'// nombre de la tabla

const UserSchema = {
  id: {
    allowNull: false, // permitir si el campo sea nulo
    autoIncrement: true,
    primaryKey: true, // llave privada
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true, //será un elemento único
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  // En JS la convención es usar camelcase, pero en SQL se recomienda usar el nombre de las variables con un _
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  // métodos estaticos -> no necesitas declarar el objeto para usar esos métodos
  static associate() {
    // models
  }

  /**
   * @static
   * @param {String} sequelize database connection
   * @return {Object} database connection, table name, model name, default fields
   */

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = {
  USER_TABLE,
  UserSchema,
  User
}
