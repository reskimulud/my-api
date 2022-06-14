class AboutHandler {
  #service;
  #validator;

  constructor(service, validator) {
    this.#service = service;
    this.#validator = validator;

    this.getAbout = this.getAbout.bind(this);
    this.putAbout = this.putAbout.bind(this);
  }

  async getAbout(request, h) {
    this.#validator.validateAlbumPayload(request.payload);
    const about = await this.#service.getAbout();

    return {
      status: 'success',
      message: 'About data retrieved successfully',
      data: {
        about,
      },
    };
  }

  async putAbout(request, h) {
    this.#validator.validateAlbumPayload(request.payload);
    const {id} = request.params;

    await this.#service.updateAbout(id, request.payload);

    return {
      status: 'success',
      message: 'About data updated successfully',
    };
  }
}

module.exports = AboutHandler;
