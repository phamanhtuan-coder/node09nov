const express = require('express');
const path = require('path')

const app = express();

const port = 8081;

app.use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})