'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports.handler = async (event, context) => {
  const data = event;
  if (data.text && typeof data.text !== 'string') {
    console.error('Validation Failed');
    return;
  }

  const params = {
    TableName: 'BlogTable',
    Item: {
      article_id: uuid.v1(),
      text: data.text
    },
  };
  const putCallback = (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error("Couldn't save the record"));
      return;
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };
    console.log(response)

  }

  dynamo.put(params, putCallback);

};
