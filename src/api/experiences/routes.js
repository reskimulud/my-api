const routes = (handler) => [
  {
    method: 'GET',
    path: '/experiences',
    handler: handler.getExperiences,
  },
];

module.exports = routes;
