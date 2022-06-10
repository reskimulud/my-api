const { ServicesPayloadSchema } = require('./schema');

const ServicesValidator = {
  validateServicePayload: (payload) => {
    const validationResult = ServicesPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw validationResult.error;
    }
  },
};

module.exports = ServicesValidator;
