const express = require('express');
const app = express();
const PORT = 8888;

app.use('/css', express.static('css'));
app.use('/asset', express.static('asset'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(PORT, ()=> console.log('http://localhost:' + PORT));
