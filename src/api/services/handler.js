class ServicesHandler {
  #service;
  #validator;

  constructor(service, validator) {
    this.#service = service;
    this.#validator = validator;

    this.getServices = this.getServices.bind(this);
    this.putServices = this.putServices.bind(this);
    this.postServices = this.postServices.bind(this);
    this.deleteServices = this.deleteServices.bind(this);
  }

  async getServices(request, h) {
    const services = await this.#service.getServices();

    return {
      status: 'success',
      message: 'Services data retrieved successfully',
      data: {
        services,
      },
    };
  }

  async putServices(request, h) {}

  async postServices(request, h) {}

  async deleteServices(request, h) {}
}

module.exports = ServicesHandler;
