import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import { NotFound,Home,ParkCar,QRCode } from './components'

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='QRCode/:ticketId' component={QRCode} />
          <Route path='ParkCar/:ticketId' component={ParkCar} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Container = (props) => 
<div id='app-container'>
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand navbar-brand-emphasized" href='lorem'>
          <span className="icon icon-home navbar-brand-icon"></span>
          Home
        </a>
      </div>
      <div id="navbar" className="navbar-collapse collapse ">
        <ul className="nav navbar-nav">
          <li>
            <a href='lorem'>
              <span className="icon icon-location"></span>
              Book Ticket
            </a>
          </li>
          <li>
         
            <a href='lorem'>
             <span className="icon icon-eye"></span>View Ticket</a>
          </li>
          <li >
          
            <a href='lorem'>
            <span className="icon icon-cross"></span>
            Cancel Ticket</a>
          </li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
          <li> 
            <a href='lorem'>
            <span className="icon icon-user"></span>
            LOGIN</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {props.children}
</div>


export default App