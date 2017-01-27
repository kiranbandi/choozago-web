/*global Chart*/
import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs';
import Chart from 'chart.js'

Chart.defaults.global.responsive = true;

var Statcard = (props) => {
     return (<div className="statcard-container col-sm-6 col-md-3 m-b">
                <div className={`statcard statcard-${ props.type }`}>
                  <div className="title-box">
                    <span className="statcard-desc">{ props.title }</span>
                    <h2 className="statcard-number">
                      { props.count }
                    </h2>
                  </div>
                 <span className={`icon icon-${ props.icon }`}></span> 
                </div>
              </div>)
              
}

export default Statcard;

