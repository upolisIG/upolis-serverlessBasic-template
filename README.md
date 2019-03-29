# UPolis Service

## Introduction

TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project.

## Getting Started

Guide developers through getting your code up and running on their own system. In this section you can talk about:

### Pre-requisites

1. Node.js v6.5.0 or later.
2. Serverless CLI v1.9.0 or later. You can run npm install -g serverless to install it.
3. An AWS account. Set-up your provider credentials following [these instructions](https://serverless.com/framework/docs/providers/aws/guide/credentials/).

### Software dependencies (Production)

|Dependency|Install|
|-|-|
|[Express](https://expressjs.com/es/)|npm install --save express|
|[Serverless HTTP](https://www.npmjs.com/package/serverless-http)|npm install --save serverless-http|
|[AWS](https://aws.amazon.com/es/sdk-for-node-js/)|npm install --save aws-sdk|
|[Body Parser](https://www.npmjs.com/package/body-parser)|npm install --save body-parser|

### Software dependencies (Development)

|Dependency|Install|
|-|-|
|[Mocha](https://mochajs.org/)|npm install --save-dev mocha|
|[Chai](https://www.chaijs.com/)|npm install --save-dev chai|
|[Nock](https://www.npmjs.com/package/nock)|npm install --save-dev nock|


# Build, Test and Deploy

``
npm install

npm test        ** Test package function

npm deploy      ** Deploy in development stage
npm deploy-qa   ** Deploy in qa stage
npm deploy-prod ** Deploy in production stage
```