const express = require('express');
const app = express();

app.get("/", (req, resp)=> {
  resp.send('Hola mundo');
})

app.listen(3000, () => {
  console.log('server on port 3000')
})