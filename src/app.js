import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { NotFound,Home,ParkCar,Dashboard,Login} from './pages';
import { Container } from './components';

//Root sass file for webpack to compile
import './sass/main.scss';

class App extends Component {
  
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='ParkCar/:ticketId' component={ParkCar} />
          <Route path='Login' component={Login} />
          <Route path='Dashboard' component={Dashboard} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
  
}

ReactDOM.render(<App />, document.getElementById('root'))