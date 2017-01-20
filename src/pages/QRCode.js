/*global $*/
import React, { Component } from 'react';
import ReactQR from 'qrcode.react'; 
import { TicketCard, Panel } from '../components';
import ajaxHelpers from '../utils/ajaxHelpers';

export default class QRCode extends Component {
	
constructor(props) {
  super(props);
  this.state = {
  	ticketId:this.props.params.ticketId
  };
  this.download=this.download.bind(this);
}

download(e){
  e.target.href = $(".qr-container canvas")[0].toDataURL();
  e.target.download = `QRcode-${this.state.ticketId}`;
}

render () {
  const ticketId  = this.state.ticketId,
        rootLocation = window.location.href.split("#")[0];

  let storeString = `${rootLocation}/#/ParkCar/${ticketId}`;

    return (
    	<div className='container qr-container text-center p-a-md'>
      <div className ='col-lg-6'>
       <TicketCard ticketId={ticketId}/>
      </div>
      <div className ='col-lg-6'>
      <h2>QR Code</h2>
          <ReactQR size={180} value={storeString} level='M'/>
            <p>Please display this at the time of parking your vehicle</p>
            <a className="btn btn-success" type="button" onClick={this.download}>
              <span className="icon icon-download"></span>
              {" Download"}
            </a>
      </div>
		</div>
    )
  }
};
