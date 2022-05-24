const Pool = require('../../conf/PoolMysql');

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

    await this.#pool.query(query);
  }
}

module.exports = AboutService;
