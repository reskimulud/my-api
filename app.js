require('dotenv').config();

const Hapi = require('@hapi/hapi');

// about
const about = require('./src/api/about');
const AboutService = require('./src/service/mysql/AboutService');
const AboutValidator = require('./src/validator/about');

// skills
const skills = require('./src/api/skills');
const SkillsService = require('./src/service/mysql/SkillsService');
const SkillsValidator = require('./src/validator/skills');

// experiences
const experiences = require('./src/api/experiences');
const ExperiencesService = require('./src/service/mysql/ExperiencesService');

const init = async () => {
  const aboutService = new AboutService();
  const skillsService = new SkillsService();
  const experiencesService = new ExperiencesService();

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
      },
    },
  ]);

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();
