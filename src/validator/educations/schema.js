const Joi = require('joi');

const EducationsPayloadSchema = Joi.object({
  degree: Joi.string().required(),
  school: Joi.string().required(),
  start: Joi.number().required(),
  until: Joi.number().allow(0, '', null).default(0),
  is_graduated: Joi.number().max(1).required().allow(0, 1),
  description: Joi.string().allow('', null),
});

module.exports = { EducationsPayloadSchema };
