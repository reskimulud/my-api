const { ServicesPayloadSchema } = require('./schema');

const ServicesValidator = {
  validateServicePayload: (payload) => {
    const validationResult = ServicesPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = ServicesValidator;
