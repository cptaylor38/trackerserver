const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 5000;

const mongoURI =
  'mongodb+srv://cylordev:mdbpassword@cluster0.ykymj.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance.');
});
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
