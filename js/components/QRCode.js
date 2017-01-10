import React, { Component } from 'react';

class QRCode extends Component {
	
constructor(props) {
  super(props);
}

  render () {
    return (
		<h1>Display QR Code for Ticket ID {this.props.params.ticketId}</h1>
    )
  }
};

export default QRCode;