const Joi = require('joi');

const ExperiencesPayloadSchema = Joi.object({
  job_title: Joi.string().required(),
  company_name: Joi.string().required(),
  type: Joi.string().required(),
  start: Joi.number().required(),
  until: Joi.number().allow(0, '', null).default(0),
  is_resigned: Joi.number().max(1).required().allow(0, 1),
  description: Joi.string().allow('', null),
});

module.exports = { ExperiencesPayloadSchema };
