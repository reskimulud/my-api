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
  {
    method: 'PUT',
    path: '/skills/{id}',
    handler: handler.putSkill,
  },
  {
    method: 'DELETE',
    path: '/skills/{id}',
    handler: handler.deleteSkill,
  },
];

module.exports = routes;
