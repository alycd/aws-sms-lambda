# AWS SMS Lambda

A simple Node.js application illustrating usage of the AWS SDK for sending SMS.

## Requirements

The only requirement of this application is the Node Package Manager. All other
dependencies (including the AWS SDK for Node.js) can be installed with:

    npm install


## Basic Configuration

You need to set up your AWS security credentials before the sample code is able
to connect to AWS. You can do this by editing the `config.json` file. Ultimately, it would be better to use Environment Variables inside Lambda.

Although you dont need to set anything up in the AWS SNS console specifically, you will need a user with the proper IAM roles for SNS. Notably, [AmazonSNSFullAccess](https://console.aws.amazon.com/iam/home?region=us-west-2#policies/arn:aws:iam::aws:policy/AmazonSNSFullAccess)

```json
{ 
    "accessKeyId": "{Your Key}", 
    "secretAccessKey": "{Your Secret}", 
    "region": "us-west-2" 
}

```



## Running the Sample Locally

First, install `lambda-local` here : https://www.npmjs.com/package/lambda-local 

    npm install -g lambda-local
After installation, you can use this command to test locally. be sure to edit the `event-samples/event.js` file first.

```javascript
// Sample event data 
module.exports = {
    	subject: "hello",
		message: "hello from AWS",
		phonenumber: "+15551234567"
};
```

Now use lambda-local to trigger the function, and hopefully you will get a text message.

```bash
lambda-local -l index.js -h handler -e event-sample/event.js
```



## Deployment

Automating Lambda deploys from the CLI will definitely save you time.

Here's a sample script that zips up the aws-sms-lambda folder and uploads it to AWS.

You will have to create the function in the AWS console first, then use this script.

```shell
rm aws-sms-lambda.zip 
7za a -r aws-sms-lambda.zip ../aws-sms-lambda/*
aws lambda update-function-code --function-name aws-sms-lambda --zip-file fileb://aws-sms-lambda.zip
```



## License

This sample application is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

