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
  {
    method: 'POST',
    path: '/portfolio',
    handler: handler.postPortfolio,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/portfolio/{id}',
    handler: handler.putPortfolio,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/portfolio/{id}',
    handler: handler.deletePortfolio,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
];

module.exports = routes;
