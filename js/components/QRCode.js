import React, { Component } from 'react';
import ReactQR from 'qrcode.react'; 
import { TicketCard } from './';
import ajaxHelpers from '../utils/ajaxHelpers';


export default class QRCode extends Component {
	
constructor(props) {
  super(props);
  this.state = {
  	ticketId:this.props.params.ticketId
  };
}

render () {
  const ticketId  = this.state.ticketId,
        rootLocation = window.location.href.split("#")[0];

  let storeString = `${rootLocation}/#/ParkCar/${ticketId}`;

    return (
    	<div className='qr-container'>
      <div className ='col-lg-6'>
       <TicketCard ticketId={ticketId}/>
      </div>
      <div className ='col-lg-6'>
        <h2>QR Code</h2>
       <ReactQR size={200} value={storeString} level='M'/>
      </div>
		</div>
    )
  }
};
