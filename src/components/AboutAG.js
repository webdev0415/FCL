import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//TODO:Replace with real copy and images
const AboutArtGrails = () => {
	return (
		<Container className="aboutContainer">
			<Row xs={1} lg={2}>
				<Col>
					<h1 style={{ fontSize: '50px' }}>About ArtGrail$</h1>
					<p style={{ textAlign: 'left' }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit, leo at lobortis accumsan,
						velit nisi tincidunt mauris, sed sollicitudin enim erat a erat. Proin ut nisi et libero faucibus
						malesuada non placerat lorem. In ultricies arcu dolor, vel finibus arcu sodales quis. Duis sed
						pharetra urna. Maecenas id condimentum tellus. Vestibulum sollicitudin consequat ante eget
						placerat. Vestibulum lobortis leo nec tincidunt tempus. Praesent iaculis diam vel euismod
						facilisis. Nulla vitae ullamcorper arcu, in pharetra quam. Cras a tincidunt augue. Phasellus
						quis tempus nisi. Integer tincidunt nunc ut ullamcorper maximus. Maecenas tincidunt feugiat
						augue sit amet facilisis. Suspendisse venenatis ex sagittis lobortis sagittis. Maecenas
						ullamcorper pellentesque posuere. Sed non cursus odio, et venenatis elit.
					</p>
				</Col>
				<Col style={{ backgroundColor: '#282c34' }}>2 of 3</Col>
			</Row>
		</Container>
	);
};

export default AboutArtGrails;
