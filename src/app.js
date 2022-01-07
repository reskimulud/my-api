const dotenv = require('dotenv');
const Hapi = require('@hapi/hapi');
dotenv.config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
  });

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();
