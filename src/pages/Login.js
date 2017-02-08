import React, { Component } from 'react';
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { userPool } from "../utils/getUserPool";


export default  class Login extends Component {

constructor(props) {
        super(props);
}


makeCall(e){
	
	e.preventDefault();
	
    const username= document.getElementById('adminId').value;
    const password= document.getElementById('adminPassword').value;
        
    let authenticationData= {
        Username: username,
        Password: password,
            
        };
            
        let userData= {
        Username:username,
        Pool: userPool
        }
            
        var cognitoUser= new CognitoUser(userData);
        
        let authenticationDetails= new AuthenticationDetails(authenticationData);
            
        cognitoUser.authenticateUser( authenticationDetails, {
            onSuccess: function (result) {
                    console.log('access token + ' + result.getAccessToken().getJwtToken());
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
        }

  render () {
    return (
        <div className='login-container container col-lg-4 col-lg-offset-4 col-xs-10 col-xs-offset-1'>
        	        
        <span className="icon icon-user login-icon" role="login indicator">
        			</span>
        
        <div className="hr-divider">
        <h4 className="hr-divider-content hr-divider-heading">
        			  ADMIN LOGIN
        			  </h4>
        			</div>
        
        <div className="admin-box">
        <div className="input-group m-a">
        <span className="input-group-addon icon icon-users"></span>
        <input type="text" className="form-control" id="adminId" placeholder="USERID"/>
        		  	</div>
        
        <div className="input-group m-a">
        <span className="input-group-addon icon icon-lock"></span>
        <input type="password" className="form-control" id="adminPassword" placeholder="PASSWORD"/>
        		  	</div>
        			
        <button className="btn btn-success-outline admin-btn" type="button" onClick={this.makeCall}>
        				LOGIN
        			</button>
        
          			</div>
        
                </div>
    )
  }
};

