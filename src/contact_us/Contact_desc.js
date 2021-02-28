import React from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';

const Contact_desc = ()=> {
  return (
    <div className="pb-5 pt-5">
      <Container>
      <Row>
          <Col xs={12} md={8} lg={8}>
             <h4>WE WORK ON THE FOREFRONT</h4>
             <p>Isn’t is be divided shall blessed, lights living life midst, brought. Fowl fly given there darkness. Second darkness night fruit him second seasons deep forth greater morning fruit hath sixth give was itself. You’re.</p>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div className="author_img"><img src={process.env.PUBLIC_URL + '/images/author-160x160.jpg'} /></div>
            <div className="contact_contact">
              <h3>Sarah Milovsky</h3>
            <p>ADMINISTRATOR</p>
            </div>
          </Col>
        </Row>
        </Container>



    </div>
  );
}

export default Contact_desc;