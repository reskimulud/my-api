/* eslint-disable camelcase */
const Pool = require('../../conf/PoolMysql');

class SkillsService {
  #pool;

  constructor() {
    this.#pool = new Pool();
  }

  async getSkills() {
    const category = await this.#pool.query(
        'SELECT * FROM about_skills_category',
    );

    const skills = await this.#pool.query('SELECT * FROM about_skills');

    category.forEach((item) => {
      item.skills = skills.filter((skill) => skill.category_id === item.id);
    });
    return category;
  }

  async addSkill({skill, percentage, category_id}) {
    const query = `INSERT INTO about_skills (skill, percentage, category_id)
      VALUES ('${skill}', ${percentage}, ${category_id})`;

    return await this.#pool.query(query);
  }

  async updateSkillById(id, {skill, percentage, category_id}) {
    const query = `UPDATE about_skills SET skill = '${skill}',
      percentage = ${percentage},
      category_id = ${category_id}
      WHERE id = ${id}`;

    return await this.#pool.query(query);
  }

  async deleteSkillById(id) {
    const query = `DELETE FROM about_skills WHERE id = ${id}`;

    return await this.#pool.query(query);
  }

  async getCategories() {
    return await this.#pool.query('SELECT * FROM about_skills_category');
  }

  async addCategory({categoryName, position}) {
    const query = `INSERT INTO about_skills_category (category_name, position)
      VALUES ('${categoryName}', ${position})`;

    return await this.#pool.query(query);
  }

  async updateCategoryById(id, {categoryName, position}) {
    const query = `UPDATE about_skills_category
      SET category_name = '${categoryName}',
      position = ${position}
      WHERE id = ${id}`;

    return await this.#pool.query(query);
  }

  async deleteCategoryById(id) {
    const query = `DELETE FROM about_skills_category WHERE id = ${id}`;

    return await this.#pool.query(query);
  }
}

module.exports = SkillsService;
