const EducationsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'educations',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const handler = new EducationsHandler(service, validator);
    server.route(routes(handler));
  },
};
