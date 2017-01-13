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
        		    <h2 className='m-t'>Passcode</h2>	
            		<div className="input-group">	
                    <input id="passcode" className="form-control" type="number" placeholder="Please Enter 4 Digit Pin" min="1001" max="9999"/>
                    <span className="input-group-btn">
                      <button id="parkBtn" className="btn btn-success" type="button">PARK</button>
                    </span>
                </div>
              </div>
        	</div>
    )
  }
};

export default ParkCar;