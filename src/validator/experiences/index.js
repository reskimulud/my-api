const { ExperiencesPayloadSchema } = require('./schema');

const ExperiencesValidator = {
  validateExperiencesPayload: (payload) => {
    const validationResult = ExperiencesPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw validationResult.error;
    }
  },
};

module.exports = ExperiencesValidator;
