/* eslint-disable camelcase */
const Joi = require('joi');

const PortfolioPayloadSchema = Joi.object({
  project_name: Joi.string().required(),
  category_id: Joi.number().required(),
  project_brief: Joi.string().allow('', null),
  client: Joi.string().allow('', null),
  tools: Joi.string().allow('', null),
  link: Joi.string().allow('', null),
  date: Joi.number().required(),
});

const PortfolioCategoryPayloadSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = { PortfolioPayloadSchema, PortfolioCategoryPayloadSchema };
