const express = require('express');
const request = require('request');
const app = express();

app.use('/', (req, res) => {
  const url = 'https://1v1.lol/' + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(3000, () => {
  console.log('Proxy running on http://localhost:3000');
});
