const routes = (handler) => [
  {
    method: 'GET',
    path: '/about',
    handler: handler.getAbout,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/about/{id}',
    handler: handler.putAbout,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
];

module.exports = routes;
