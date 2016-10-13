import React, { Component } from 'react';

class Layout extends Component{

	render(){

		return(
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#"><i className="fa fa-automobile"/> LTO</a>
						</div>

						
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<form className="navbar-form navbar-left">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Search" />
									<div className="input-group-btn">
										<button type="submit" className="btn btn-default"><i className="fa fa-search" /> <span className="hidden-xs">Search</span></button>
									</div>
								</div>
								
							</form>

							<ul className="nav navbar-nav navbar-right">
								<li><a href="#">Link</a></li>
								<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
								<ul className="dropdown-menu">
									<li><a href="#">Action</a></li>
									<li><a href="#">Another action</a></li>
									<li><a href="#">Something else here</a></li>
									<li role="separator" className="divider"></li>
									<li><a href="#">Separated link</a></li>
								</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				{this.props.children}
			</div>
		)
	}
}

export default Layout