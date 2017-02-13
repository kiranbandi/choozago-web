/*global $*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { NotFound,Home,ParkCar,Dashboard,Login} from './pages';
import { Container } from './components';

import configureStore from './redux/store/configureStore';  
import { Provider } from 'react-redux';


//Root sass file for webpack to compile
import './sass/main.scss';

//Initial Default settings 
window.jQuery = window.$; // QuickFix for toastr error
const store = configureStore();

class App extends Component {
  
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='ParkCar/:ticketId' component={ParkCar} />
            <Route path='Login' component={Login} />
            <Route path='Dashboard' component={Dashboard} onEnter= {requireAuth}/>
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </Provider>
    )
  }
  
}

ReactDOM.render(<App/>, document.getElementById('root'))



function requireAuth(nextState, replace) {  
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
