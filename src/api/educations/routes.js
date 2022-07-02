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
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/educations/{id}',
    handler: handler.putEducation,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/educations/{id}',
    handler: handler.deleteEducation,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
];

module.exports = routes;
