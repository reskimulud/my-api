const Pool = require('../../conf/PoolMysql');

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
    console.log(portfolio);

    const gallery = await this.#pool.query('SELECT * FROM portfolio_gallery');

    portfolio.forEach((item) => {
      const mGallery = gallery.filter((gal) => (
        gal.portfolio_id === item.id
      ))[0];
      if (mGallery) {
        item.thumb = mGallery.file_name;
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

    portfolio[0].gallery = gallery;

    return portfolio[0];
  }
}

module.exports = PortfolioService;
