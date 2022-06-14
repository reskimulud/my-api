/* eslint-disable camelcase */
const Pool = require('../../conf/PoolMysql');
const InvariantError = require('../../exception/InvariantError');
const NotFoundError = require('../../exception/NotFoundError');

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

    const result = await this.#pool.query(query);

    if (!result || result.size < 1 || result.affectedRows < 1) {
      throw new InvariantError('Can\'t add education data');
    }

    return result;
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

    const result = await this.#pool.query(query);

    if (!result || result.size < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Education data not found');
    }

    return result;
  }

  async deleteEducationById(id) {
    const query = `DELETE FROM about_education WHERE id = ${id}`;
    const result = await this.#pool.query(query);

    if (!result || result.size < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Education data not found');
    }

    return result;
  }
}

module.exports = EducationsService;
