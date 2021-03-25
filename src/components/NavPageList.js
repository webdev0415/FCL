import React from 'react';
import '../App.css';
import { Router, Link, Match } from '@reach/router';

const PageList = () => {
	const NavLink = (props) => (
		<Link
			{...props}
			getProps={({ isCurrent }) => {
				// the object returned here is passed to the
				// anchor element's props
				return {
					style: {
						color: isCurrent ? '#e0e0e0' : 'white'
					}
				};
			}}
		/>
	);
	const pages = [
		{
			id: 'Home',
			path: '/'
		},
		{
			id: 'Drops',
			path: '/drops'
		},
		{
			id: 'Listings',
			path: '/listings'
		},
		{
			id: 'About',
			path: '/about-art-grails'
		},
		{
			id: 'FAQ',
			path: '/faq'
		},
		{
			id: 'Contact',
			path: '/contact-us'
		}
	];

	const pageList = pages.map((page) => {
		console.log(page);
		return (
			<NavLink className="NavLink" to={page.path}>
				{page.id}
			</NavLink>
		);
	});

	return pageList;
};

export default PageList;
