import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

//TODO: Add validation and connect submit to db
const Contact = () => {
	const handleSubmit = () => {};

	return (
		<Container style={{ minHeight: '90vh' }}>
			<h1 style={{ marginTop: '10px' }}>Contact Us</h1>
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Subject</Form.Label>
					<Form.Control type="text" placeholder="Enter Subject" />
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Message</Form.Label>
					<Form.Control as="textarea" rows={6} />
				</Form.Group>
				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default Contact;
