require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'challenge',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
    define: {
      underscored: true,
      paranoid: true,
    },
    logging: false,
    // "seederStorage": "sequelize",
    // "seederStorageTableName": "sequelize_seeds"
  },
  test: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_TEST || 'challenge_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
    define: { underscored: true },
    logging: false,
  },
  production: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'challenge',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
    define: {
      underscored: true,
      paranoid: true,
    },
  },
};
