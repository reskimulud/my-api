/* eslint-disable camelcase */
const Pool = require('../../conf/PoolMysql');
const InvariantError = require('../../exception/InvariantError');
const NotFoundError = require('../../exception/NotFoundError');

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
    const queryCategory = `
      SELECT id FROM about_skills_category WHERE id = ${category_id}
    `;

    const category = await this.#pool.query(queryCategory);

    if (!category || category.length < 1 || category.affectedRows < 1) {
      throw new InvariantError('Category not found');
    }

    const query = `INSERT INTO about_skills (skill, percentage, category_id)
      VALUES ('${skill}', ${percentage}, ${category_id})`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new InvariantError('Can\'t add skill data');
    }

    return result;
  }

  async updateSkillById(id, {skill, percentage, category_id}) {
    const queryCategory = `
      SELECT id FROM about_skills_category WHERE id = ${category_id}
    `;

    const category = await this.#pool.query(queryCategory);

    if (!category || category.length < 1 || category.affectedRows < 1) {
      throw new InvariantError('Category not found');
    }

    const query = `UPDATE about_skills SET skill = '${skill}',
      percentage = ${percentage},
      category_id = ${category_id}
      WHERE id = ${id}`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Can\'t update skill data, skill not found');
    }

    return result;
  }

  async deleteSkillById(id) {
    const query = `DELETE FROM about_skills WHERE id = ${id}`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Can\'t delete skill data, skill not found');
    }

    return result;
  }

  async getCategories() {
    return await this.#pool.query('SELECT * FROM about_skills_category');
  }

  async addCategory({category_name, position}) {
    const query = `INSERT INTO about_skills_category (category_name, position)
      VALUES ('${category_name}', ${position})`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new InvariantError('Can\'t add category data');
    }

    return result;
  }

  async updateCategoryById(id, {category_name, position}) {
    const query = `UPDATE about_skills_category
      SET category_name = '${category_name}',
      position = ${position}
      WHERE id = ${id}`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('C]ategory data not found');
    }
  }

  async deleteCategoryById(id) {
    const query = `DELETE FROM about_skills_category WHERE id = ${id}`;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('Category data not found');
    }
  }
}

module.exports = SkillsService;
