const PortfolioHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'portfolio',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const handler = new PortfolioHandler(service, validator);
    server.route(routes(handler));
  },
};
