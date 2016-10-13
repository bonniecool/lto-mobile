import React, { Component } from 'react';

import QrReader from 'react-qr-reader';

import './style.css'

/* eslint-disable */
class QRScanner extends Component{

	state = {
		result: "",
		found: false
	}

	handleOnFound = (data) => {
		this.setState({
			result: data,
			found: true
		})
		this.props.onScan(data);
	}

	handleOnError = (err) => {
		console.log(err);
	}

	render(){

		const width  = (window.innerWidth < 714) ? window.innerWidth-36 : 714

		const windowSize = {
			height: Math.floor(width * 0.7),
			width: width-6
		}

		const { result, status } = this.state

		return(
			<div>
				<div className="qr-scanner-window" style={{
					maxWidth: `${width}px`
				}}>
					<QrReader
						previewStyle={windowSize}
						// eslint-disable-next-line
						handleError={this.handleOnError}
						// eslint-disable-next-line
						handleScan={this.handleOnFound}/>
				</div>
			</div>
		)
	}
}

export default QRScanner