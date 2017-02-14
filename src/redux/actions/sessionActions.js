import * as types from './actionTypes';
import toastr from '../../utils/toastr';

import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { userPool } from "../../utils/getUserPool";



var CognitoUserReference = (function () {
    
    var cognitoUser,username,awsUserAttributes,authenticationDetails;

    function createCognitoUser(credentials) {
      
    let authenticationData= { Username: credentials.username, Password: credentials.password };
    let userData= { Username:credentials.username, Pool: userPool };
    username= credentials.username;
    cognitoUser= new CognitoUser(userData);
    authenticationDetails= new AuthenticationDetails(authenticationData); 
    
    }
 
    return {
        getCognitoUser: function (credentials) {
            if ( !cognitoUser ||  username!=credentials.username ) {
                createCognitoUser(credentials);
            }
            return { cognitoUser, authenticationDetails, awsUserAttributes };
        },
        setAwsAttributes: function (awsUserAttributesProps) {
            awsUserAttributes = awsUserAttributesProps ;
        }
    };
})();



export function loginSuccess() {  
  return {type: types.LOG_IN_SUCCESS};
}

export function logOutUser() {  
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT};
}

export function toggleLoader() {  
  return {type: types.TOGGLE_LOADER};
}

export function toogleFirstTimePasswordNeeded() {  
  return {type: types.FIRST_TIME_PASSWORD};
}

export function setNewPassword(credentials) {

   return function(dispatch) {
     
     let { cognitoUser , awsUserAttributes } = CognitoUserReference.getCognitoUser(credentials);   
     
     // the api doesn't accept this field back
        delete awsUserAttributes.email_verified;
        delete awsUserAttributes.phone_number_verified;

    return cognitoUser.completeNewPasswordChallenge(credentials.password,awsUserAttributes,{
       onSuccess: function (result) {
                   toastr["success"]("Your new password has been set , Please login again");
                    dispatch(toggleLoader());
                    dispatch(toogleFirstTimePasswordNeeded());
                },
      onFailure: function(err) {
              toastr["error"](err.message, "PASSWORD CHANGE ERROR");
              dispatch(toggleLoader());
          }
    });
    
  };
}

export function logInUser(credentials) {
  
  return function(dispatch) {
    
    let { cognitoUser , authenticationDetails } = CognitoUserReference.getCognitoUser(credentials);
    
    return cognitoUser.authenticateUser( authenticationDetails, {
            onSuccess: function (result) {
                    sessionStorage.setItem('jwt', result.getAccessToken().getJwtToken());
                    toastr["success"]("Login Successful");
                    dispatch(loginSuccess());
                },
            onFailure: function(err) {
                    toastr["error"](err.message, "LOGIN ERROR");
                    dispatch(toggleLoader());
                },
            newPasswordRequired: function(userAttributes, requiredAttributes) {
                  dispatch(toogleFirstTimePasswordNeeded());
                  dispatch(toggleLoader());
                  CognitoUserReference.setAwsAttributes(userAttributes);
            }
    });
    
  };
  
  
}


            


    
    