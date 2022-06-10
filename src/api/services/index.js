const ServicesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'services',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const handler = new ServicesHandler(service, validator);
    server.route(routes(handler));
  },
};
