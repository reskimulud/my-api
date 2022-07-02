const routes = (handler) => [
  {
    method: 'GET',
    path: '/services',
    handler: handler.getServices,
  },
  {
    method: 'POST',
    path: '/services',
    handler: handler.postServices,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/services/{id}',
    handler: handler.putServices,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/services/{id}',
    handler: handler.deleteServices,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
];

module.exports = routes;
