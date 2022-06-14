/* eslint-disable camelcase */
class ExperiencesHandler {
  #service;
  #validator;

  constructor(service, validator) {
    this.#service = service;
    this.#validator = validator;

    this.getExperiences = this.getExperiences.bind(this);
    this.postExperience = this.postExperience.bind(this);
    this.putExperience = this.putExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  async getExperiences(request, h) {
    const experiences = await this.#service.getExperiences();

    return {
      status: 'success',
      message: 'Experiences data retrieved successfully',
      data: {
        experiences,
      },
    };
  }

  async postExperience(request, h) {
    this.#validator.validateExperiencesPayload(request.payload);
    const {
      job_title,
      company_name,
      type,
      start,
      until,
      is_resigned,
      description,
    } = request.payload;

    const result = await this.#service.addExperience({
      job_title,
      company_name,
      type,
      start,
      until,
      is_resigned,
      description,
    });

    const response = h.response({
      status: 'success',
      message: 'Experience added successfully',
      data: {
        id: result.insertId,
      },
    });
    response.code(201);
    return response;
  }

  async putExperience(request, h) {
    this.#validator.validateExperiencesPayload(request.payload);
    const { id } = request.params;

    const {
      job_title,
      company_name,
      type,
      start,
      until,
      is_resigned,
      description,
    } = request.payload;

    await this.#service.updateExperienceById(id, {
      job_title,
      company_name,
      type,
      start,
      until,
      is_resigned,
      description,
    });

    return {
      status: 'success',
      message: 'Experience updated successfully',
    };
  }

  async deleteExperience(request, h) {
    const { id } = request.params;

    await this.#service.deleteExperienceById(id);

    return {
      status: 'success',
      message: 'Experience deleted successfully',
    };
  }
}

module.exports = ExperiencesHandler;
