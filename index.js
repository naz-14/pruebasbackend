const express = require('express');
const app = express();

app.get("/", (req, resp)=> {
  resp.send('Hola mundo');
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('server on port 3000')
})