const express = require('express'),
  app = express(),
  routes = require('./routes/posts'),
  mongoose = require('mongoose'),
  Post = require('./models/Post');
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/DummyBlogNuxtAndNodeJs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS");
  
  next();
});

routes(app);

app.listen(8080, () => {
  console.log('Server is running at 8080 port.');
});
