const {SkillsPayloadSchema, SkillsCategoryPayloadSchema} = require('./schema');

const SkillsValidator = {
  validateSkillsPayload: (payload) => {
    const validationResult = SkillsPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw validationResult.error;
    }
  },
  validateSkillsCategoryPayload: (payload) => {
    const validationResult = SkillsCategoryPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw validationResult.error;
    }
  },
};

module.exports = SkillsValidator;
