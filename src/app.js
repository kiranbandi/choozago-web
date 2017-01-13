import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { NotFound,Home,ParkCar,QRCode } from './pages';
import { Container } from './components';

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

ReactDOM.render(<App />, document.getElementById('root'))