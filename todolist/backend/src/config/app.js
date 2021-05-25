const port = 3001;

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const allowCors = require('./cors');

app.use(bodyParser.urlencoded({extended: true, }));
app.use(bodyParser.json());
app.use(allowCors);

app.listen(port, function(){
    console.log('Backend rodando na porta 3001');
});

module.exports = app;