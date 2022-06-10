const Joi = require('joi');

const ServicesPayloadSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow('', null),
  icon: Joi.string().required(),
});

module.exports = { ServicesPayloadSchema };
