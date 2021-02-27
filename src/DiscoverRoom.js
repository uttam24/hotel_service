import React from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import CarouselAll from './CarouselAll';

class DiscoverRoom extends React.Component{
	render(){
		return(
			<section>
				<Container>
				<Row className="DiscoverHeading">
				<Col xs={12} md={4} lg={4}>
					<h2>Discover our<br/> rooms</h2>
					<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</Col>
				<Col xs={12} md={8} lg={8}>
				<CarouselAll/>
				</Col>
				</Row>
				</Container>
			  </section>
		)
	}
}

export default DiscoverRoom