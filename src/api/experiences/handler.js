class ExperiencesHandler {
  #service;

  constructor(service) {
    this.#service = service;

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
