import React, { Component } from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hotel_slider =()=> {
	const photos = [
	{
		name:'Room',
		url:'https://images.unsplash.com/photo-1598035411675-bda029a6bd29?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODd8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	},
	{
		name:'Room',
		url:'https://images.unsplash.com/photo-1522587750645-7e0e798b2b59?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTd8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	},
	{
		name:'Room',
		url:'https://images.unsplash.com/photo-1526725702345-bdda2b97ef73?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsJTIwcm9vbSUyMHdpdGglMjBnaXJsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	},
	{
		name:'Room',
		url:'https://images.unsplash.com/photo-1598346762291-aee88549193f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsJTIwcm9vbSUyMHdpdGglMjBnaXJsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	},
	];

	const settings = {
    dots: false,
    fade:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows:true,
    slidesToScroll: 1,
    className:'slides'
 	 };
  return (
  	<div className="pt-5">
   <Container>
  		 <Row>
			 <Col xs={12} md={9} lg={9}>
			 <div>
				<Slider {...settings}>
		         	{photos.map((photo)=>{
		         		return(
		         			<img width="100%" src={photo.url}/>
		         			)
		         	})}
      		  </Slider>
      		  </div>
      		  <div className="room_detail">
      		  	<ul>
      		  		<li><i className="fa fa-wifi" aria-hidden="true"></i>
						<span>WiFi</span></li>
					<li><i className="fa fa-bed" aria-hidden="true"></i>
						<span>Bed</span></li>
					<li><i className="fa fa-key" aria-hidden="true"></i>
						<span>Key</span></li>	
					<li><i className="fa fa-television" aria-hidden="true"></i>
						<span>Cable TV</span></li>	
      		  	</ul>
      		  </div>
      		  <p>This comfortable, modern hotel is set in the urban center of Pontevedra, 10 minutes’ walk from the historic quarter. It offers a terrace and chic, air-conditioned rooms with free Wi-Fi.</p>
      		  <p>Accommodations at Hotel Room features contemporary design and central heating. All rooms include a 26-inch plasma satellite TV, a work desk and a private bathroom with hairdryer.</p>
      		  <p>Breakfast is served daily and the hotel’s restaurant offers a varied, modern menu from Monday to Saturday. Several bars, restaurants and shops are within 5 minutes’ walk.</p>
			 </Col>
			 <Col xs={12} md={3} lg={3}>
				<Slider {...settings}>
					{photos.map((photo)=>{
						return(
							<div>
								<img src={photo.url}/>
							</div>
							)
					})}

				</Slider>
					  	
			 </Col>
			</Row>
		</Container>
   </div>
  );
}

export default Hotel_slider;