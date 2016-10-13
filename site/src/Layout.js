import React, { Component } from 'react';
import history from 'react-router/lib/browserHistory';

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
		const { search } = this.state;
		return(
			<div>
				<div id="wrapper" className={this.state.toggled ? 'toggled' : ''}>


        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li>
                    <a href="#">Records</a>
                </li>
                <li>
                    <a href="#">Search Engine</a>
                </li>
                <li>
                    <a href="#">Violations</a>
                </li>
                <li>
                    <a href="#">LTO Statistics</a>
                </li>
                <li>
                    <a href="#">Violations Report</a>
                </li>
                <li>
                    <a href="#">Log Out</a>
                </li>

               
            </ul>
        </div>


        <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <a className="btn btn-default" id="menu-toggle" onClick={this.toggle}>Menu</a>

                    <div className="container">
					{this.props.children}
					</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
				
			</div>
		)
	}
}

export default Layout