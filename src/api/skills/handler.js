class SkillsHandler {
  #service;

  constructor(service) {
    this.#service = service;

    this.getSkills = this.getSkills.bind(this);
  }

  async getSkills(request, h) {
    const result = await this.#service.getSkills();

    return {
      status: 'success',
      message: 'Skills data retrieved successfully',
      data: {
        result,
      },
    };
  }
}

module.exports = SkillsHandler;
