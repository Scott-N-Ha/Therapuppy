const  AWS = require("aws-sdk");
const  keys = require("../../config/keys");

const s3bucket =  new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    region: keys.region
})

const fetchUrl = function(puppy) {
  const urlParams = {
    Bucket: keys.bucketName,
    Key: puppy.s3Key
  };
  
  return s3bucket.getSignedUrl("getObject", urlParams);
}
  
exports.s3bucket = s3bucket;
exports.fetchUrl = fetchUrl;