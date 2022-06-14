const InvariantError = require('../../exception/InvariantError');
const { ExperiencesPayloadSchema } = require('./schema');

const ExperiencesValidator = {
  validateExperiencesPayload: (payload) => {
    const validationResult = ExperiencesPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = ExperiencesValidator;
