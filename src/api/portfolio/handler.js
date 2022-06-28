class PortfolioHandler {
  #service;
  #validator;

  constructor(service, validator) {
    this.#service = service;
    this.#validator = validator;

    this.getPortfolio = this.getPortfolio.bind(this);
    this.getPortfolioById = this.getPortfolioById.bind(this);
  }

  async getPortfolio() {
    const portfolio = await this.#service.getPortfolio();

    return {
      status: 'success',
      message: 'Portfolio data retrieved successfuly',
      data: {
        portfolio,
      },
    };
  }

  async getPortfolioById(request, h) {
    const { id } = request.params;
    const portfolio = await this.#service.getPortfolioById(id);

    return {
      status: 'success',
      message: 'Portfolio data retrieved successfuly',
      data: {
        portfolio,
      },
    };
  }
}

module.exports = PortfolioHandler;
