var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

var params = {
 DelaySeconds: 10,
 MessageAttributes: {
  "Title": {
    DataType: "String",
    StringValue: "The Title"
   },
  "Author": {
    DataType: "String",
    StringValue: "Nobody!"
   }
 },
 MessageBody: "Writing a JSON object to SQS..",
 QueueUrl: "QUEUE_URL"
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(data)
    console.log("Success", data.MessageId);
  }
});


