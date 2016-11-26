'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

let app = express();

// tell the app to look for static files in these directories
app.use(webpackMiddleware(compiler,{
	hot:true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('./server/static/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// pass the passport middleware
app.use(passport.initialize());

// load models
require('./server/models')(config);
// load passport strategies
require('./server/passport')(config);


const authCheckMiddleware = require('./server/middlewares/auth-check')(config);
app.use('/mainChat', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/mainChat');
app.use('/auth', authRoutes);
app.use('/mainChat', apiRoutes);

// start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});

