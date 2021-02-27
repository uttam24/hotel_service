import React from 'react';
import { Button, Card } from 'react-bootstrap';


const Standart_box = (props) => {
  return (
      <>
    	<div className="hotel_card">
    		<Card>
			  	<Card.Img variant="top"/>
			  		<div className="Card_img">
			  			<div className="imageBox">
			  				<img src={props.imgsrc}/>
			  			<div className="container_img">
			  				<div className="content_box">
			  				<h2>Ritz-Carlton Hotel</h2>
			  				<span>Book Now And Get Benefits</span>
			  				</div>
			  			</div>
			  			</div>
			  		</div>
				  <Card.Body>
				    <Card.Title>{props.hoteTitle}</Card.Title>
				    <Card.Text>
				    {props.textC}
				    </Card.Text>
				   <a href="" variant="dark" className="button_room"><span></span><span></span><span></span><span></span>${props.roomprice}</a>
				  </Card.Body>
				  <div className="footer_hotel">
				  	<ul>
				  	<li><i className="fa fa-user-o" aria-hidden="true"></i>{props.user}</li>
				  	<li><i className="fa fa-bell" aria-hidden="true"></i>{props.bell}</li>
				  	<li><i className="fa fa-bar-chart" aria-hidden="true"></i>{props.chart}</li>
				  	</ul>
				  </div>
			</Card>
    	</div>
      </>
     );
}

export default Standart_box;
