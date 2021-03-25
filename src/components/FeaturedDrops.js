import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

const FeaturedDrops = () => {
	//TODO: Get featured drops from DB
	return (
		<Container className="featuredDrops">
			<h1 style={{ fontSize: '50pt', paddingBottom: '10px' }}>Featured Drops</h1>
			<Row xs={1} sm={2} md={2} lg={3}>
				<Col>
					<div
						style={{
							width: '300px',
							height: '300px',
							backgroundColor: '#282c34',
							marginRight: 'auto',
							marginLeft: 'auto'
						}}
					>
						1
					</div>
				</Col>
				<Col>
					<div
						style={{
							width: '300px',
							height: '300px',
							backgroundColor: '#282c34',
							marginRight: 'auto',
							marginLeft: 'auto'
						}}
					>
						1
					</div>
				</Col>
				<Col>
					<div
						style={{
							width: '300px',
							height: '300px',
							backgroundColor: '#282c34',
							marginRight: 'auto',
							marginLeft: 'auto'
						}}
					>
						1
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default FeaturedDrops;
