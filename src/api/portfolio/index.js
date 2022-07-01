const PortfolioHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'portfolio',
  version: '1.0.0',
  register: async (server, {
    portfolioService,
    storageService,
    portfolioValidator,
    uploadsValidator,
  }) => {
    const handler = new PortfolioHandler(
        portfolioService,
        storageService,
        portfolioValidator,
        uploadsValidator,
    );
    server.route(routes(handler));
  },
};
