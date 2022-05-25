const routes = (handler) => [
  {
    method: 'GET',
    path: '/skills',
    handler: handler.getSkills,
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
  {
    method: 'GET',
    path: '/skills/categories',
    handler: handler.getCategories,
  },
  {
    method: 'POST',
    path: '/skills/categories',
    handler: handler.postCategory,
  },
  {
    method: 'PUT',
    path: '/skills/categories/{id}',
    handler: handler.putCategory,
  },
  {
    method: 'DELETE',
    path: '/skills/categories/{id}',
    handler: handler.deleteCategory,
  },
];

module.exports = routes;
