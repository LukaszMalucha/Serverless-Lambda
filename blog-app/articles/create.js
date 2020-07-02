'use strict';

module.exports.handler = async (event, context) => {

  const data = JSON.parse(event.body);
  if (data.text && typeof data.text !== 'string') {
    console.error('Validation Failed');
    return;
    }
    console.log(data.text);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Created Article.'
      }),
    };
    return response;
};
