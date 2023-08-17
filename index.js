const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const route = require('./routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().array());

app.use(cors());
app.use(morgan('dev'));

app.use(route);

app.listen(3000, () => {
  console.log('Running on localhost:3000');
});
