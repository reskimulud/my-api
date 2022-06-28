const routes = (handler) => [
  {
    method: 'GET',
    path: '/portfolio',
    handler: handler.getPortfolio,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
];

module.exports = routes;
