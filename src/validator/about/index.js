const {AboutPayloadSchema} = require('./schema');

const AboutValidator = {
  validateAlbumPayload: (payload) => {
    const validationResult = AboutPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw validationResult.error;
    }
  },
};

module.exports = AboutValidator;
