const { EducationsPayloadSchema } = require('./schema');

const EducationsValidator = {
  validateEducationsPayload: (payload) => {
    const validationResult = EducationsPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw validationResult.error;
    }
  },
};

module.exports = EducationsValidator;
