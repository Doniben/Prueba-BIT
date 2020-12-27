const express = require('express');
const morgan = require('morgan');

const app = express()

app.set('port', process.emit.PORT || 4000);
app.use(morgan('dev'))

app.use("/api/courses", require('./routes/courses.routes'))

module.exports = app;