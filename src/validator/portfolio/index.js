const InvariantError = require('../../exception/InvariantError');
const {
  PortfolioPayloadSchema,
  PortfolioCategoryPayloadSchema } = require('./schema');

const PortfolioValidator = {
  validatePortfolioPayload: (payload) => {
    const validationResult = PortfolioPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePortfolioCategoryPayload: (payload) => {
    const validationResult = PortfolioCategoryPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = PortfolioValidator;
