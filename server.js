let express = require('express');
let app = express();
var sys = require('util');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
