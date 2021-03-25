import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import PageTemplate from './components/PageTemplate';

function App() {
	return (
		<Router>
			<PageTemplate page="Home" path="/" />
			<PageTemplate page="Drops" path="/drops" />
			<PageTemplate page="DropDetails" path="/drops/:dropId" />
			<PageTemplate page="User" path="/users/:userId" />
			<PageTemplate page="About" path="/about-art-grails" />
			<PageTemplate page="Contact" path="/contact-us" />
			<PageTemplate page="Faq" path="/faq" />
			<PageTemplate page="Signup" path="/signup" />
			<PageTemplate page="Login" path="/login" />
			<PageTemplate page="Checkout" path="/checkout/:dropid" />
			<PageTemplate page="Listings" path="/listings" />
		</Router>
	);
}

export default App;
