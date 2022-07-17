const InvariantError = require('../../exception/InvariantError');
const NotFoundError = require('../../exception/NotFoundError');

class ServicesService {
  #pool;

  constructor(pool) {
    this.#pool = pool;
  }

  async getServices() {
    const result = await this.#pool.query('SELECT * FROM services');
    return result;
  }

  async updateServices(id, { name, description, icon }) {
    const query = `UPDATE services SET name = '${name}',
      description = '${description}',
      icon = '${icon}'
      WHERE id = ${id}`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Can\'t update services data, not found');
    }

    return result;
  }

  async addServices(name, description, icon) {
    const query = `INSERT INTO services (name, description, icon)
      VALUES ('${name}', '${description}', '${icon}')`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new InvariantError('Can\'t add services data');
    }

    return result;
  }

  async deleteServices(id) {
    const query = `DELETE FROM services WHERE id = ${id}`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Can\'t delete services data, not found');
    }

    return result;
  }
}

module.exports = ServicesService;
