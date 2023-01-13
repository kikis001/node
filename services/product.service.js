const boom = require('@hapi/boom');

const sequelize = require('./../libs/sequelize');

class ProductsService {
  constructor() {}

  async find() {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query)
    return data
    // const [data, metadata] = await sequelize.query(query)
    // return {
    //   data,
    //   metadata,
    // };
  }
  /**
   * @function create
   * @param { String } data product date
   * */
  async create(data) {
    const newProduct = data;
    this.products.push(newProduct);
    return this.products;
  }

  /**
   * @function findOne
   * @param { String } id product id
   * */
  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('Product Not Found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is block');
    }
    return product;
  }

  async update(id, data) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product Not Found|');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...data,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = await this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product Not Found|');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
