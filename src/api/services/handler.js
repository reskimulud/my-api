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
    try {
      this.#validator.validateServicePayload(request.payload);
      const { id } = request.params;
      const { name, description, icon } = request.payload;

      await this.#service.updateServices(id, { name, description, icon });

      return {
        status: 'success',
        message: 'Service updated successfully',
      };
    } catch (err) {
      console.log(err);
    }
  }

  async postServices(request, h) {
    try {
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
    } catch (err) {
      console.log(err);
    }
  }

  async deleteServices(request, h) {
    try {
      const { id } = request.params;

      await this.#service.deleteServices(id);

      return {
        status: 'success',
        message: 'Service deleted successfully',
      };
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ServicesHandler;
