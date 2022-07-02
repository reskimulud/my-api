const AboutHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'about',
  version: '1.0.0',
  register: async (server, {
    aboutService,
    storageService,
    aboutValidator,
    uploadsValidator,
  }) => {
    const handler = new AboutHandler(
        aboutService,
        storageService,
        aboutValidator,
        uploadsValidator,
    );
    server.route(routes(handler));
  },
};
