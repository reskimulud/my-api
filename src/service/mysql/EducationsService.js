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
    is_graduated,
    description,
  }) {
    const query = `INSERT INTO about_education
      (degree, school, start, until, is_graduated, description)
      VALUES ('${degree}',
        '${school}',
        '${start}',
        '${until}',
        ${is_graduated},
        '${description}'
      )`;

    return await this.#pool.query(query);
  }

  async updateEducationById(id, {
    degree,
    school,
    start,
    until,
    is_graduated,
    description,
  }) {
    const query = `UPDATE about_education
      SET degree = '${degree}',
      school = '${school}',
      start = '${start}',
      until = '${until}',
      is_graduated = ${is_graduated},
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
