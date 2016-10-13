import React, { Component } from 'react';
import history from 'react-router/lib/browserHistory';

import Alert from 'react-s-alert';	

import { Link } from 'react-router';

import "./index.css";

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
		                    <Link to="records" onClick={this.toggle}>Records</Link>
		                </li>
		                <li>
		                    <Link to="search" onClick={this.toggle}>Search Engine</Link>
		                </li>
		                <li>
		                    <Link to="violations" onClick={this.toggle}>Violations</Link>
		                </li>
		                <li>
		                    <Link to="statistics" onClick={this.toggle}>LTO Statistics</Link>
		                </li>
		                <li>
		                    <Link to="report" onClick={this.toggle}>Violations Report</Link>
		                </li>
		                <li>
		                    <a onClick={()=>{
								const toggle = !this.state.toggled;
								this.setState({
									toggled:toggle
								})
		                    	sessionStorage.clear();
		                    	setTimeout(()=>{
		                    		history.push("/login")
		                    	},250);								
		                    }}>Log Out</a>
		                </li>

		               
		            </ul>
		        </div>

		        <div id="page-content-wrapper" style={{marign: "0px", padding: "0px"}}>
		        	<div className="main header">
                    	<a className="btn btn-default" id="menu-toggle" onClick={this.toggle}><i className="fa fa-align-justify"/></a>

                    	<Link className="btn btn-default pull-right btn-scan" to="/scan"><i className="fa fa-qrcode"/></Link>
                    </div>
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