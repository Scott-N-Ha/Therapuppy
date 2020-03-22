const  AWS = require("aws-sdk");
const  keys = require("../../config/keys");

const s3bucket =  new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    region: "us-west-2"
})

const fetchUrl = function(puppy) {
  const urlParams = {
    Bucket: "therapuppy-test",
    Key: puppy.s3Key
  };
  
  return s3bucket.getSignedUrl("getObject", urlParams);
}
  
exports.s3bucket = s3bucket;
exports.fetchUrl = fetchUrl;