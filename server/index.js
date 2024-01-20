require('dotenv').config();
const https = require('https');
const fs = require('fs');
const app = require('./app');

const port = process.env.PORT || 80;
const spliceIpAddress = process.env.IP_ADDRESS.lastIndexOf(':');
const ipAddress = process.env.IP_ADDRESS.substr(0, spliceIpAddress + 1);
const env = process.env.NODE_ENV || 'development';
const establishNgrokConnection = require('./helpers/ngrokConnection');

// if (env === 'development') {
//   establishNgrokConnection();
// }

if (env !== 'development') {
  const options = {
    key: fs.readFileSync('./private-key.pem'),
    cert: fs.readFileSync('./certificate.pem'),
  };
  https.createServer(options, app).listen(443);
}
app.listen(port, () => {
  console.log(`ChallengeMe listening at ${ipAddress}${port}`);
});
