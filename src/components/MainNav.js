import React from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavPageList from './NavPageList';
import Button from 'react-bootstrap/Button';
import ArtGrails from '../assets/artgrails.png';
import { Link, navigate } from '@reach/router';

const MainNav = () => {
	const handleClick = (page) => {
		navigate(`/${page}`);
	};
	return (
		<Navbar variant="dark" expand="lg" style={{ backgroundColor: 'black' }}>
			<Navbar.Brand href="/">
				<img className="logo" src={ArtGrails} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto" style={{ marginLeft: '30px' }}>
					<NavPageList />
				</Nav>
				<Nav className="align-items-center">
					{/* TODO: Swap login and sign up for username and logout when logged in */}
					<Link className="align-middle NavLink" to="/users/testuser">
						User Profile
					</Link>
					<Link className="align-middle NavLink" to="/checkout/testdrop">
						Checkout
					</Link>
					<Link className="align-middle NavLink" to="/login">
						Login
					</Link>

					<Button className="signUp" onClick={() => handleClick('signup')}>
						Sign Up
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainNav;
