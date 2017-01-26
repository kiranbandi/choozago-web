import React, { Component } from 'react';
import { GraphCard } from '../components';

var graphData = [
    {
        'name':'Gurgaon Infospace',
        'slotsAvailable':237,
        'slotsBooked':157
    },
    {
        'name':'Delhi ShastriPark',
        'slotsAvailable':65,
        'slotsBooked':15
    },
    {
        'name':'Gurgaon 7B',
        'slotsAvailable':120,
        'slotsBooked':90
    }];

class Dashboard extends Component {

constructor(props) {
  super(props);
}


render () {
    const graphList = graphData.map((val,ind)=> <GraphCard key={ind} slotData={val}/> )
    
    return (
        	<div className='dashboard-container container m-t'>
        	<div className="hr-divider">
			  <h4 className="hr-divider-content hr-divider-heading">
			  Parking Stats Overview
			  </h4>
			</div>
              {graphList}
        	</div>
    )
    
  }
};

export default Dashboard;