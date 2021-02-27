import React from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';

const About_call = ()=> {
  return (
    <>
        <div className="call_us">
        <span>Call us for direct reservation:</span>
        <span><i class="fa fa-volume-control-phone" aria-hidden="true"></i>804-821-4196</span>
        <span><i class="fa fa-envelope" aria-hidden="true"></i>Info@ritzcarlton.com</span>	
		<span><Button variant="dark" className='button' type="button" onClick={(e) => 
		    {e.preventDefault(); window.location.href='./room';}}><span>CHECK AVAILABILITY</span></Button></span>	
        </div>
    </>
  );
}

export default About_call;
