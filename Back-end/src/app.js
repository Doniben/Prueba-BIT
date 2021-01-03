const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express()

app.use(cors({origin: "http://localhost:4200"}));
app.set('port', process.emit.PORT || 4000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/courses", require('./routes/courses.routes'))

module.exports = app;