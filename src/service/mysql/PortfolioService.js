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

    const portfolio = await this.#pool.query('SELECT * FROM portfolio');

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
}

module.exports = PortfolioService;
