const path = require('path');

const routes = (handler) => [
  {
    method: 'GET',
    path: '/portfolio',
    handler: handler.getPortfolio,
  },
  {
    method: 'GET',
    path: '/portfolio/{id}',
    handler: handler.getPortfolioById,
  },
  {
    method: 'POST',
    path: '/portfolio',
    handler: handler.postPortfolio,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/portfolio/{id}',
    handler: handler.putPortfolio,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/portfolio/{id}',
    handler: handler.deletePortfolio,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'POST',
    path: '/portfolio/categories',
    handler: handler.postPortfolioCategory,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/portfolio/categories/{id}',
    handler: handler.putPortfolioCategoryById,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/portfolio/categories/{id}',
    handler: handler.deletePortfolioCategoryById,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
  {
    method: 'GET',
    path: '/portfolio/image/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, '../../public/images'),
      },
    },
  },
  {
    method: 'POST',
    path: '/portfolio/{id}/image',
    handler: handler.postPortfolioImageById,
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
  {
    method: 'DELETE',
    path: '/portfolio/{id}/image/{fileName}',
    handler: handler.deletePortfolioImageById,
    options: {
      auth: 'reskimulud_jwt',
    },
  },
];

module.exports = routes;
