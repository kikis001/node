const pool = require('./../libs/postgres.pool')

class UsersService {
  constructor() {
    this.pool = pool
    this.pool.on('error', (err) => console.error(err))
  }

  async find() {
    const query = 'SELECT * FROM tasks'
    const rta = await this.pool.query(query)
    return rta.rows;
  }

  async findOne(id) {
    return { id }
  }

  async update(id, changes) {
    return {
      id,
      changes
    }
  }

  async create(data) {
    return data
  }
}

module.exports = UsersService;
