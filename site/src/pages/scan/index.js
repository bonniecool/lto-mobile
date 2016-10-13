import React, { Component } from 'react';

import QRScanner from '../../common/QRScanner';

import './style.css';

class Scan extends Component {

	state = {
		result: "ASKJ82D-2DASDI9H",
		found: false,
		loading: false
	}

	render() {

		const { found,result,loading } = this.state;

		if(found)
			return(
				<div className="animated fadeIn">
					<button 
						style={{marginTop: "10px"}}
						onClick={()=>{
							this.setState({
								found: !found
							})
						}}
						className="btn btn-lg btn-primary btn-block"><i className="fa fa-qrcode"/> Scan Again</button>

						<div className="text-center">
							<h4>{result}</h4>
						</div>
				</div>
			)

		return (
			<div className="animated fadeIn">
				<div style={{position:"relative"}}>
					{this.renderLoading(loading)}
					<QRScanner 
						onScan={(data)=>{
							this.setState({
								loading: true
							})
							setTimeout(()=>{
								this.setState({
									found: true, 
									result: data,
									loading: false	
								})
							},1000)							
						}}/>
				</div>
			</div>
		);
	}

	renderLoading = (loading) => {
		if(loading)
			return(
				<div className="load-box">
					<i className="fa fa-spin fa-spinner" />
				</div>
			)
		return null;
	}
}

export default Scan;
