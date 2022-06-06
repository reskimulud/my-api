const routes = (handler) => [
  {
    method: 'GET',
    path: '/skills',
    handler: handler.getSkills,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'POST',
    path: '/skills',
    handler: handler.postSkill,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/skills/{id}',
    handler: handler.putSkill,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/skills/{id}',
    handler: handler.deleteSkill,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'GET',
    path: '/skills/categories',
    handler: handler.getCategories,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'POST',
    path: '/skills/categories',
    handler: handler.postCategory,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/skills/categories/{id}',
    handler: handler.putCategory,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/skills/categories/{id}',
    handler: handler.deleteCategory,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
];

module.exports = routes;
