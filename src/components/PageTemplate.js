import React, { useEffect, useState } from 'react';
import MainNav from './MainNav';
import '../App.css';
import Home from './Home';
import Footer from './Footer';
import AboutPage from './AboutPage';
import Contact from './Contact';
import UserProfile from './UserProfile';
import Faq from './Faq';
import Drops from './Drops';
import DropDetails from './DropDetails';
import SignUp from './SignUp';
import Login from './Login';
import Checkout from './Checkout';
import Listings from './Listings';

const PageTemplate = (props) => {
	const { page, userId, dropId } = props;

	const getComponent = () => {
		const currentPage = page;
		switch (currentPage) {
			case 'Home':
				return <Home />;
			case 'About':
				return <AboutPage />;
			case 'Contact':
				return <Contact />;
			case 'Faq':
				return <Faq />;
			case 'User':
				return <UserProfile userId={userId} />;
			case 'Drops':
				return <Drops userId={userId} />;
			case 'DropDetails':
				return <DropDetails dropId={dropId} />;
			case 'Signup':
				return <SignUp />;
			case 'Login':
				return <Login />;
			case 'Checkout':
				return <Checkout />;
			case 'Listings':
				return <Listings />;
			default:
				break;
		}
	};

	return (
		<div>
			<MainNav userId={userId} />
			{getComponent()}
			<Footer />
		</div>
	);
};

export default PageTemplate;
