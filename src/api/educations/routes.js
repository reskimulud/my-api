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
];

module.exports = routes;
