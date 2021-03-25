import React from 'react';
import MainNav from './MainNav';
import Hero from './Hero';
import Alec from '../assets/alec.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//TODO: Grab drop detilas from db with dropId

const DropDetails = (props) => {
	const { dropId } = props;
	const placeHoldderDrop = {
		title: 'Drop Title',
		artist: 'Alec Monopoly',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
		qty: 1000,
		date: '00-00-0000',
		thumbnail: Alec,
		id: 'DROPID'
	};
	return (
		<Container fluid style={{ minHeight: '90vh', margin: 'none', paddingLeft: '0px' }}>
			<Container fluid className="HeroDrop">
				<Container>
					<Row xs={1} sm={1} lg={2}>
						<Col>
							<img
								src={placeHoldderDrop.thumbnail}
								style={{
									width: '90%',
									marginLeft: 'auto',
									marginRight: 'auto',
									display: 'block',
									paddingTop: '20px'
								}}
							/>
						</Col>
						<Col style={{ marginTop: '20px', paddingLeft: '30px' }}>
							{/* <h1 style={{ textAlign: 'center', color: 'white', fontSize: '100px' }}>{dropId}</h1> */}
							<h1 style={{ color: 'white' }}>{placeHoldderDrop.title}</h1>
							<h1 style={{ color: 'white' }}>{placeHoldderDrop.artist}</h1>
							<h1 style={{ color: 'white' }}>{placeHoldderDrop.qty}</h1>
							<h1 style={{ color: 'white' }}>{placeHoldderDrop.date}</h1>
							<Button style={{ width: '80%' }}>
								<h1 style={{ color: 'white' }}>Share</h1>
							</Button>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container>
				<Row>
					<h1>Add More Details Here</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere
						cursus non eget purus. Donec sagittis luctus ligula ac cursus. Mauris finibus dui non odio
						consectetur mattis. Etiam tincidunt faucibus vestibulum. Nam pellentesque, velit ac varius
						cursus, risus turpis placerat nibh, a suscipit nulla diam nec tortor. Proin lacus lorem, porta
						quis egestas non, blandit quis quam. Integer in massa odio.
					</p>
				</Row>
			</Container>
		</Container>
	);
};

export default DropDetails;
