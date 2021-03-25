import React, { useState } from 'react';
import FeaturedDrops from './FeaturedDrops';
import AboutAG from './AboutAG';
import Hero from './Hero';
import UpcomingDrop from './UpcomingDrop';

const Home = () => {
	const [ upcoming, setUpcoming ] = useState(true);

	return (
		<div>
			<Hero />
			{upcoming ? <UpcomingDrop /> : null}
			<FeaturedDrops />
			<AboutAG />
		</div>
	);
};

export default Home;
