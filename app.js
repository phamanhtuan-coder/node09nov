const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const parseUrl = req.url.split('/');
  let data = "";

  switch(parseUrl[1]){
    case "":
    case 'home': {
      data = fs.readFileSync('./pages/index.html', 'utf8');
      res.end(data);
      break;
    }
    case 'detail': {
      if (parseUrl.length < 3) {
        data = fs.readFileSync('./pages/404.html', 'utf8');
        res.end(data);
      } else {
        data = fs.readFileSync('./pages/detail.html', 'utf8');
        data = data.toString().replace('{{id}}', parseUrl[2]);
        res.end(data);
      }
      break;
    }
    default: {
      data = fs.readFileSync('./pages/404.html', 'utf8');
      res.end(data);
      break;
    }
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
