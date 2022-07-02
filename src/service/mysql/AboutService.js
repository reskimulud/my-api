const Pool = require('../../conf/PoolMysql');
const NotFoundError = require('../../exception/NotFoundError');
const { imageUrlGenerator } = require('../../utils');

class AboutService {
  #pool;

  constructor() {
    this.#pool = new Pool();
  }

  async getAbout() {
    const result = await this.#pool.query('SELECT * FROM about');
    const about = result[0];

    return {
      name: about.name,
      email: about.email,
      description: about.description,
      address: about.address,
      gmaps: about.gmaps,
      telp: about.telp,
      github: about.github,
      facebook: about.facebook,
      instagram: about.instagram,
      twitter: about.twitter,
      pinterest: about.pinterest,
      linkedin: about.linkedin,
      image_url: imageUrlGenerator('about', about.image),
    };
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
      linkedin = '${linkedin}'
      WHERE id = ${id}`;

    const result = await this.#pool.query(query);
    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('About data not found');
    }
  }

  async updateAboutImage(fileName) {
    const oldFileName = await this.#pool.query(
        'SELECT image FROM about WHERE id = 1',
    );

    const query = `
      UPDATE about SET image = '${fileName}'
    `;

    const result = await this.#pool.query(query);

    if (!result || result.length < 1 || result.affectedRows < 1) {
      throw new NotFoundError('About data not found');
    }

    return oldFileName[0].image;
  }
}

module.exports = AboutService;
