require('dotenv').config();

const Hapi = require('@hapi/hapi');
const path = require('path');
const Inert = require('@hapi/inert');
const Jwt = require('@hapi/jwt');

const ClientError = require('./exception/ClientError');

// about
const about = require('./api/about');
const AboutService = require('./service/mysql/AboutService');
const AboutValidator = require('./validator/about');

// skills
const skills = require('./api/skills');
const SkillsService = require('./service/mysql/SkillsService');
const SkillsValidator = require('./validator/skills');

// experiences
const experiences = require('./api/experiences');
const ExperiencesService = require('./service/mysql/ExperiencesService');
const ExperiencesValidator = require('./validator/experiences');

// educations
const educations = require('./api/educations');
const EducationsService = require('./service/mysql/EducationsService');
const EducationsValidator = require('./validator/educations');

// services
const services = require('./api/services');
const ServicesService = require('./service/mysql/ServicesService');
const ServicesValidator = require('./validator/services');

// portfolio
const portfolio = require('./api/portfolio');
const PortfolioService = require('./service/mysql/PortfolioService');
const PortfolioValidator = require('./validator/portfolio');

// uploads
const StorageService = require('./service/storage/StorageService');
const UploadsValidator = require('./validator/uploads');

const init = async () => {
  const aboutService = new AboutService();
  const skillsService = new SkillsService();
  const experiencesService = new ExperiencesService();
  const educationsService = new EducationsService();
  const servicesService = new ServicesService();
  const portfolioService = new PortfolioService();
  const storageService = new StorageService(__dirname, 'public/images');

  const server = Hapi.server({
    host: process.env.NODE_ENV !== 'production' ?
      'localhost' :
      'api.reskimulud.my.id',
    port: process.env.NODE_ENV !== 'production' ? 5000 : 443,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    { plugin: Inert }, { plugin: Jwt },
  ]);

  // defines strategy authentications
  server.auth.strategy('reskimulud_jwt', 'jwt', {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
    },
    validate: (artifacts) => ({
      isValid: true,
      credentials: {
        id: artifacts.decoded.payload.id,
      },
    }),
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, 'public'),
        index: ['index.html'],
      },
    },
  });

  await server.register([
    {
      plugin: about,
      options: {
        service: aboutService,
        validator: AboutValidator,
      },
    },
    {
      plugin: skills,
      options: {
        service: skillsService,
        validator: SkillsValidator,
      },
    },
    {
      plugin: experiences,
      options: {
        service: experiencesService,
        validator: ExperiencesValidator,
      },
    },
    {
      plugin: educations,
      options: {
        service: educationsService,
        validator: EducationsValidator,
      },
    },
    {
      plugin: services,
      options: {
        service: servicesService,
        validator: ServicesValidator,
      },
    },
    {
      plugin: portfolio,
      options: {
        portfolioService,
        storageService,
        portfolioValidator: PortfolioValidator,
        uploadsValidator: UploadsValidator,
      },
    },
  ]);

  // extension
  server.ext('onPreResponse', (request, h) => {
    const {response} = request;

    if (response instanceof ClientError) {
      const newResponse = h.response({
        status: 'fail',
        message: response.message,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    return h.continue;
  });

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();
