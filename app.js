require('dotenv').config();

const Hapi = require('@hapi/hapi');
const Pool = require('./src/conf/PoolMysql');

const init = async () => {
  const server = Hapi.server({
    host: process.env.NODE_ENV !== 'production' ?
    'localhost' :
    'api.reskimulud.my.id',
    port: process.env.NODE_ENV !== 'production' ? 5000 : 443,
  });

  const pool = new Pool();

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: () => ({data: {
        name: 'Reski Mulud Muchamad',
      }}),
    },
    {
      method: 'GET',
      path: '/about',
      handler: async () => {
        const data = await pool.query('SELECT * FROM about');
        console.log('data: ', data);
        return {data: data[0]};
      },
    },
  ]);

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();
