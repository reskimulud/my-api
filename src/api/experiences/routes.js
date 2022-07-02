const routes = (handler) => [
  {
    method: 'GET',
    path: '/experiences',
    handler: handler.getExperiences,
  },
  {
    method: 'POST',
    path: '/experiences',
    handler: handler.postExperience,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/experiences/{id}',
    handler: handler.putExperience,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/experiences/{id}',
    handler: handler.deleteExperience,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
];

module.exports = routes;
