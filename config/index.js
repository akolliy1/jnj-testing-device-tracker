const dotenv = require('dotenv');
const path = require('path');
const Joi = require('@hapi/joi');

dotenv.config({ path: path.join(__dirname, '../.env') });

const envVarsSchema = Joi.object()
  .keys({
    // env
    NODE_ENV: Joi.any().default('production'),

    // port
    PORT: Joi.any().default(3000),

    // CORE_BASE_URL: Joi.string().uri().required().description('Core base url'),

    // mongo
    MONGO_URL: Joi.string().required().description('Mongo DB url'),

    // client url

    // JWT
    JWT_KEY: Joi.string().required().description('JWT secret key'),
    JWT_TOKEN_VALIDATON_DURATION: Joi.string()
      .default('1h')
      .description('duration for access tokens to expire')
      .required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,

  core: {
    url: envVars.CORE_BASE_URL,
  },

  mongoose: {
    url: envVars.MONGO_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
    options: {
      useNewUrlParser: true,
      useFindAndModify: false,
    },
  },

  jwt: {
    secret: envVars.JWT_KEY,
    token_validation_period: envVars.JWT_TOKEN_VALIDATON_DURATION,
  },
};
