const v1Router = require('express').Router();
const checkToken = require('../../middleware/checkToken');
const checkAdmin = require('../../middleware/checkAdmin');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Authentication
v1Router.use('/auth', require('./auth'));
v1Router.use('/challenges-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

v1Router.use('/webhook', checkToken, require('./webhook'));
v1Router.use('/submissions', checkToken, require('./submissions'));
v1Router.use('/challenges', checkToken, require('./challenges'));
v1Router.use('/users', checkToken, require('./users'));
v1Router.use('/services', checkToken, require('./services'));
v1Router.use('/image', checkToken, require('./image'));
v1Router.use('/types', checkToken, require('./types'));
v1Router.use('/labels', checkToken, require('./labels'));
v1Router.use('/reviews', checkToken, require('./reviews'));
v1Router.use('/insights', checkToken, require('./insightsRoutes'));
v1Router.use('/teams', checkToken, require('./teams'));

// Admin Route Super Protected
v1Router.use('/git', checkToken, checkAdmin, require('./gitTokens'));

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

v1Router.use(unknownEndpoint);

module.exports = v1Router;
