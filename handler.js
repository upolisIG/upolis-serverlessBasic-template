"use strict";

const serverless = require('serverless-http');
const express = require('express');
const HttpStatus = require("http-status-codes");
const app = express();
const validate = require("./validate").validate;

app.get('/', function (req, res) {
  let respose = validate(req.body);

  if (respose.code === 200) {
    res.status(200).send('Hello World!');
  } else {
    res.status(500).send('Fail!');
  }
});

module.exports.main = serverless(app);
