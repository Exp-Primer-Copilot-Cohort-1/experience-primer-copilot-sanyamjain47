// create web server
// run the server: node comment.js
// load http://localhost:3000 in a browser to see it in action

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.send(`
    <form method="POST">
      <input name="comment">
      <button>Submit</button>
    </form>
  `);
});

app.post('/', function(req, res) {
  res.send('Thanks for your comment!');
  console.log(req.body);
});

app.listen(3000, function() {
  console.log('App started on port 3000');
});