import React, { Component } from 'react';

export default  class Login extends Component {

constructor(props) {
        super(props);

        this.testAPI=this.testAPI.bind(this);
        this.statusChangeCallback=this.statusChangeCallback.bind(this);
        this.checkLoginState=this.checkLoginState.bind(this);
        this.handleClick=this.handleClick.bind(this);
}


componentDidMount() {
  window.fbAsyncInit = function(){

    FB.init({
      appId      : '393366520998967',
      cookie     : true,  
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.1' // use version 2.1
    });

   FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  	}.bind(this);

}

testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
  console.log('Successful login for: ' + response.name);
})
}


statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.

  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    this.testAPI();
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
    'into Facebook.';
  }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
checkLoginState() {
  FB.getLoginStatus(function(response) {
    this.statusChangeCallback(response);
  }.bind(this));
}

handleClick() {
  FB.login(this.checkLoginState());
}

  render () {
    return (
		        <div className='login-container container col-lg-4 col-lg-offset-4 col-xs-10 col-xs-offset-1'>
			        
			        <span className="icon icon-user login-icon" role="login indicator">
					</span>
					<div className="hr-divider">
					  <h3 className="hr-divider-content hr-divider-heading">
					    USER LOGIN
					  </h3>
					</div>

					<button className="btn btn-primary-outline fb-btn" onClick={this.handleClick} type="button">
					  <span className="icon icon-facebook"></span>
					  <strong> Login with Facebook</strong>
					</button>

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
					
					<button className="btn btn-success-outline admin-btn" type="button">
						Login as Admin
					</button>

	  				</div>

		        </div>
    )
  }
};
