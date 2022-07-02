const Joi = require('joi');

const AboutPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  description: Joi.string(),
  address: Joi.string(),
  gmaps: Joi.string().allow('', null),
  telp: Joi.number().allow('', null),
  github: Joi.string().allow('', null),
  facebook: Joi.string().allow('', null),
  instagram: Joi.string().allow('', null),
  twitter: Joi.string().allow('', null),
  pinterest: Joi.string().allow('', null),
  linkedin: Joi.string().allow('', null),
});

module.exports = {AboutPayloadSchema};
