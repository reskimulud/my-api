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
  },
  {
    method: 'PUT',
    path: '/experiences/{id}',
    handler: handler.putExperience,
  },
  {
    method: 'DELETE',
    path: '/experiences/{id}',
    handler: handler.deleteExperience,
  },
];

module.exports = routes;
