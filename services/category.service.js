class CategoriesService {
  constructor() {}

  async find() {
    const query = 'SELECT * FROM tasks'
    const rta = await this.pool.query(query)
    return rta.rows
  }

  async findOne(id) {
    return id
  }

  async create(data) {
    return data
  }

  async update(id, changes) {
    return {
      id,
      changes
    }
  }

  async delete(id) {
    return id
  }
}


module.exports = CategoriesService;
