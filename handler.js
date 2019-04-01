"use strict";

const serverless = require('serverless-http');
const express = require('express');
const HttpStatus = require("http-status-codes");
const app = express()
const validate = require("./validate").validate;

app.get('/', function (req, res) {
  let respose = validate(req.body);

  if (respose.code === HttpStatus.OK) {
    res.status(HttpStatus.OK).send('Hello World!');
  } else {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Fail!');
  }
});

module.exports.main = serverless(app);
