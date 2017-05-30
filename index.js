var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

var sns = new AWS.SNS();

exports.handler = (event, context, callback) => {

	var params = {
		Subject: event.subject,
		Message: event.message,
		MessageStructure: 'string',
		PhoneNumber: event.phonenumber
	};

	sns.publish(params, function(err, data) {
		if (err) {
			console.log(err, err.stack); // an error occurred
			callback(null, {
				statusCode: 500,
				body: JSON.stringify(err),
				headers: {
					'Content-Type': 'application/json'
				}
			});
		} else {
			console.log(data); // successful response
			callback(null, {
				statusCode: 200,
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			});

		}
	});


};