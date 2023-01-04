const boom = require('@hapi/boom');

const pool = require('./../libs/postgres.pool')

class ProductsService {
  constructor() {
    this.pool = pool
    this.pool.on('error', (err) => console.err(err))
  }

  async find() {
    const query = 'SELECT * FROM tasks'
    const rta = await this.pool.query(query)
    return rta.rows
  }

  async create(data) {
    const newProduct = data;
    this.products.push(newProduct);
    return this.products;
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('Product Not Found|');
    }
    if(product.isBlock) {
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
