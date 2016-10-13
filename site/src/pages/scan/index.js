import React, { Component } from 'react';

import QRScanner from '../../common/QRScanner';

import './style.css';

class Scan extends Component {
	render() {

		return (
			<div>
				<h1>Scan Page!</h1>
				<div>
					<QRScanner 
						onScan={(data)=>{
							console.log("Search for ", data);
						}}/>
				</div>
			</div>
		);
	}
}

export default Scan;
