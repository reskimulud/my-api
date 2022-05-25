const ExperiencesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'experiences',
  version: '1.0.0',
  register: async (server, { service }) => {
    const handler = new ExperiencesHandler(service);
    server.route(routes(handler));
  },
};
