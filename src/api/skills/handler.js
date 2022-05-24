/* eslint-disable camelcase */
class SkillsHandler {
  #service;
  #validator;

  constructor(service, validator) {
    this.#service = service;
    this.#validator = validator;

    this.getSkills = this.getSkills.bind(this);
    this.postSkill = this.postSkill.bind(this);
    this.putSkill = this.putSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  async getSkills(request, h) {
    const skills = await this.#service.getSkills();

    return {
      status: 'success',
      message: 'Skills data retrieved successfully',
      data: {
        skills,
      },
    };
  }

  async postSkill(request, h) {
    try {
      this.#validator.validateSkillsPayload(request.payload);
      const {skill, percentage, category_id} = request.payload;

      const result = await this.#service.addSkill({
        skill,
        percentage,
        category_id,
      });

      const response = h.response({
        status: 'success',
        message: 'Skill added successfully',
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

  async putSkill(request, h) {
    try {
      this.#validator.validateSkillsPayload(request.payload);
      const {id} = request.params;
      const {skill, percentage, category_id} = request.payload;

      await this.#service.updateSkillById(id, {
        skill,
        percentage,
        category_id,
      });

      return {
        status: 'success',
        message: 'Skill updated successfully',
      };
    } catch (err) {
      console.log(err);
    }
  }

  async deleteSkill(request, h) {
    try {
      const {id} = request.params;

      await this.#service.deleteSkillById(id);

      return {
        status: 'success',
        message: 'Skill deleted successfully',
      };
    } catch (err) {
      console.log(err);
    }
  }

  async getCategories(request, h) {
    const categories = await this.#service.getCategories();

    return {
      status: 'success',
      message: 'Categories data retrieved successfully',
      data: {
        categories,
      },
    };
  }
}

module.exports = SkillsHandler;
