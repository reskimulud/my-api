class ExperiencesHandler {
  #service;
  #validator;

  constructor(service, validator) {
    this.#service = service;
    this.#validator = validator;

    this.getExperiences = this.getExperiences.bind(this);
  }

  async getExperiences(request, h) {
    try {
      const experiences = await this.#service.getExperiences();

      return {
        status: 'success',
        message: 'Experiences data retrieved successfully',
        data: {
          experiences,
        },
      };
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ExperiencesHandler;
