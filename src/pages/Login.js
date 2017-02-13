import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../redux/actions/sessionActions';


class Login extends Component {

constructor(props) {
        super(props);
        this.state = {
            firstTime:false,
            credentials:{
                username:'',
                password:''
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
}

onChange(event) {
      const field = event.target.name;
      const credentials = this.state.credentials;
      credentials[field] = event.target.value;
      return this.setState({ credentials });
}

onSubmit(e){
	e.preventDefault();
	this.props.actions.logInUser(this.state.credentials);
}

  render () {
    return (
        <div className='login-container container col-lg-4 col-lg-offset-4 col-xs-10 col-xs-offset-1'>
        	        
            <span className="icon icon-user login-icon" role="login indicator"></span>
            
            <div className="hr-divider">
            <h4 className="hr-divider-content hr-divider-heading">ADMIN LOGIN</h4>
            </div>
        
            <div className="admin-box">
                <div className="input-group m-a">
                    <span className="input-group-addon icon icon-users"></span>
                    <input type="text" className="form-control" name="username" placeholder="USERID" onChange={this.onChange}/>
                </div>
                <div className="input-group m-a">
                    <span className="input-group-addon icon icon-lock"></span>
                    <input type="password" className="form-control" name="password" placeholder="PASSWORD" onChange={this.onChange}/>
                </div>
                <button className="btn btn-success-outline admin-btn" type="button" onClick={this.onSubmit}>
                	LOGIN
                </button>
      		</div>

        </div>
    )
  }
};

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null,mapDispatchToProps)(Login);