import React from 'react';
import Grail from '../assets/grail.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

const AboutPage = () => {
	return (
		<Container style={{ minHeight: '90vh', marginTop: '20px' }}>
			<Row xs={1} lg={2}>
				<Col>
					<h1>About Art Grail$</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id posuere justo, ac fringilla
						nisi. Mauris volutpat, turpis nec pharetra ullamcorper, turpis nulla semper massa, ac vehicula
						sem orci eget lectus. Cras eu mauris mauris. Praesent volutpat vehicula nunc nec accumsan. In
						hac habitasse platea dictumst. Nulla lorem nisi, tincidunt et tempor eu, ultricies venenatis
						risus. Nunc vitae pretium lectus, at malesuada est. Duis condimentum neque neque, aliquet
						maximus lacus posuere eget. Pellentesque habitant morbi tristique senectus et netus et malesuada
						fames ac turpis egestas. Suspendisse potenti. Cras pulvinar urna vel lorem tempor lacinia. Sed a
						lacus ut nisi lacinia vehicula. Curabitur egestas arcu nec varius tempus.
					</p>
					<p>
						Integer eget aliquet nisi. Vestibulum sollicitudin felis ut dignissim varius. Suspendisse sed
						tempor lorem. Etiam erat libero, dictum eget laoreet sit amet, suscipit vitae mi. Donec finibus
						lorem eu sem blandit ultricies non a odio. Nulla vehicula lobortis sapien, non gravida velit
						imperdiet quis. Quisque cursus nibh mauris, sed scelerisque urna commodo non. Aliquam at rutrum
						nunc. Mauris quis tristique purus. Proin nec erat cursus, scelerisque justo et, dignissim lacus.
						Aliquam eu tempus nibh, id gravida ante. Integer vestibulum dapibus pellentesque. Nam purus leo,
						efficitur nec sapien in, semper feugiat tellus. Morbi feugiat sem turpis, vel elementum erat
						scelerisque quis. Aenean posuere, nisi ut condimentum imperdiet, nisl orci pulvinar libero, ac
						blandit ante nisl nec metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos.
					</p>
					<p>
						Nam tristique orci vel massa suscipit, sit amet vehicula arcu pulvinar. Nulla a diam tellus.
						Nunc dictum elit sed metus sollicitudin pulvinar. In tincidunt accumsan risus. Maecenas viverra
						arcu nunc, sed molestie risus rutrum a. Etiam placerat ante sed risus suscipit, in placerat
						augue semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nunc,
						tempus eget leo eu, sagittis pretium orci. Morbi a venenatis turpis. Aliquam eget sollicitudin
						justo. Proin posuere elit a dolor malesuada, nec aliquet lectus feugiat. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
					</p>
				</Col>
				<Col>
					<img style={{ width: '100%' }} src={Grail} />
				</Col>
			</Row>
		</Container>
	);
};

export default AboutPage;
