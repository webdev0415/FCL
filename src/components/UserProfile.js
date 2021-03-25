import React from 'react';
import MainNav from './MainNav';
import Container from 'react-bootstrap/Container';

const UserProfile = (props) => {
	//TODO: Get user data from db
	const { userId } = props;
	return (
		<Container style={{ minHeight: '90vh' }}>
			<h1>UserProfile</h1>
			<h1>UserID: {userId}</h1>
			<h1>Users Drops:</h1>
			<p>Add rest of user data here</p>
		</Container>
	);
};

export default UserProfile;
