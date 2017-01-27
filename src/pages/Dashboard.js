import React, { Component } from 'react';
import { GraphCard,Statcard } from '../components';

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
    }] ,
    
    statData = [
    {
        'title':'Total Slots Available',
        'count':450,
        'icon':'location',
        'type':'primary'
    },
    {
        'title':'Total Slots Booked',
        'count':102,
        'icon':'clipboard',
        'type':'success'
    },
    {
        'title':'Ongoing Bookings',
        'count':8,
        'icon':'new-message',
        'type':'info'
    },
    {
        'title':'Bookings Cancelled',
        'count':9,
        'icon':'layers',
        'type':'danger'
    }
    
    ];

class Dashboard extends Component {

constructor(props) {
  super(props);
}


render () {
    const graphList = graphData.map((val,ind)=> <GraphCard key={ind} slotData={val}/> ),
          statCardList = statData.map((val,ind)=> <Statcard key={ind} {...val} /> );
    return (
        	<div className='dashboard-container container m-t'>
        	
    		<div className="hr-divider">
    		  <h4 className="hr-divider-content hr-divider-heading">
    		  Parking Stats Quick-View
    		  </h4>
    		</div>
            <div className="row statcards">
                {statCardList}
            </div>

    	<div className="hr-divider">
		  <h4 className="hr-divider-content hr-divider-heading">
		  Stats across all locations
		  </h4>
		</div>
          {graphList}
    	</div>

    )
    
  }
};

export default Dashboard;