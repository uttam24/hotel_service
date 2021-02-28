import React from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';


const Contact_header = ()=> {
  return (
  	<div className="about_header">
	    <img src={process.env.PUBLIC_URL + '/images/contact_us.jpg'}/>
	    <div className="content">
	    		Contact Us
	    </div>
 	 </div>
  );
}

export default Contact_header;
