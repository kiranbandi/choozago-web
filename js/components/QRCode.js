import React, { Component } from 'react';
import ReactQR from 'qrcode.react'; 

class QRCode extends Component {
	
constructor(props) {
  super(props);

  this.state = {
  	ticketId:this.props.params.ticketId
  }
}

render () {

  let storeString = `https://kiranbandi.github.io/choozago-web/#/ParkCar/${this.state.ticketId}`;
  console.log(storeString);
    return (
    	<div className='qr-container'>
			<h1>Display QR Code for Ticket ID {this.state.ticketId}</h1>
			<ReactQR size={200} value={storeString} level='M'/>
		</div>
    )
  }
};

export default QRCode;