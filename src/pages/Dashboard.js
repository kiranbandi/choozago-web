import React, { Component } from 'react';
import { GraphCard,Statcard } from '../components';

var locationData = [
    {
        'title':'Gurgaon Infospace',
        'slotsAvailable':130,
        'slotsBooked':27,
        'slotsParked':101,
        'slotsCancelled':23
    },
    {
        'title':'Delhi Shastri Park',
        'slotsAvailable':65,
        'slotsBooked':31,
        'slotsParked':30,
        'slotsCancelled':42
    },
    {
        'title':'Gurgaon 7B',
        'slotsAvailable':0,
        'slotsBooked':15,
        'slotsParked':85,
        'slotsCancelled':12
    }] ,
    
    statData = [
    {
        'title':'Slots Available',
        'icon':'location',
        'type':'primary',
        'keyedIndex':'slotsAvailable'
    },
    {
        'title':'Slots Booked',
        'icon':'clipboard',
        'type':'info',
        'keyedIndex':'slotsBooked'
    },
    {
        'title':'Slots Parked',
        'icon':'new-message',
        'type':'success',
        'keyedIndex':'slotsParked'
    },
    {
        'title':'Bookings Cancelled',
        'icon':'layers',
        'type':'danger',
        'keyedIndex':'slotsCancelled'
    }];
    

class Dashboard extends Component {

constructor(props) {
  super(props);
  this.state={
      locationKey:false
  };
  this.setKey = this.setKey.bind(this);
}

setKey(e,locationKey){
    this.setState({locationKey});    
}

locationDataMapper(val,ind){
    let type='primary',
    availability=val.slotsAvailable/(val.slotsAvailable+val.slotsBooked+val.slotsParked);
    
    if(availability==0){
        type='danger';
    }
    else if(availability<=0.5){
        type='warning';
    }

 return <Statcard key={ind}
        title={val.title}
        count={`${val.slotsAvailable} / ${val.slotsAvailable+val.slotsBooked+val.slotsParked}`}
        type={type}
        className={`col-md-4 col-sm-6`}
        />;
}

render () {
    const graphList = locationData.map((val,ind)=> <GraphCard onClick={this.setKey} selected={this.state.locationKey===ind} key={ind} locationKey={ind} slotData={val}/>),
          statCardList =this.state.locationKey!==false?statData.map((val,ind)=> {
           return <Statcard key={ind} {...val} count={locationData[this.state.locationKey][val.keyedIndex]}/>;   
          }):null ,
          quickViewData = locationData.map(this.locationDataMapper); 
          
    return (
        	<div className='dashboard-container container m-t'>
        	
        		<div className="row hr-divider">
        		  <h4 className="hr-divider-content hr-divider-heading">
        		  Parking Stats Quick-View
        		  </h4>
        		</div>
            	<div className='row quickViewBox'>
                    {quickViewData}
                </div>
    		

            	<div className="row hr-divider">
        		  <h4 className="hr-divider-content hr-divider-heading">
        		  Stats across all locations
        		  </h4>
        		</div>
                <div className='row'>
                    {graphList}
                </div>
    	
            	{ this.state.locationKey!==false && 
            	<div className='row locationStatBox'>
            	<div className="hr-divider">
        		  <h4 className="hr-divider-content hr-divider-heading">
        		  Parking Stats at {locationData[this.state.locationKey].title}
        		</h4>
        		</div>
                        {statCardList}
                </div>}
        	   
           </div>  

    )
    
  }
};

export default Dashboard;