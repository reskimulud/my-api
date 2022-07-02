class AboutHandler {
  #aboutService;
  #storageService;
  #aboutValidator;
  #uploadsValidator;

  constructor(aboutService, storageService, aboutValidator, uploadsValidator) {
    this.#aboutService = aboutService;
    this.#storageService = storageService;
    this.#aboutValidator = aboutValidator;
    this.#uploadsValidator = uploadsValidator;

    this.getAbout = this.getAbout.bind(this);
    this.putAbout = this.putAbout.bind(this);
    this.putAboutImage = this.putAboutImage.bind(this);
  }

  async getAbout(request, h) {
    this.#aboutValidator.validateAlbumPayload(request.payload);
    const about = await this.#aboutService.getAbout();

    return {
      status: 'success',
      message: 'About data retrieved successfully',
      data: {
        about,
      },
    };
  }

  async putAbout(request, h) {
    this.#aboutValidator.validateAlbumPayload(request.payload);
    const {id} = request.params;

    await this.#aboutService.updateAbout(id, request.payload);

    return {
      status: 'success',
      message: 'About data updated successfully',
    };
  }

  async putAboutImage(request, h) {
    const { image } = request.payload;
    await this.#uploadsValidator.validateImageHeaders(image.hapi.headers);

    const nameId = `img-about-${new Date().getTime()}`;
    const filename = await this.#storageService.writeFile(
        image,
        image.hapi,
        nameId);

    const oldFileName = await this.#aboutService.updateAboutImage(filename);

    await this.#storageService.deleteFile(oldFileName);

    return {
      status: 'success',
      message: 'About Image updated successfully',
    };
  }
}

module.exports = AboutHandler;
