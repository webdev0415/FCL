import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

//TODO: pull from upcoming drop db
const UpcomingDrop = () => {
	return (
		<Container style={{ height: '400px', backgroundColor: 'rgb(40, 44, 52)', marginTop: '20px' }}>
			<h1 style={{ color: 'white' }}>UpcomingDrop</h1>
			<Button style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>
				Get Notified
			</Button>
		</Container>
	);
};

export default UpcomingDrop;
