import React, { Component } from 'react';
import history from 'react-router/lib/browserHistory';

import Alert from 'react-s-alert';	

import './style.css';

class Login extends Component {

	state = {
		user: "",
		password: ""
	}

	render() {

		const { user, password } = this.state;

		return (
			<div className="login animated fadeIn">
				<div className="header-top"/>
				<div className="header-front">
					<div className="header-title"/>
				</div>

				<div className="login-wrapper">
					<form 
						onSubmit={(e)=>{
						e.preventDefault();
						Alert.warning("Logging-in...", {
							position: 'top-right',
							effect: 'slide',
							timeout: 10000
						})
						setTimeout(()=>{
							if((user === "admin" || password === "admin") || (user === "Admin" || password === "Admin")){
								sessionStorage.setItem('user',JSON.stringify(this.state))
								history.push('/');
								return;
							}
							Alert.error("Access Denied...", {
								position: 'top-right',
								effect: 'slide',
								timeout: 10000
							})
						},1000)
					}}>
						<input placeholder="User" className="form-control" type="text" onChange={(e)=>this.setState({user: e.target.value})} value={user}/>
						<input placeholder="Password" className="form-control" type="password" onChange={(e)=>this.setState({password: e.target.value})} value={password}/>
						<button type="submit" className="btn btn-primary btn-block">Login</button>
					</form>
				</div>

				<div className="footer">
					All Rights Reserved. <a>i-SYS</a> Corp 2013
				</div>
			</div>
		);
	}
}

export default Login;
