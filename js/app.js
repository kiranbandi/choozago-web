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

const Container = (props) => <div>
  {props.children}
</div>


export default App