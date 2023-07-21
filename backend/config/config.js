const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number()
    .default(5000),
  MONGOOSE_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('development'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false)
    }),
  JWT_SECRET: Joi.string().required()
    .description('JWT Secret required to sign'),
  SECRET: Joi.string().required()
    .description('Secret required'),
  SUCCESS_REDIRECT: Joi.string().required()
    .description('Success login'),
  ERROR_REDIRECT: Joi.string().required()
    .description('Error error'),
  FACEBOOK_CALLBACK_URL: Joi.string().required()
    .description('Facebook callback url'),
  FACEBOOK_SECRET: Joi.string().required()
    .description('Facebook secret'),
  FACEBOOK_APP_ID: Joi.number().required()
    .description('Facebook app id'),
  GOOGLE_CLIENT_ID: Joi.string().required()
    .description('Google client id'),
  GOOGLE_CLIENT_SECRET: Joi.string().required()
    .description('Google client secret'),
  GOOGLE_CALLBACK_URL: Joi.string().required()
    .description('Google callback url'),
  MONGO_HOST: Joi.string().required()
    .description('Mongo DB host url'),
  MONGO_PORT: Joi.number()
    .default(27017)
}).unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  IMAGE_URL:envVars.IMAGE_URL,
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  jwtSecret: envVars.JWT_SECRET,
  secret: envVars.SECRET,
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT
  },
  facebook: {
    callbackURL: envVars.FACEBOOK_CALLBACK_URL,
    clientID: envVars.FACEBOOK_APP_ID,
    clientSecret: envVars.FACEBOOK_SECRET
  },
  google: {
    callbackURL: envVars.GOOGLE_CALLBACK_URL,
    clientID: envVars.GOOGLE_CLIENT_ID,
    clientSecret: envVars.GOOGLE_CLIENT_SECRET
  },
  socialLogin: {
    success: envVars.SUCCESS_REDIRECT,
    error: envVars.ERROR_REDIRECT
  }
  // mail: {
  //   auth: {
  //     user: envVars.EMAIL,
  //     pass: envVars.PASSWORD
  //   }   
  // }
};

module.exports = config;
