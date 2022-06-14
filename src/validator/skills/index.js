const InvariantError = require('../../exception/InvariantError');
const {SkillsPayloadSchema, SkillsCategoryPayloadSchema} = require('./schema');

const SkillsValidator = {
  validateSkillsPayload: (payload) => {
    const validationResult = SkillsPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateSkillsCategoryPayload: (payload) => {
    const validationResult = SkillsCategoryPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = SkillsValidator;
