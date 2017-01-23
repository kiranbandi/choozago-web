import React, { Component } from 'react';
import {Link} from 'react-router';

export default  class NotFound extends Component {
  render () {
    return (
		        <div className='not-found container m-t'>
		          <div className="alert alert-danger text-center" role="alert">
					  <h3><strong>Oh snap! 404 Error! Page Not Found </strong></h3> 
					</div>
					<div className="well well-lg align-center">
					    <strong>Seems like you too a wrong turn and landed here or maybe our developer has been too lazy and the page you
					    are trying to view is still under development , But then we do need to cut him some slack as you can see below he
					    has his share of problems in life.Please click <Link to='/'>HERE</Link> to head back home.</strong>
						<img className='img-responsive error-image' src="assets/img/404.jpg" alt="Error Image" />
					 </div>

		        </div>
    )
  }
};
