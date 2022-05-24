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
    return category[0];
  }
}

module.exports = SkillsService;
