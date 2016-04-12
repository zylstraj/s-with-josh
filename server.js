'use strict'
let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let apiRouter = express.Router()
let mongoose = require('mongoose')

require(__dirname + '/routes/user-routes')(apiRouter)
require(__dirname + '/routes/article-routes')(apiRouter)

let DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect(DB_PORT);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});
app.use(bodyParser.json())
app.use('/', apiRouter)


app.listen(3000, () => {
  console.log('server started')
})
