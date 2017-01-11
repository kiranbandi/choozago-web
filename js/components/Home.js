import React, { Component } from 'react';

class Home extends Component {
  render () {
    return (

    <div className="home-header">
      <div className="container">
       <div className='col-lg-8 text-lg-left text-md-center text-sm-center text-xs-center'><h1>Choozago</h1>
        <p>Your one stop solution to all your parking needs</p>
        </div>
        <div className='col-lg-4 text-lg-left text-center'>
        <img height='150px' src="assets/img/car.png" alt="car logo"/>
      </div>
      </div>
    </div>


    )
  }
};

export default Home;