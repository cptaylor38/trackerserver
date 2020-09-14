const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rxtrackerDb');
app.use('/', routes);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
