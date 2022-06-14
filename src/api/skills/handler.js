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
    this.postCategory = this.postCategory.bind(this);
    this.putCategory = this.putCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
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
    this.#validator.validateSkillsPayload(request.payload);
    const { skill, percentage, category_id } = request.payload;

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
  }

  async putSkill(request, h) {
    this.#validator.validateSkillsPayload(request.payload);
    const { id } = request.params;
    const { skill, percentage, category_id } = request.payload;

    await this.#service.updateSkillById(id, {
      skill,
      percentage,
      category_id,
    });

    return {
      status: 'success',
      message: 'Skill updated successfully',
    };
  }

  async deleteSkill(request, h) {
    const { id } = request.params;

    await this.#service.deleteSkillById(id);

    return {
      status: 'success',
      message: 'Skill deleted successfully',
    };
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

  async postCategory(request, h) {
    this.#validator.validateSkillsCategoryPayload(request.payload);
    const { category_name, position } = request.payload;

    const result = await this.#service.addCategory({
      category_name,
      position,
    });

    const response = h.response({
      status: 'success',
      message: 'Category added successfully',
      data: {
        id: result.insertId,
      },
    });
    response.code(201);
    return response;
  }

  async putCategory(request, h) {
    this.#validator.validateSkillsCategoryPayload(request.payload);
    const { id } = request.params;

    const { category_name, position } = request.payload;

    await this.#service.updateCategoryById(id, {
      category_name,
      position,
    });

    return {
      status: 'success',
      message: 'Category updated successfully',
    };
  }

  async deleteCategory(request, h) {
    const { id } = request.params;

    await this.#service.deleteCategoryById(id);

    return {
      status: 'success',
      message: 'Category deleted successfully',
    };
  }
}

module.exports = SkillsHandler;
