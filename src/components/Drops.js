import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alec from '../assets/alec.jpg';
import DropCard from './DropCard';
import CardColumns from 'react-bootstrap/CardColumns';
import { Card } from 'react-bootstrap';
//TODO: Get actual old drops from db.
const Drops = () => {
	const placeHolderDrops = [
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		},
		{
			title: 'Drop Title',
			artist: 'Alec Monopoly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque et ipsum posuere cursus non eget purus. Donec sagittis luctus ligula ac cursus.',
			qty: 1000,
			date: '00-00-0000',
			thumbnail: Alec,
			id: 'DROPID'
		}
	];

	return (
		<div>
			<h1 className="centerHeadline">Previous Drops</h1>
			<Container>
				<Row
				// xs={1}
				// sm={1}
				// md={2}
				// lg={2}
				// xl={3}
				// style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}
				>
					<CardColumns xs={1} sm={2} lg={3}>
						{placeHolderDrops.map((drop) => {
							console.log(`Drop:${JSON.stringify(drop)}`);
							return <DropCard details={drop} />;
						})}
					</CardColumns>
				</Row>
			</Container>
		</div>
	);
};

export default Drops;
