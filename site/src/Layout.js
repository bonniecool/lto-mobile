import React, { Component } from 'react';
import history from 'react-router/lib/browserHistory';

import Alert from 'react-s-alert';	

import { Link } from 'react-router';

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
		                <li>
		                    <Link to="records">Records</Link>
		                </li>
		                <li>
		                    <Link to="search">Search Engine</Link>
		                </li>
		                <li>
		                    <Link to="violations">Violations</Link>
		                </li>
		                <li>
		                    <Link to="statistics">LTO Statistics</Link>
		                </li>
		                <li>
		                    <Link to="report">Violations Report</Link>
		                </li>
		                <li>
		                    <a onClick={()=>{
		                    	sessionStorage.clear();
		                    	setTimeout(()=>{
		                    		history.push("/login")
		                    	},500);								
		                    }}>Log Out</a>
		                </li>

		               
		            </ul>
		        </div>

		        <div id="page-content-wrapper" style={{marign: "0px", padding: "0px"}}>
                    <a className="btn btn-default" id="menu-toggle" onClick={this.toggle}>Menu</a>
		            <div className="container-fluid">
						{this.props.children}
		            </div>
		        </div>		
				<Alert stack={{limit: 3}} />		
			</div>
		)
	}
}

export default Layout