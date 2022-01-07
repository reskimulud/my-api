const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    port: process.env.NODE_ENV !== 'production' ? 5000 : 80,
  });

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();
