import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DropCard from './DropCard';
import Alec from '../assets/alec.jpg';

//TODO: add calls to circle pay and items add protected route from queue-it
const Checkout = () => {
	const handleSubmit = () => {};
	const dropDetails = {
		title: 'Drop Title',
		artist: 'Alec Monopoly',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
		qty: 1000,
		date: '00-00-0000',
		thumbnail: Alec,
		id: 'DROPID'
	};
	return (
		<Container style={{ minHeight: '90vh' }}>
			<h1 style={{ marginTop: '10px', textAlign: 'center' }}>Checkout</h1>
			<h2 style={{ textAlign: 'center' }}>
				You have <br /> <b>00:00 minutes </b>
				<br /> to complete checkout.
			</h2>
			<Container>
				<Row>
					<DropCard details={dropDetails} checkout={true} />
				</Row>
			</Container>
			<Form>
				<h1>ADD CHECKOUT FORM FROM CIRCLE</h1>
				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default Checkout;
