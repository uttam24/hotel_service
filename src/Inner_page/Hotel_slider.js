import React, { Component, useEffect, useState } from 'react';
import { Button, Container, Card, Row, Col, Form  } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {withRouter } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import  "./style.css";

const Hotel_slider =(prop)=>{
		
	  const [show, setShow] = useState(false);
	  const handleClose = () => setShow(false);
  	  const handleShow = () => setShow(true);

  	  const [card, setCard] =useState('');
  	  const [expire, setExpire] =useState('');
  	  const [secuirty, setSecuirty] =useState('');

  	  const [user, setuserError] = useState(false);
  	  const [cardexpire, setExpireCard] =useState(false);
  	  const [cardsecuirty, setCardSecuirty] =useState(false);
  	  const loginHandle =(e)=>
  	  	{
  	  		if(card.length<12 || expire.length<5 || secuirty.length<3)
  	  		{
  	  			alert('type correct value');
  	  		}
  	  		else
  	  		{
  	  			alert ('All Good :)')
  	  		}
  	  		e.preventDefault();
  	  }

  	  const userHandler =(e)=>{
  	  	let item =e.target.value;
  	  	if (item.length<12)
  	  	{
  	  		setuserError(true);
  	  	}
  	  	else{
  	  		setuserError(false);
  	  	}
  	  	setCard(item)
  	  }

  	  const cardHandler =(e)=>{
  	  	let item =e.target.value;
  	  	if (item.length<5)
  	  	{
  	  		setExpireCard(true);
  	  	}
  	  	else{
  	  		setExpireCard(false);
  	  	}
  	  	setExpire(item)
  	  }
  	  const codeHandler =(e)=>{
  	  	let item =e.target.value;
  	  	if (item.length<3)
  	  	{
  	  		setCardSecuirty(true);
  	  	}
  	  	else{
  	  		setCardSecuirty(false);
  	  	}
  	  	setSecuirty(item)
  	  }
  	 
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
	{
		name:'Room',
		url:'https://images.unsplash.com/photo-1542139688013-5e39ad5509ed?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjBmZW1hbGUlMjByb29tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	},
	{
		name:'Room',
		url:'https://images.unsplash.com/photo-1441110317034-95e16e111f8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwZmVtYWxlJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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

	const [joke, setJoke] =useState('loading');
	useEffect(()=>{
		fetch("http://api.icndb.com/jokes/random?firstName=Vitasnhu&amp;lastName=Sahu").
		then(res=>res.json())
		.then(res2=>{
			console.log(res2)
			setJoke(res2.value.joke)
		})
	}, [])
  return (
  	<div className="pt-4 pb-4 ">
   <Container>
  		 <Row>
			 <Col xs={12} md={9} lg={9}>
				<div className="cartBox">
					<div className="button_proceed">
					<h3>Room & Price Summary</h3>
					<span>ROOMS INFORMATION</span>
					</div>
					<div className="location_room">
					<div className="room_pic">
						<img src={process.env.PUBLIC_URL + '/images/hotel_book.jpg'}  alt=""/>
					</div>
					<div className="left_scroll">
					<h3>Deluxe Black Room</h3>
					<span>The Hotel Prime, DefCity, Andhra Pradesh, India, 35010</span>

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
							<li><i className="fa fa-laptop" aria-hidden="true"></i>
								<span>Laptop</span></li>	
							<li><i className="fa fa-newspaper-o" aria-hidden="true"></i>
								<span>Newspaper</span></li>
		      		  	</ul>
		      		  </div>
		      		  <div className="div_bottom">
				      		  <div className="price_hotel">
				      		  <h3>${prop.match.params.roomprice} Per Night</h3>
				      		  <span>Price for 1 Night(s) stay (Included all taxes	)</span>
				      		  </div>
				      		  <div className="total_price">
				      		  <h3>${prop.match.params.roomprice} Per Night<span>/ Per Night</span></h3>
				      		  <span>You save $10 per night</span>
				      		  </div>
				      		  </div>
			      		
			      		  </div>
			      		  <Button variant="dark" className='button' onClick={handleShow}><span>PROCEED</span></Button>

					</div>
				</div>	
				
				<div className="cartBox">
					<p>This comfortable, modern hotel is set in the urban center of Pontevedra, 10 minutes’ walk from the historic quarter. It offers a terrace and chic, air-conditioned rooms with free Wi-Fi.</p>
      		  		<p>Accommodations at Hotel Room features contemporary design and central heating. All rooms include a 26-inch plasma satellite TV, a work desk and a private bathroom with hairdryer.</p>
      		  		<p>Breakfast is served daily and the hotel’s restaurant offers a varied, modern menu from Monday to Saturday. Several bars, restaurants and shops are within 5 minutes’ walk.</p>
				</div>
			 </Col>
			 <Col xs={12} md={3} lg={3} className="Hotel_book">
				<div className="cartBox ">
				<h2>{joke}</h2>
      		 	 </div>
				 <div className="cartBox">
				 	<Slider {...settings}>
					{photos.map((photo)=>{
						return(
							<div>
								<img src={photo.url}/>
							</div>
							)
					})}
				</Slider>
				 </div>
			 </Col>

			 <Modal show={show} onHide={handleClose}>
		        <Modal.Header closeButton>
			        <Modal.Title>Global Payments</Modal.Title>
			        <img src={process.env.PUBLIC_URL + '/images/card_img.png'} />
			        </Modal.Header>
			        <Modal.Body>
			        <div className="card_body">
			        	<p className="payCard">Pay securely using your credit card</p>
			        	<div className="payment_method">
			        	<Row>
			        		<Form onSubmit={loginHandle}>
			        		<Col xs={12} md={12} lg={12}>
			        		<p>Card Number <span>*</span></p>
				                <Form.Group>
				                  <Form.Control type="text"  onChange={userHandler}/>
				                    {user?<span>Not valid</span>:""}
				                  <img src={process.env.PUBLIC_URL + '/images/visa_card.png'} />
				                
				                  </Form.Group>
				             </Col>	

				             <Col xs={12} md={6} lg={6}>
				             <p>Expiration (MM/YY) <span>*</span></p>
				                <Form.Group>
				                  <Form.Control type="text"  onChange={cardHandler}/>
				                    {cardexpire?<span>Card not valid</span>:""}
				                  </Form.Group>
				             </Col>

				             <Col xs={12} md={6} lg={6}>
				             <p>Card Secuirty Code <span>*</span></p>
				                <Form.Group>
				                  <Form.Control type="text"  onChange={codeHandler}/>
				                   {cardsecuirty?<span>Card not valid</span>:""}
				                  </Form.Group>
				             </Col>
				             <Col xs={12} md={12} lg={12}>
				              <Button variant="dark" className='button' style={{width:'100%'}} type="submit"><span>Place Order</span></Button>
				               </Col>
				            </Form>
			        	</Row>
			        	</div>

			        </div>
			       <div className="privacy_text"> <p>Your personal data will be used to process your order,
				support your experience throughout this website, and for other
				purposes described in our privacy policy.</p></div>
			        </Modal.Body>
			        <Modal.Footer>
			        
			        </Modal.Footer>
		      </Modal>

			</Row>
		</Container>
   </div>
  );
}

export default withRouter(Hotel_slider);