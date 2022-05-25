const Joi = require('joi');

const ExperiencesPayloadSchema = Joi.object({
  job_title: Joi.string().required(),
  company_name: Joi.string().required(),
  type: Joi.string().required(),
  start: Joi.string().required(),
  until: Joi.string().allow('', null),
  is_resigned: Joi.number().max(1).required().allow(0, 1),
  description: Joi.string().required(),
});

module.exports = { ExperiencesPayloadSchema };
