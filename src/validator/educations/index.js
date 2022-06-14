const InvariantError = require('../../exception/InvariantError');
const { EducationsPayloadSchema } = require('./schema');

const EducationsValidator = {
  validateEducationsPayload: (payload) => {
    const validationResult = EducationsPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = EducationsValidator;
