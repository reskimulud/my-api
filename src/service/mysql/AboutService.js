const Pool = require('../../conf/PoolMysql');
const NotFoundError = require('../../exception/NotFoundError');

class AboutService {
  #pool;

  constructor() {
    this.#pool = new Pool();
  }

  async getAbout() {
    const result = await this.#pool.query('SELECT * FROM about');
    return result[0];
  }

  async updateAbout(id, {
    name,
    email,
    description,
    address,
    gmaps,
    telp,
    github,
    facebook,
    instagram,
    twitter,
    pinterest,
    linkedin,
    image,
  }) {
    const query = `UPDATE about SET name = '${name}',
      email = '${email}',
      description = '${description}',
      address = '${address}',
      gmaps = '${gmaps}', 
      telp = '${telp}',
      github = '${github}', 
      facebook = '${facebook}', 
      instagram = '${instagram}', 
      twitter = '${twitter}', 
      pinterest = '${pinterest}', 
      linkedin = '${linkedin}', 
      image = '${image}'
      WHERE id = ${id}`;

    console.log(query);

    const result = await this.#pool.query(query);
    if (!result || result.size < 1 || result.affectedRows < 1) {
      throw new NotFoundError('About data not found');
    }
  }
}

module.exports = AboutService;
