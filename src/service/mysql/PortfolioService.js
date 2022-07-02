/* eslint-disable camelcase */
const Pool = require('../../conf/PoolMysql');
const InvariantError = require('../../exception/InvariantError');
const NotFoundError = require('../../exception/NotFoundError');
const { imageUrlGenerator } = require('../../utils');

class PortfolioService {
  #pool;

  constructor() {
    this.#pool = new Pool();
  }

  async getPortfolio() {
    const category = await this.#pool.query(
        'SELECT * FROM portfolio_category',
    );

    const portfolio = await this.#pool.query(
        `SELECT id,
          project_name,
          category_id
        FROM portfolio`,
    );

    const gallery = await this.#pool.query('SELECT * FROM portfolio_gallery');

    portfolio.forEach((item) => {
      const mGallery = gallery.filter((gal) => (
        gal.portfolio_id === item.id
      ))[0];
      if (mGallery) {
        item.thumb = imageUrlGenerator('portfolio', mGallery.file_name);
      } else {
        item.thumb = null;
      }
    });

    category.forEach((item) => {
      item.portfolio = portfolio.filter((porto) => (
        porto.category_id === item.id
      ));
    });
    return category;
  }

  async getPortfolioById(id) {
    const portfolio = await this.#pool.query(`
      SELECT * FROM portfolio WHERE id = ${id}
    `);

    const gallery = await this.#pool.query(`
      SELECT file_name FROM portfolio_gallery WHERE portfolio_id = ${id}
    `);

    const newGallery = gallery.map((item) => (
      {
        url: imageUrlGenerator('portfolio', item.file_name),
      }
    ));

    portfolio[0].gallery = newGallery;

    return portfolio[0];
  }

  async addPortfolio({
    project_name,
    category_id,
    project_brief,
    client,
    tools,
    link,
    date,
  }) {
    const queryGetCategoryById = `
      SELECT id FROM portfolio_category WHERE id = ${category_id}
    `;

    const category = await this.#pool.query(queryGetCategoryById);

    if (!category || category.length < 1 || category.affectedRows < 1) {
      throw new InvariantError('Category not found');
    }

    const query = `INSERT INTO portfolio
    (project_name, category_id, project_brief, client, tools, link, date)
    VALUES ('${project_name}',
      '${category_id}',
      '${project_brief}',
      '${client}',
      '${tools}',
      '${link}',
      '${date}')`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new InvariantError('Can\'t add portfolio data');
    }

    return result;
  }

  async updatePortfolioById(id, {
    project_name,
    category_id,
    project_brief,
    client,
    tools,
    link,
    date,
  }) {
    const queryGetCategoryById = `
      SELECT id FROM portfolio_category WHERE id = ${category_id}
    `;

    const category = await this.#pool.query(queryGetCategoryById);

    if (!category || category.length < 1 || category.affectedRows < 1) {
      throw new InvariantError('Category not found');
    }

    const query = `UPDATE portfolio
    SET  project_name = '${project_name}',
      category_id = '${category_id}',
      project_brief = '${project_brief}',
      client = '${client}',
      tools = '${tools}',
      link = '${link}',
      date = '${date}'
    WHERE id = ${id}`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Portfolio data not found');
    }

    return result;
  }

  async deletePortfolioById(id) {
    const query = `DELETE FROM portfolio WHERE id = ${id}`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Portfolio data not found');
    }

    return result;
  }

  async addCategory(name) {
    const query = `INSERT INTO portfolio_category (name) VALUES ('${name}')`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Portfolio data not found');
    }

    return result;
  }

  async updateCategoryById(id, name) {
    const query = `
      UPDATE portfolio_category SET name = '${name}' WHERE id = ${id}
    `;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Portfolio data not found');
    }

    return result;
  }

  async deleteCategoryById(id) {
    const query = `DELETE FROM portfolio_category WHERE id = ${id}`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Portfolio data not found');
    }

    return result;
  }

  async validatePortfolioId(id) {
    const query = `SELECT id FROM portfolio WHERE id = ${id}`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Portfolio data not found');
    }
  }

  async addPortfolioImage(id, fileName) {
    const query = `
      INSERT INTO portfolio_gallery (portfolio_id, file_name)
      VALUES ('${id}', '${fileName}')`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Portfolio data not found');
    }

    return result;
  }

  async deletePortfolioImageById(id, fileName) {
    const query = `
      DELETE FROM portfolio_gallery 
      WHERE portfolio_id = ${id} AND file_name = '${fileName}'
    `;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Portfolio data not found');
    }
  }
}

module.exports = PortfolioService;
