import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import '../../../node_modules/fixed-data-table/dist/fixed-data-table.css';
import Dimensions from 'react-dimensions';


class Records extends Component {

	render() {
		const data = [
				{
					id: 0,
					name: 'Christopher M. Magruder',
					address: '2420 Brown Bear Drive Corona, CA 91720',
					gender: 'Male',
					phone: '951-736-7831',
					birthdate: 'February 28, 1946',
					weight: '172.0 pounds (78.2 kilograms)',
					height: '5\' 9" (176 centimeters)',
					extension: 'March 21, 2014',
					nationality: 'American',
					passport: '00021',
					visatype: 'Resident Visa',
					country: 'U.S.A',
					ecard: '11111'
				},{
					id: 1,
					name: 'Beatrice Correia Alves',
					address: '641 Wilkinson Court Fort Myers, FL 33912',
					gender: 'Female',
					phone: '239-601-8796',
					birthdate: 'June 14, 1975',
					weight: '203.5 pounds (92.5 kilograms)',
					height: '5\' 6" (167 centimeters)',
					extension: 'January 21, 2015',
					nationality: 'Italian',
					passport: '00001',
					visatype: 'Resident Visa',
					country: 'Italy',
					ecard: '11112'
				},{
					id: 2,
					name: 'Davi Correia Alves',
					address: 'Piazza Trieste e Trento, 45 12030-Rifreddo Di Saluzzo CN',
					gender: 'Male',
					phone: '0310 2287618',
					birthdate: 'September 12, 1938',
					weight: '194.7 pounds (88.5 kilograms)',
					height: '5\' 10" (177 centimeters)',
					extension: 'January 21, 2015',
					nationality: 'Italian',
					passport: '00002',
					visatype: 'Resident Visa',
					country: 'Italy',
					ecard: '11113'
				},{
					id: 3,
					name: 'Ma\'ali Sumnah Daher',
					address: 'Via Acrone, 11 15060-Pasturana AL',
					gender: 'Female',
					phone: '0376 5365699',
					birthdate: 'September 18, 1988',
					weight: '172.5 pounds (78.4 kilograms)',
					height: '5\' 10" (177 centimeters)',
					extension: 'January 21, 2015',
					nationality: 'Arabian',
					passport: '00003',
					visatype: 'Resident Visa',
					country: 'U.A.E',
					ecard: '11114'
				},{
					id: 4,
					name: 'George J. Smith',
					address: 'Corso Vittorio Emanuale, 21 51020-Sambuca Pistoiese PT',
					gender: 'Male',
					phone: '0376 5365699',
					birthdate: 'September 18, 1988',
					weight: '172.5 pounds (78.4 kilograms)',
					height: '5\' 10" (177 centimeters)',
					extension: 'January 21, 2015',
					nationality: 'American',
					passport: '00004',
					visatype: 'Resident Visa',
					country: 'U.S.A',
					ecard: '11115'
				},{
					id: 5,
					name: 'Jeremy D. Hyatt',
					address: 'Via Archimede, 104 40044-Pontecchio Marconi BO',
					gender: 'Male',
					phone: '375 0423711',
					birthdate: 'February 13, 1983',
					weight: '110.5 pounds (243.1 kilograms)',
					height: '5\' 8" (172 centimeters)',
					extension: 'January 21, 2015',
					nationality: 'American',
					passport: '00005',
					visatype: 'Resident Visa',
					country: 'U.S.A',
					ecard: '11116'
				},{
					id: 6,
					name: 'Patricia K. Casiano',
					address: 'Via Rosmini, 102 84020-Corleto Monforte SA',
					gender: 'Female',
					phone: '375 0423711',
					birthdate: 'June 2, 1950',
					weight: '132.4 pounds (60.2 kilograms)',
					height: '5\' 4" (162 centimeters)',
					extension: 'January 21, 2015',
					nationality: 'Spanish',
					passport: '00006',
					visatype: 'Resident Visa',
					country: 'Spain',
					ecard: '11117'
				},{
					id: 7,
					name: 'Keith J. Medina',
					address: 'Strada Statale, 97 13811-Tavigliano BI',
					gender: 'Male',
					phone: '0333 0039030',
					birthdate: 'February 11, 1989',
					weight: '181.9 pounds (82.7 kilograms)',
					height: '5\' 7" (171 centimeters)',
					extension: 'January 21, 2015',
					nationality: 'Mexican',
					passport: '00007',
					visatype: 'Resident Visa',
					country: 'Mexico',
					ecard: '11118'
				},{
					id: 8,
					name: 'Peggy A. Tinch',
					address: '473 White Lane Macon, GA 31201',
					gender: 'Male',
					phone: '478-978-7446',
					birthdate: 'June 12, 1977',
					weight: '143.9 pounds (65.4 kilograms)',
					height: '5\' 8" (173 centimeters)',
					extension: 'January 21, 2015',
					nationality: 'British',
					passport: '00008',
					visatype: 'Resident Visa',
					country: 'UK',
					ecard: '11119'
				},{
					id: 9,
					name: 'Gabriel Fysh',
					address: '819 Calvin Street Annapolis, MD 21401',
					gender: 'Male',
					phone: '443-336-4951',
					birthdate: 'July 28, 1994',
					weight: '144.3 pounds (65.6 kilograms)',
					height: '5\' 5" (164 centimeters)',
					extension: 'January 21, 2015',
					nationality: 'British',
					passport: '00009',
					visatype: 'Resident Visa',
					country: 'UK',
					ecard: '11120'
				},{
					id: 10,
					name: 'Juan Dela Cruz',
					address: '#24 Mapalad Street, Quezon City',
					gender: 'Male',
					phone: '9904534',
					birthdate: 'July 28, 1993',
					weight: '144.3 pounds (65.6 kilograms)',
					height: '5\' 5" (164 centimeters)',
					extension: 'January 21, 2015',
					nationality: 'Filipino',
					passport: 'DO6 1234 5',
					visatype: 'Resident Visa',
					country: 'Philippines',
					ecard: '11121'
				},{
					id: 11,
					name: 'Nine Stars',
					address: 'Malugay, Makati City',
					gender: 'Male',
					phone: '9904534',
					birthdate: 'July 28, 1993',
					weight: '144.3 pounds (65.6 kilograms)',
					height: '5\' 5" (164 centimeters)',
					extension: 'January 21, 2015',
					nationality: 'Filipino',
					passport: '00010',
					visatype: 'Resident Visa',
					country: 'Philippines',
					ecard: '11121'
				},{
					id: 12,
					name: 'Gino Padilla',
					address: 'Malugay, Makati City',
					gender: 'Male',
					phone: '9904534',
					birthdate: 'July 28, 1993',
					weight: '144.3 pounds (65.6 kilograms)',
					height: '5\' 5" (164 centimeters)',
					extension: 'January 21, 2015',
					nationality: 'Filipino',
					passport: 'DO6 1234 5',
					visatype: 'Resident Visa',
					country: 'Philippines',
					ecard: '11121'
				}
			]

		return (
			<div>
			<div className="col-md-12">
			<input className="form-control" />
			</div>
				<Table
				    rowHeight={50}
				    rowsCount={data.length}
				    width={this.props.containerWidth}
				    height={500}
				    headerHeight={0}>
				    
				    
				    <Column
				      header={<Cell>Col 3</Cell>}
				      cell={({rowIndex, ...props}) => (
				        <Cell {...props}>
				          {data[rowIndex].name}
				        </Cell>
				      )}
				      width={this.props.containerWidth-50}
				    />
				  </Table>
			  </div>
		);
	}
}

export default Dimensions()(Records);
