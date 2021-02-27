import React from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import About_page from './About_page';
import About_image from './About_image';
import About_call from './About_call';
const About_us = ()=> {
  return (
    <div className="pb-5 pt-5">
      <Container>
      <Row>
          <Col xs={12} md={7} lg={7}>
            <About_page/>
          </Col>
          <Col xs={12} md={5} lg={5}>
          <About_image/>
          </Col>
          <Col xs={12} md={12} lg={12}>
          <About_call/>
          </Col>
        </Row>
        </Container>
    </div>
  );
}

export default About_us;
