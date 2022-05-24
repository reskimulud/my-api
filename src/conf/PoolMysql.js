const mysql = require('mysql');

/**
 * PoolMysql is a Pooling Connection for MySQL database
 */
class PoolMySql {
  #pool;

  constructor() {
    this.#pool = mysql.createPool({
      connectionLimit: 10,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }

  #connection() {
    return new Promise((resolve, reject) => {
      this.#pool.getConnection((err, connection) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        console.log('Connected to MySQL : ', connection.threadId);
        resolve(connection);
      });
    });
  }

  query(query) {
    return new Promise((resolve, reject) => {
      this.#pool.query(query, (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  }
}

module.exports = PoolMySql;
