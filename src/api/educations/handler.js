/* eslint-disable camelcase */
class EducationsHandler {
  #service;
  #validator;

  constructor(service, validator) {
    this.#service = service;
    this.#validator = validator;

    this.getEducations = this.getEducations.bind(this);
    this.postEducation = this.postEducation.bind(this);
    this.putEducation = this.putEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  async getEducations(request, h) {
    try {
      const educations = await this.#service.getEducations();

      return {
        status: 'success',
        message: 'Educations data retrieved successfully',
        data: {
          educations,
        },
      };
    } catch (err) {
      console.log(err);
    }
  }

  async postEducation(request, h) {
    try {
      this.#validator.validateEducationsPayload(request.payload);
      const {
        degree,
        school,
        start,
        until,
        is_graduated,
        description,
      } = request.payload;

      const result = await this.#service.addEducation({
        degree,
        school,
        start,
        until,
        is_graduated,
        description,
      });

      const response = h.response({
        status: 'success',
        message: 'Education added successfully',
        data: {
          id: result.insertId,
        },
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async putEducation(request, h) {
    try {
      this.#validator.validateEducationsPayload(request.payload);
      const { id } = request.params;
      const {
        degree,
        school,
        start,
        until,
        is_graduated,
        description,
      } = request.payload;

      await this.#service.updateEducationById(id, {
        degree,
        school,
        start,
        until,
        is_graduated,
        description,
      });

      return {
        status: 'success',
        message: 'Education updated successfully',
      };
    } catch (err) {
      console.log(err);
    }
  }

  async deleteEducation(request, h) {
    try {
      const { id } = request.params;

      await this.#service.deleteEducationById(id);

      return {
        status: 'success',
        message: 'Education deleted successfully',
      };
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = EducationsHandler;
