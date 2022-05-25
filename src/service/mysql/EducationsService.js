/* eslint-disable camelcase */
const Pool = require('../../conf/PoolMysql');

class EducationsService {
  #pool;

  constructor() {
    this.#pool = new Pool();
  }

  async getEducations() {
    const query = 'SELECT * FROM about_education';
    return await this.#pool.query(query);
  }

  async addEducation({
    degree,
    school,
    start,
    until,
    is_graduate,
    description,
  }) {
    const query = `INSERT INTO about_education
      (degree, school, start, until, is_graduate, description)
      VALUES ('${degree}',
        '${school}',
        '${start}',
        '${until}',
        ${is_graduate},
        '${description}'
      )`;

    return await this.#pool.query(query);
  }

  async updateEducationById(id, {
    degree,
    school,
    start,
    until,
    is_graduate,
    description,
  }) {
    const query = `UPDATE about_education
      SET degree = '${degree}',
      school = '${school}',
      start = '${start}',
      until = '${until}',
      is_graduate = ${is_graduate},
      description = '${description}'
      WHERE id = ${id}`;

    return await this.#pool.query(query);
  }

  async deleteEducationById(id) {
    const query = `DELETE FROM about_education WHERE id = ${id}`;
    return await this.#pool.query(query);
  }
}

module.exports = EducationsService;
