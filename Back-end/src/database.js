const mongoose = require("mongoose");

const URI = "mongodb://localhost/mean-courses";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
    .then((db) => console.log('Mongodb is connected'))
    .catch((err) => console.log(err));