import React from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';


const About_header = ()=> {
  return (
  <div className="about_header">
  <img src={process.env.PUBLIC_URL + '/images/about_us.jpg'} />
    <div className="content">
    		About Us
    </div>
  </div>
  );
}

export default About_header;
