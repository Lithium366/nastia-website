"use strict";

const express = require('express');
const app = express();
const config = require('./config');
const partials = require('express-partials');
const path = require('path');
const http = require('http').Server(app);
const compression = require('compression');

app.use(partials());
app.use(compression());
app.get([
    '/',
    '/portfolio(/illustrations|/sketchbook)?',
    '/resume',
    '/reels'], function (req, res) {
    res.render(path.resolve(__dirname, 'server/views/index.ejs'), {
        config: config
    });
});

// set static content
app.use('/public', express.static(path.resolve(__dirname, 'public'), {
    maxAge: '1w'
}));

// start the server
http.listen(config.server.port, function () {
    console.log('App started');
});

// handle uncaught exceptions
process.on('uncaughtException', function (error) {
    logger.fatal({stack: error.stack}, 'uncaught exception');
    /* eslint-disable no-process-exit */
    process.exit(1);
    /* eslint-enable no-process-exit */
});