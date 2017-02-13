import * as types from './actionTypes';  

import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { userPool } from "../../utils/getUserPool";

export function loginSuccess() {  
  return {type: types.LOG_IN_SUCCESS}
}

export function logOutUser() {  
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT}
}


export function logInUser(credentials) {
    
        let authenticationData= {
        Username: credentials.username,
        Password: credentials.password,
        };
            
        let userData= {
        Username:credentials.username,
        Pool: userPool
        }
        
        var cognitoUser= new CognitoUser(userData);
        var authenticationDetails= new AuthenticationDetails(authenticationData);
        
        
  return function(dispatch) {
      
    return cognitoUser.authenticateUser( authenticationDetails, {
            onSuccess: function (result) {
                    console.log('access token + ' + result.getAccessToken().getJwtToken());
                    sessionStorage.setItem('jwt', result.getAccessToken().getJwtToken());
                    dispatch(loginSuccess());
                    
                },
            onFailure: function(err) {
                    alert(err);
                },
            newPasswordRequired: function(userAttributes, requiredAttributes) {
                // User was signed up by an admin and must provide new 
                // password and required attributes, if any, to complete 
                // authentication.
                
                // the api doesn't accept this field back
                delete userAttributes.email_verified;
                delete userAttributes.phone_number_verified
    
                // Get these details and call 
                cognitoUser.completeNewPasswordChallenge('Tesla.1993', userAttributes , this);
            }
    });
    
  };
  
  
}


            


    
    