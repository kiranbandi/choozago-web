import React, { Component } from 'react';
import { TicketCard } from '../components';

class ParkCar extends Component {

constructor(props) {
  super(props);
}

render () {
    return (
        	<div className=' container park-car-container m-t'>
              <div className ='col-lg-6'>
               <TicketCard ticketId={this.props.params.ticketId}/>
              </div>
               <div className ='col-lg-6'>
               <h2 className='text-center'>Parking Entry Guildlines</h2>
                     <div className="alert alert-info" role="alert">
                      <ul className='parking-rules'>
                      <li>Marking a car parking entry is a one time process and cannot be reversed.</li>
                      <li>Kindly Please cross check the user details and the parking 
                        location with the details provided in the parking ticket provided here.</li>
                      <li>Please Enter the 4 digit passcode to authorise car parking.</li>
                      </ul>
                      </div> 
               </div>

              <div className ='col-lg-12'>
        		    <h2 className='m-t'>Passcode</h2>	
            		<div className="input-group">	
                    <input id="passcode" className="form-control" type="number" placeholder="Please Enter 4 Digit Pin" min="1001" max="9999"/>
                    <span className="input-group-btn">
                      <button id="parkBtn" className="btn btn-success-outline" type="button">PARK</button>
                    </span>
                </div>
              </div>
        	</div>
    )
  }
};

export default ParkCar;