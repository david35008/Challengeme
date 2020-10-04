require('dotenv').config(); 
module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD || null,
    "database": "challenge",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {"underscored": true}
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "challenge_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {"underscored": true}
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "challenge_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {"underscored": true}
  }
}
