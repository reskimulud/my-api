const routes = (handler) => [
  {
    method: 'GET',
    path: '/skills',
    handler: handler.getSkills,
  },
  {
    method: 'GET',
    path: '/skills/categories',
    handler: handler.getCategories,
  },
  {
    method: 'POST',
    path: '/skills',
    handler: handler.postSkill,
  },
];

module.exports = routes;
