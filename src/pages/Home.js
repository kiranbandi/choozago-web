import React, { Component } from 'react';

class Home extends Component {
  render () {
    return (
          <div>
        
            <div className="home-header">
              <div className="container">
               <div className='col-lg-9 text-lg-left text-md-center text-sm-center text-xs-center'><h1>Choozago</h1>
                <p><i>Choose on the go</i> Your one stop solution to all your parking needs</p>
                </div>
                <div className='col-lg-3 text-lg-right text-center'>
                <img height='150px' src="assets/img/car.png" alt="car logo"/>
              </div>
              </div>
            </div>
        
            <div className="container home-body">
            <h1>How does it work ?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra turpis lorem, vitae condimentum dui vestibulum a. Mauris in tortor nibh. Nunc ac varius velit, eu cursus ex. Nunc feugiat odio sit amet urna sodales luctus. Fusce tempor tristique est, eu tempor magna viverra et. Nam nec interdum odio. Curabitur vestibulum ut felis in faucibus.</p>
            <p>Phasellus imperdiet sodales lorem,  After Y2K, the end of the world had become a cliché. But who was I to talk, a brooding underdog avenger alone against an empire of evil, out to right a grave injustice? Everything was subjective. There were only personal apocalypses. Nothing is a cliché when it's happening to you - Max Payne elit tempus, id pharetra lorem elementum. Phasellus sit amet erat ornare sem egestas varius sit amet ut nunc. Suspendisse sit amet nisl vitae mi mattis luctus. Integer at felis mi. Vivamus et purus et ligula dignissim euismod in quis magna. Suspendisse cursus eleifend augue non tristique. Aliquam rutrum facilisis massa at tincidunt. Duis nec ante quam. Proin eleifend elit felis, vel egestas lacus hendrerit sit amet. In urna lectus, aliquam a dapibus nec, auctor sit amet eros.</p>
            
            <h1>Parking Slots We Service</h1>
            <div className='stats-box'>
                            
                 <div className="col-lg-4 col-md-6 statcard p-a-md text-center">
                 <img className='img-responsive' src="assets/img/del-sp.png" alt="delsp image" />
                    <h2 className="statcard-desc">Delhi Shastri Park</h2>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 statcard p-a-md text-center">
                  <img className='img-responsive' src="assets/img/ggn-7b.png" alt="7B image" />
                    <h2 className="statcard-desc">Gurgaon 7B</h2>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 statcard p-a-md text-center">
                  <img className='img-responsive' src="assets/img/ggn-infospace.png" alt="Ggn inf image" />
                    <h2 className="statcard-desc">Gurgaon Infospace</h2>
                  </div>
        
              </div>
            </div>
          </div>

    )
  }
};

export default Home;


