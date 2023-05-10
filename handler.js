const AWS = require('aws-sdk')
let ec2 = new AWS.EC2();
let dynamo = new AWS.DynamoDB.DocumentClient();
   
exports.handler = async function(event) {

  try {
    let ec2_params = {}
    let capacity = await ec2.createCapacityReservation(ec2_params).promise();
    console.log(JSON.stringify(capacity));

    let db_params = {}
    let db = await dynamo.put(db_params).promise();
    console.log(JSON.stringify(db));

    return { 
        statusCode: 200,
        body: "Capacity Provisioned Successfully"
    }

  } catch (err) {
    let statusCode = err.statusCode ? err.statusCode : 400
    let message = err.message ? err.message : "Unable to Reserve Capacity"
    return {
        statusCode: statusCode,
        body: message
    }
  }

}