/* eslint-disable camelcase */
class PortfolioHandler {
  #portfolioService;
  #storageService;
  #portfolioValidator;
  #uploadsValidator;

  constructor(portfolioService,
      storageService,
      portfolioValidator,
      uploadsValidator) {
    this.#portfolioService = portfolioService;
    this.#storageService = storageService;
    this.#portfolioValidator = portfolioValidator;
    this.#uploadsValidator = uploadsValidator;

    this.getPortfolio = this.getPortfolio.bind(this);
    this.getPortfolioById = this.getPortfolioById.bind(this);
    this.postPortfolio = this.postPortfolio.bind(this);
    this.putPortfolio = this.putPortfolio.bind(this);
    this.deletePortfolio = this.deletePortfolio.bind(this);
    this.postPortfolioCategory = this.postPortfolioCategory.bind(this);
    this.putPortfolioCategoryById = this.putPortfolioCategoryById.bind(this);
    // eslint-disable-next-line max-len
    this.deletePortfolioCategoryById = this.deletePortfolioCategoryById.bind(this);
  }

  async getPortfolio() {
    const portfolio = await this.#portfolioService.getPortfolio();

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
    const portfolio = await this.#portfolioService.getPortfolioById(id);

    return {
      status: 'success',
      message: 'Portfolio data retrieved successfuly',
      data: {
        portfolio,
      },
    };
  }

  async postPortfolio(request, h) {
    await this.#portfolioValidator.validatePortfolioPayload(request.payload);
    const {
      project_name,
      category_id,
      project_brief,
      client,
      tools,
      link,
      date,
    } = request.payload;

    const result = await this.#portfolioService.addPortfolio({
      project_name,
      category_id,
      project_brief,
      client,
      tools,
      link,
      date,
    });

    const response = h.response({
      status: 'success',
      message: 'Portfolio added successfully',
      data: {
        id: result.insertId,
      },
    });
    response.code(201);
    return response;
  }

  async putPortfolio(request, h) {
    await this.#portfolioValidator.validatePortfolioPayload(request.payload);
    const { id } = request.params;
    const {
      project_name,
      category_id,
      project_brief,
      client,
      tools,
      link,
      date,
    } = request.payload;

    await this.#portfolioService.updatePortfolioById(id, {
      project_name,
      category_id,
      project_brief,
      client,
      tools,
      link,
      date,
    });

    return {
      status: 'success',
      message: 'Portfolio updated successfully',
    };
  }

  async deletePortfolio(request, h) {
    const { id } = request.params;
    await this.#portfolioService.deletePortfolioById(id);

    return {
      status: 'success',
      message: 'Portfolio deleted successfully',
    };
  }

  async postPortfolioCategory(request, h) {
    // eslint-disable-next-line max-len
    await this.#portfolioValidator.validatePortfolioCategoryPayload(request.payload);

    const { name } = request.payload;

    const result = await this.#portfolioService.addCategory(name);

    const response = h.response({
      status: 'success',
      message: 'Portfolio Category added successfully',
      data: {
        id: result.insertId,
      },
    });
    response.code(201);
    return response;
  }

  async putPortfolioCategoryById(request, h) {
    // eslint-disable-next-line max-len
    await this.#portfolioValidator.validatePortfolioCategoryPayload(request.payload);
    const { id } = request.params;
    const { name } = request.payload;

    await this.#portfolioService.updateCategoryById(id, name);

    return {
      status: 'success',
      message: 'Portfolio Category updated successfully',
    };
  }

  async deletePortfolioCategoryById(request, h) {
    const { id } = request.params;

    await this.#portfolioService.deleteCategoryById(id);

    return {
      status: 'success',
      message: 'Portfolio Category deleted successfully',
    };
  }
}

module.exports = PortfolioHandler;
