const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    host: process.env.NODE_ENV !== 'production' ?
    'localhost' :
    'api.reskimulud.my.id',
    port: process.env.NODE_ENV !== 'production' ? 5000 : 443,
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => ({data: {
      name: 'Reski Mulud Muchamad',
    }}),
  });

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();
