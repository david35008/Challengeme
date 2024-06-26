require('dotenv').config();
const getCurrentBranch = require('./getCurrentBranch');

async function establishNgrokConnection() {
  process.env.MY_BRANCH = await getCurrentBranch();
  console.log('current branch', process.env.MY_BRANCH);
  const ngrok = require('ngrok');
  const ngrok_port = process.env.PORT;
  console.log('ngrok_port', ngrok_port);
  const url = await ngrok.connect(ngrok_port);
  process.env.MY_URL = url;
  console.log('MY_URL', process.env.MY_URL);
  console.log('Client Ip Address', process.env.IP_ADDRESS);
}

module.exports = establishNgrokConnection;
