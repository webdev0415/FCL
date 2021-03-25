import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { navigate } from '@reach/router';
import '../App.css';

const DropCard = (props) => {
	const { details, checkout } = props;
	const { title, artist, qty, date, description, thumbnail, id } = details;

	const handleClick = () => {
		navigate(`/drops/${id}`);
	};

	return (
		<Card className={checkout ? 'checkoutCard' : ''}>
			<Card.Img variant="top" src={thumbnail} />
			<Card.Body>
				<Card.Title className="dropCardHeading">{title}</Card.Title>
				<hr />
				<Card.Text>
					<span className="dropCardTitle">Artist: </span>
					<span className="dropCardText">{artist}</span>
					<br />
					<span className="dropCardTitle">Qty: </span>
					<span className="dropCardText">{qty}</span>
					<br />
					<span className="dropCardTitle">Date: </span>
					<span className="dropCardText">{date}</span>
					<br />
					{/* <hr /> */}
					{/* <p className="dropCardTitle">{description}</p> */}
				</Card.Text>
				{!checkout ? (
					<Button
						variant="primary"
						style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
						onClick={handleClick}
					>
						View Drop
					</Button>
				) : null}
			</Card.Body>
		</Card>
	);
};

export default DropCard;
