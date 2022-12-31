const boom = require('@hapi/boom');

class ProductsService {
  constructor() {
    this.products = [
      { id: '1', name: 'John', age: 20, isBlock: true },
      { id: '2', name: 'Jane', age: 21, isBlock: true },
      { id: '3', name: 'Bob', age: 22, isBlock: false },
    ];
  }

  async find() {
    return new Promise((resolve, reject) => {
      resolve(this.products)
      // setTimeout(() => {
      //   resolve(this.products);
      // }, 5000);
    });
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
