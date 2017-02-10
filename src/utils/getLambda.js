import AWS from 'aws-sdk';
import "../utils/getUserPool";

var lambda = new AWS.Lambda();
module.exports = lambda;