var fs = require('fs')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var buf = fs.readFileSync("index.html", "utf8");
  response.writeHead(200, {"Content-type":"text/html"});
  response.write(buf);
  response.end();
  //response.send('Hello World2!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
