import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ItemCarousel =(props) =>{

	return(
		<div className="itemSection">
		<Card className="widthCarou">
		  <div className="imgCard">
		  	<Card.Img variant="top" src={props.imgsrc} />
		  </div>
		  <Card.Body>
		    <Card.Title>{props.title}</Card.Title>
		    <footer className="blockquote-footer">
		        {props.footertext}
		      </footer>
		    <Card.Text>
				{props.text}
		    </Card.Text>
		    <Button variant="dark" className='button' type="button" onClick={(e) => 
		    {e.preventDefault(); window.location.href='./room';}}><span>{props.price}</span></Button>
		  </Card.Body>
		</Card>
		</div>
		)
}

export default ItemCarousel