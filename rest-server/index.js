require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require('path');
const router = require('./routes');
const parser = require('body-parser');
const db = require('./SQL');

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use('/api', router)
app.use(express.static(path.resolve(__dirname, '../client/public')));
app.listen(PORT, function(){
  console.log('Server is up and listening on PORT:', PORT);
})
