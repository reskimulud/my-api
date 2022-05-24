const AboutHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'about',
  version: '1.0.0',
  register: async (server, {service, validator}) => {
    const handler = new AboutHandler(service, validator);
    server.route(routes(handler));
  },
};
