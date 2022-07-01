/* eslint-disable camelcase */
const Pool = require('../../conf/PoolMysql');
const InvariantError = require('../../exception/InvariantError');
const NotFoundError = require('../../exception/NotFoundError');

class ExperiencesService {
  #pool;

  constructor() {
    this.#pool = new Pool();
  }

  async getExperiences() {
    const query = 'SELECT * FROM about_experience';
    return await this.#pool.query(query);
  }

  async addExperience({
    job_title,
    company_name,
    type,
    start,
    until,
    is_resigned,
    description,
  }) {
    const query = `INSERT INTO about_experience
      (job_title, company_name, type, start, until, is_resigned, description)
      VALUES ('${job_title}',
        '${company_name}',
        '${type}',
        '${start}',
        '${until}',
        ${is_resigned},
        '${description}'
      )`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new InvariantError('Can\'t add experience data');
    }

    return result;
  }

  async updateExperienceById(id, {
    job_title,
    company_name,
    type,
    start,
    until,
    is_resigned,
    description,
  }) {
    const query = `UPDATE about_experience
      SET job_title = '${job_title}',
      company_name = '${company_name}',
      type = '${type}',
      start = '${start}',
      until = '${until}',
      is_resigned = ${is_resigned},
      description = '${description}'
      WHERE id = ${id}`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Experience data not found');
    }

    return result;
  }

  async deleteExperienceById(id) {
    const query = `DELETE FROM about_experience WHERE id = ${id}`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Experience data not found');
    }

    return result;
  }
}

module.exports = ExperiencesService;
