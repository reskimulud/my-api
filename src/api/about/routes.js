const routes = (handler) => [
  {
    method: 'GET',
    path: '/about',
    handler: handler.getAbout,
  },
  {
    method: 'PUT',
    path: '/about/{id}',
    handler: handler.putAbout,
  },
];

module.exports = routes;
