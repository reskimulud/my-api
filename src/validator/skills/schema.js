const Joi = require('joi');

const SkillsPayloadSchema = Joi.object({
  skill: Joi.string().required(),
  percentage: Joi.number().max(100).required(),
  category_id: Joi.number().required(),
});

const SkillsCategoryPayloadSchema = Joi.object({
  category_name: Joi.string().required(),
  position: Joi.number().required(),
});

module.exports = {SkillsPayloadSchema, SkillsCategoryPayloadSchema};
