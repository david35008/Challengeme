require('dotenv').config()
const ngrok = require('ngrok');
const app = require('./app');
const checkActions = require('./lib/check-actions');
const port = process.env.PORT || 4040

async function establishConnection(){
  //const apiUrl = ngrok.getUrl();
  console.log(process.env.NODE_ENV)
  if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'){
    const url = await ngrok.connect(port);
    process.env.MY_URL = url; 
  }
  console.log(process.env.MY_URL);
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
 // setInterval(checkActions, 10000) // todo: Make Submissions Update without Me
}
establishConnection();  // node env development




