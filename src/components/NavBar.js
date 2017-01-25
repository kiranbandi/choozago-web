/*global $*/
import React, {Component} from 'react';
import {Link} from 'react-router';

export default class NavBar extends Component {
    
    constructor(props) {
            super(props);
    }

    componentDidMount(){

        $('.navbar-collapse').on('click',function(e) {

             var toggle = $(".navbar-toggle").is(":visible");
                if( $(e.target).is('a') && toggle ) {
                    $(this).collapse('hide');
                }
        });

    }
    
  	render() {
		return (
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link data-toggle="collapse" data-target="#navbar" className="navbar-brand navbar-brand-emphasized" to='/'>
                                <span className="icon icon-home navbar-brand-icon"></span> Home
                            </Link>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse ">
                                
                            <ul className='nav navbar-nav'>
                                <li>
                                    <Link to='/Dashboard'>
                                        <span className="icon icon-line-graph"></span> Dashboard
                                    </Link>
                                </li>
                            </ul>
                            
                            <ul className='nav navbar-nav navbar-right'>
                                <li>
                                    <Link to='/Login'>
                                        <span className="icon icon-user"></span> Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
		);
	}
}  