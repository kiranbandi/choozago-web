import React, { Component } from 'react';

class ParkCar extends Component {

constructor(props) {
  super(props);
}

render () {
    return (
		<h1>Please Park Your Car with ticket ID {this.props.params.ticketId}</h1>
    )
  }
};

export default ParkCar;