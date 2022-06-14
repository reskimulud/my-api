const {AboutPayloadSchema} = require('./schema');
const InvariantError = require('../../exception/InvariantError');

const AboutValidator = {
  validateAlbumPayload: (payload) => {
    const validationResult = AboutPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AboutValidator;
