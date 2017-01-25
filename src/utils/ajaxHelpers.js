/*global $ */
import endPoints from './endPoints';
import lambda from './getLambda';

var ajaxHelpers = {};

// Parameters required for invoking Lambda function
var pullParams = {
  FunctionName : 'choozago-api',
  InvocationType : 'RequestResponse',
  LogType : 'None'
};


ajaxHelpers.getTicketData = function(ticketId) {
    
    let payLoad =JSON.stringify({ action: "getTicket", data: { ticketId } },null,2) ,
        pullParamsData = Object.assign({},pullParams,{Payload:payLoad})

    return $.Deferred(function( defer ) {
        
        lambda.invoke(pullParamsData, function(error, data) {
          
          if (error) {
                console.log(error);
                defer.reject();
          } 
          else {

            var ticketStatus = JSON.parse(data.Payload);
            defer.resolve(ticketStatus);
            
          }
        });
    
    }).promise();

  }
  
  
ajaxHelpers.getLoginToken = function(userid,password) {
    
    return $.Deferred(function( defer ) {
        defer.resolve('abc'); 
        }).promise();

  }
  
module.exports = ajaxHelpers;