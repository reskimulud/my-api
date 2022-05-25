/* eslint-disable camelcase */
const Pool = require('../../conf/PoolMysql');

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

    return await this.#pool.query(query);
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

    return await this.#pool.query(query);
  }

  async deleteExperienceById(id) {
    const query = `DELETE FROM about_experience WHERE id = ${id}`;

    return await this.#pool.query(query);
  }
}

module.exports = ExperiencesService;
