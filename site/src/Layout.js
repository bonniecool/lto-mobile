import React, { Component } from 'react';
import history from 'react-router/lib/browserHistory';

import { Link } from 'react-router';

class Layout extends Component{

	state = {
		search:""
	}

	render(){
		const { search } = this.state;
		return(
			<div>
				<nav className="navbar navbar-default">
					<div className="container">
						
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<Link className="navbar-brand" to="/"><i className="fa fa-automobile"/> LTO</Link>
						</div>

						
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<form className="navbar-form navbar-left" onSubmit={(e)=>{
								e.preventDefault();
								history.push(`/search?q=${search}`)
							}}>
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Search" onChange={(e)=>this.setState({search:e.target.value})} value={search}/>
									<div className="input-group-btn">
										<button 
											type="button"
											onClick={(e)=>{
												e.preventDefault();
												history.push('/scan')
											}}
											className="btn btn-default">
											<i className="fa fa-qrcode"/> <span className="hidden-xs">Scan</span>
										</button>
									</div>
								</div>
								
							</form>

							<ul className="nav navbar-nav navbar-right">
								<li><a href="#">Violations</a></li>
								<li role="separator" className="divider"></li>
								<li className="dropdown">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">LTO Statistics <span className="caret"></span></a>
									<ul className="dropdown-menu">
										<li><a href="#">Region</a></li>
										<li><a href="#">Branch</a></li>
										<li><a href="#">Province</a></li>
										<li role="separator" className="divider"></li>
										<li><a href="#">Progressive Report</a></li>
									</ul>
								</li>
								<li><a href="#">Logout</a></li>
							</ul>
						</div>
					</div>
				</nav>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Layout