const path = require('path');

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
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'GET',
    path: '/about/image/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, '../../public/images'),
      },
    },
  },
  {
    method: 'PUT',
    path: '/about/image',
    handler: handler.putAboutImage,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 512000,
      },
      auth: 'reskimulud_jwt',
    },
  },
];

module.exports = routes;
