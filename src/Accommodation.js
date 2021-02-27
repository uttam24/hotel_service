import React from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';
const Accommodation = () =>{
	return (
		<div className="searchBox AccIcon pb-5 pt-5">
			<Container>
				<Row>
					<Col xs={12} md={4} lg={4}>
						<i className="fa fa-wifi" aria-hidden="true"></i>
						<div className="Acctext">
							<h2>Free Wi-Fi</h2>
							<p>Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud</p>
						</div>
					</Col>

						<Col xs={12} md={4} lg={4}>
						<i className="fa fa-location-arrow" aria-hidden="true"></i>
						<div className="Acctext">
							<h2>Free Parking
									</h2>
							<p>Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud</p>
						</div>
					</Col>

						<Col xs={12} md={4} lg={4}>
						<i className="fa fa-eercast" aria-hidden="true"></i>
						<div className="Acctext">
							<h2>Guest Laundry</h2>
							<p>Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
		)
}

export default Accommodation