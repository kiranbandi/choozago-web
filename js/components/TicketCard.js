import React, { Component } from 'react';
import ajaxHelpers from "../utils/ajaxHelpers";
export default class TicketCard extends Component {

constructor(props) {
  super(props);
  this.state = {
  	ticketData:null
  }
}

 componentDidMount() {
    ajaxHelpers.getTicketData(this.props.ticketId).then(function(data){
      this.setState({ticketData:data});
    }.bind(this));
  }

render () {
    const { ticketData } = this.state;

    return (
    	<div className='ticket-card-container'>
      <h2>Ticket ID-{this.props.ticketId}</h2>
      {!!ticketData && 
        <div>
          <div className="statcard statcard-primary p-a-md">
            <h3 className="statcard-number">
              {ticketData.location}
            </h3>
            <span className={`statcard-number parking-status-indicator btn-${ticketData.status=='parked'?'success':'info'}`}>
              <span className="icon icon-home"></span>
              {ticketData.status}
            </span>
            <div className='name-slot'>
            <span className="statcard-desc m-r">{ticketData.name}</span>
            <span className="statcard-desc">{Date(ticketData.timeSlot)}</span>
          </div>
          </div>

        </div>
      }
      </div>
    )
  }
};
