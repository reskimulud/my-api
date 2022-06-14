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

  async putServices(request, h) {
    this.#validator.validateServicePayload(request.payload);
    const { id } = request.params;
    const { name, description, icon } = request.payload;

    await this.#service.updateServices(id, { name, description, icon });

    return {
      status: 'success',
      message: 'Service updated successfully',
    };
  }

  async postServices(request, h) {
    this.#validator.validateServicePayload(request.payload);
    const { name, description, icon } = request.payload;

    const result = await this.#service.addServices(name, description, icon);

    const response = h.response({
      status: 'success',
      message: 'Service added successfully',
      data: {
        id: result.insertId,
      },
    });
    response.code(201);
    return response;
  }

  async deleteServices(request, h) {
    const { id } = request.params;

    await this.#service.deleteServices(id);

    return {
      status: 'success',
      message: 'Service deleted successfully',
    };
  }
}

module.exports = ServicesHandler;
