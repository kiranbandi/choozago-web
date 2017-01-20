import React, {Component} from 'react';
import { NavBar, Modal} from './';

export default class Container extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            'view': { 'showModal': false }
        };
        this.handleHideModal=this.handleHideModal.bind(this);
        this.handleShowModal=this.handleShowModal.bind(this);
    }

    handleHideModal(){
        this.setState({view: {showModal: false}})
    }
    handleShowModal(){
        this.setState({view: {showModal: true}})
    }
    
  	render() {
		return (
		      <div id='app-container'>
                {/* navbar content , common for entire application */}
                <NavBar handleShowModal={this.handleShowModal}/>
                {this.props.children}
                {/*Modal Content part of main Container*/}
                <div className="row">
                    <button className="btn btn-default btn-block hide" onClick={this.handleShowModal}>Open Modal</button>
                    {this.state.view.showModal ? <Modal handleHideModal={this.handleHideModal}/> : null}
                </div>
          </div>
		);
	}
}  