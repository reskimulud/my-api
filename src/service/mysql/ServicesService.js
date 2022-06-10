const Pool = require('../../conf/PoolMysql');

class ServicesService {
  #pool;

  constructor() {
    this.#pool = new Pool();
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

    return await this.#pool.query(query);
  }

  async addServices(name, description, icon) {
    const query = `INSERT INTO services (name, description, icon)
      VALUES ('${name}', '${description}', '${icon}')`;

    return await this.#pool.query(query);
  }

  async deleteServices(id) {
    const query = `DELETE FROM services WHERE id = ${id}`;

    return await this.#pool.query(query);
  }
}

module.exports = ServicesService;
