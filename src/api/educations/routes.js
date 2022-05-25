const routes = (handler) => [
  {
    method: 'GET',
    path: '/educations',
    handler: handler.getEducations,
  },
  {
    method: 'POST',
    path: '/educations',
    handler: handler.postEducation,
  },
  {
    method: 'PUT',
    path: '/educations/{id}',
    handler: handler.putEducation,
  },
  {
    method: 'DELETE',
    path: '/educations/{id}',
    handler: handler.deleteEducation,
  },
];

module.exports = routes;
