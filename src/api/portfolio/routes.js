const routes = (handler) => [
  {
    method: 'GET',
    path: '/portfolio',
    handler: handler.getPortfolio,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'GET',
    path: '/portfolio/{id}',
    handler: handler.getPortfolioById,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
];

module.exports = routes;
