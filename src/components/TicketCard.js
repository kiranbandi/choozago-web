import React, { Component } from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import moment from 'moment';
import Loading from 'react-loading';

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

updateTicket(status){
      ajaxHelpers.updateTicket(this.props.ticketId,status).then(function(data){
      console.log("Car Parked Successfully");
    }.bind(this));
}


getStatusIndicator(){
  
  const { status } = this.state;
  
  let statusObject = {
      statClass :"primary",
      alertClass :"success",
      alertIcon :"check"
  };
      
    switch (status) {
      
      case 'parked':
      statusObject.statClass ="primary",
      statusObject.alertClass ="info",
      statusObject.alertIcon = "thumbs-up";
      break;
          
      case 'cancelled':
      statusObject.statClass ="danger",
      statusObject.alertClass ="warning",
      statusObject.alertIcon = "circle-with-cross";
      break;
        
      case 'exited':
      statusObject.statClass ="primary",
      statusObject.alertClass ="info",
      statusObject.alertIcon = "home";
      break;
        
      case 'expired':
      statusObject.statClass ="danger",
      statusObject.alertClass ="warning",
      statusObject.alertIcon = "emoji-sad";
      break;
        
    }  
    
    return statusObject;
  
        
}

render () {
  
    const { ticketData } = this.state ,
          { alertClass , alertIcon , statClass } = this.getStatusIndicator();

    return (
    	<div className='ticket-card-container'>
        <div className="hr-divider">
  					  <h4 className="hr-divider-content hr-divider-heading">
  					 Parking Ticket 
  					  </h4>
  			</div>
			
      { !!ticketData ?
       
       <div>
        
          <div className={`statcard statcard-${statClass} p-a-md`}>
            <h3 className="statcard-number">
              {ticketData.locationDesc}
            </h3>
            
          <span className={`parking-status-indicator label-${alertClass}`}>
              <span className={`icon icon-${alertIcon}`}></span>
              {ticketData.status}
          </span>


            <div className='name-slot'>
            <h3 className="statcard-desc m-a">{`Name : ${ticketData.firstName} ${ticketData.lastName}`}</h3>
            <h3 className="statcard-desc ">{`Company : ${ticketData.company}`}</h3>
            <h3 className="statcard-desc">{`Booking Date : ${moment(ticketData.time*1000).format('ddd ll HH:MM A')}`}</h3>
          </div>
          </div>

        </div> 
    
      : <Loading type='spin' color='#3fbfe2' /> }
      
      { !!ticketData && ticketData.status=="booked" &&
        <button type="button" className="btn btn-lg btn-success m-a">
          <span className="icon icon-arrow-with-circle-up"></span>
          PARK
        </button> }
      
      { !!ticketData && ticketData.status=="parked" &&
        <button type="button" className="btn btn-lg btn-danger m-a">
          <span className="icon icon-arrow-with-circle-down "></span>
          EXIT
        </button> }
      
      </div>
    )
  }
};
