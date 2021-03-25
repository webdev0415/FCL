import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

//TODO:Grab faqs from db
const Faq = () => {
	return (
		<Container style={{ minHeight: '90vh', paddingTop: '20px' }}>
			<h1 style={{ textAlign: 'center' }}>FAQ</h1>

			<h1>Payments</h1>
			<Accordion defaultActiveKey="0">
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="0">
						Click me!
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>Hello! I'm the body</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="1">
						Click me!
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="1">
						<Card.Body>Hello! I'm another body</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
			<br />
			<h1>Accounts</h1>
			<Accordion defaultActiveKey="0">
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="0">
						Click me!
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>Hello! I'm the body</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="1">
						Click me!
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="1">
						<Card.Body>Hello! I'm another body</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Container>
	);
};

export default Faq;
