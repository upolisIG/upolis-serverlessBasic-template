"use strict";

const serverless = require('serverless-http');
const bodyParser = require("body-parser");
const express = require('express');
const HttpStatus = require("http-status-codes");
const app = express()
const validate = require("./validate").validate;

const PATH = "/"; // Replace by service path referenced in serverless.yml

app.use(bodyParser.json({ strict: false }));

app.get(PATH, function (req, res) {
  let respose = validate(req.body);

  if (respose.code === HttpStatus.OK) {
    res.status(HttpStatus.OK).send('Hello World!');
  } else {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Fail!');
  }
});

module.exports.main = serverless(app);
