require('dotenv').config()
const ngrok = require('ngrok');
const app = require('./app');
const port = process.env.PORT || 8080
const env = process.env.NODE_ENV || 'development'
const getCurrentBranch = require('./helpers/getCurrentBranch')

async function establishConnection(){
  process.env.MY_BRANCH = await getCurrentBranch();
  console.log('current branch' , process.env.MY_BRANCH);

  if(env === 'development'){
    const url = await ngrok.connect(port);
    process.env.MY_URL = url;
    console.log('MY_URL' ,process.env.MY_URL);
  }
  console.log('Client Ip Address', process.env.IP_ADDRESS);
}

establishConnection(); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})