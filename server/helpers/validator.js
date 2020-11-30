const Joi = require('@hapi/joi');
const axios = require('axios');

// Register Validation
const registerValidation = (data) => {
  data.birthDate = new Date(data.birthDate).valueOf();
  const schema = Joi.object({
    firstName: Joi.string().min(1).regex(/^[a-zA-Z\s]*$/).required(),
    lastName: Joi.string().min(1).regex(/^[a-zA-Z\s]*$/).required(),
    userName: Joi.string().min(1).max(32).regex(/^[a-zA-Z0-9]*$/)
      .required(),
    email: Joi.string().min(6).email().required(),
    country: Joi.string().min(1).regex(/^[a-zA-Z\s]*$/).required(),
    city: Joi.string().min(1).regex(/^[a-zA-Z\s]*$/).required(),
    birthDate: Joi.number().max((new Date()).valueOf()).required(),
    phoneNumber: Joi.string().regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).required(),
    securityQuestion: Joi.string().valid('When you were young, what did you want to be when you grew up?', 'Who was your childhood hero?', 'Where was your best family vacation as a kid?', 'What is the name, breed, and color of your favorite pet?', 'What was the first concert you attended?').required(),
    securityAnswer: Joi.string().min(8).regex(/^[\w\s]*$/).required(),
    reasonOfRegistration: Joi.string().min(1).regex(/^[a-zA-Z\s]*$/).required(),
    githubAccount: Joi.string().min(1).regex(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i).required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    userName: Joi.string().min(1).max(32).regex(/^[a-zA-Z0-9]*$/)
      .required(),
    password: Joi.string().min(8).required(),
    rememberMe: Joi.boolean().required(),
  });

  return schema.validate(data);
};

const method = async (value, helpers) => {
  try {
    await axios.get(
      `/api/v1/services/public-repo?repo_name=${value}`,
    );
  } catch (err) {
    return helpers.error('any.invalid');
  }
  return value;
};

const newChallengeValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(100).required(),
    description: Joi.string().min(1).max(500).required(),
    type: Joi.string().valid('client-only', 'fullstack-mysql', 'fullstack', 'server-mysql', 'server-only').required(),
    repositoryName: Joi.string().custom(method, 'custom1').required(),
    boilerPlate: Joi.string().custom(method, 'custom2').required(),
    authorId: Joi.number().required(),
  });

  return schema.validate(data);
};

// User Validation
const userValidation = (data) => {
  const schema = Joi.object({
    userName: Joi.string().min(1).max(32).regex(/^[a-zA-Z0-9]*$/)
      .required(),
  });

  return schema.validate(data);
};

// Token Validation
const tokenValidation = (data) => {
  const schema = Joi.object({
    token: Joi.string().required(),
  });

  return schema.validate(data);
};

// Answer Validation
const answerValidation = (data) => {
  const schema = Joi.object({
    userName: Joi.string().min(1).max(32).regex(/^[a-zA-Z0-9]*$/)
      .required(),
    securityAnswer: Joi.string().min(8).regex(/^[\w\s]*$/).required(),
  });

  return schema.validate(data);
};

// Password Update Validation
const pwdUpdateValidation = (data) => {
  const schema = Joi.object({
    resetToken: Joi.string().required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data);
};

module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
module.exports.userValidation = userValidation;
module.exports.tokenValidation = tokenValidation;
module.exports.pwdUpdateValidation = pwdUpdateValidation;
module.exports.answerValidation = answerValidation;
module.exports.newChallengeValidation = newChallengeValidation;
