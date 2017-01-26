/*global Chart*/
import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs';
import Chart from 'chart.js'

Chart.defaults.global.responsive = true;


export default class GraphCard extends Component {
    
    constructor(props) {
        super(props);
    }
    
    mixinData() {
        
        const { slotsAvailable,slotsBooked } = this.props.slotData ;
        
    return  [
          {
              value: slotsBooked,
              color:"#F7464A",
              highlight: "#FF5A5E",
              label: "Booked"
          },
          {
              value: slotsAvailable,
              color: "#FDB45C",
              highlight: "#FFC870",
              label: "Available"
          }];
          
        
    }

  	render() {
		return (
		      <div className='col-lg-4 col-md-6'>
		      <div className='graph-container m-a'>
  				  <h4 className="slot-name m-a-md">
  				   			{this.props.slotData.name}
  				  </h4>
                <Doughnut data={this.mixinData()}/>
                <h4 className='slot-legend m-a-md'>Slots Booked VS Slots Available</h4>
              </div>
              </div>
		);
	}
}  


