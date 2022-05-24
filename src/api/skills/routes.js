const routes = (handler) => [
  {
    method: 'GET',
    path: '/skills',
    handler: handler.getSkills,
  },
];

module.exports = routes;
