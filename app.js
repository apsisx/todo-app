var express = require('express');
var path = require('path');

var app = express();

var isAPI = require('./routes/api')
var isIndex = require('./routes/index')

app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/', isIndex);
app.use('/api', isAPI);


app.use(express.static(path.join(__dirname, 'public')));

var isDefaultPort = 3000
app.listen(isDefaultPort, () => {
    console.log(`Server is running at http://localhost:${isDefaultPort}`)
  })