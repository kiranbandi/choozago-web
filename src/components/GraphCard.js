/*global Chart*/
import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs';
import Chart from 'chart.js'

Chart.defaults.global.responsive = true;
Chart.defaults.global.cutoutPercentage=30;
Chart.defaults.Doughnut.segmentStrokeColor='#252830';

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
              label: "Booked"
          },
          {
              value: slotsAvailable,
              color: "#FDB45C",
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
                <Doughnut data={this.mixinData()} />
                <h4 className='slot-legend m-a-md'>SLOTS : Booked VS Available</h4>
              </div>
              </div>
		);
	}
}  
