import React, { Component } from 'react';
//import history from 'react-router/lib/browserHistory';

//import { Link } from 'react-router';

class Layout extends Component{

	state = {
		search:"",
		toggled:false
	}

	toggle = () => {
		const toggle = !this.state.toggled;
		this.setState({
			toggled:toggle
		})
	}

	render(){
		//const { search } = this.state;
		return(
			<div id="wrapper" className={this.state.toggled ? 'toggled' : ''}>

		        <div id="sidebar-wrapper">
		            <ul className="sidebar-nav">
		                <li className="sidebar-brand">
		                    <a href="#">
		                        Start Bootstrap
		                    </a>
		                </li>
		                <li>
		                    <a href="#">Dashboard</a>
		                </li>
		                <li>
		                    <a href="#">Shortcuts</a>
		                </li>
		                <li>
		                    <a href="#">Overview</a>
		                </li>
		               
		            </ul>
		        </div>

		        <div id="page-content-wrapper" style={{marign: "0px", padding: "0px"}}>

                    <a className="btn btn-default" id="menu-toggle" onClick={this.toggle}>Menu</a>
		            <div className="container-fluid">
						{this.props.children}
		            </div>
		        </div>				
			</div>
		)
	}
}

export default Layout