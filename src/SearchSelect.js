import React, { useState, } from 'react';
import {Container, Select, Col, Row, Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

 import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const SearchSelect = () =>{

	  const [startDate, setStartDate] = useState(new Date());

	  const [guest , setGuest] = useState("");
	  const [children, setChildren] = useState("");
	  const [guestError, setguestError] = useState(false);
	  const [kiderror, kidSetError] = useState(false);

	  const handleData =(e)=> {
	  	e.preventDefault();
	  	  window.location.href = "./room";
	  }

	return(
		<div className="searchBox">
			<Container>
				<div className="searhBar">
					<form onSubmit={handleData}>
						 <Row>
						 <Col xs={12} md={3} lg={3} className="calender"><DatePicker selected={startDate} onChange={date => setStartDate(date)} className="form-control"/><i className="fa fa-calendar" aria-hidden="true"></i>
						 </Col>
						  <Col xs={12} md={3} lg={3}><Form.Group controlId="exampleForm.SelectCustomSizeLg">
						    <Form.Control as="select" size="lg" >
						      <option>Guests</option>
						      <option>2</option>
						      <option>3</option>
						      <option>4</option>
						      <option>5</option>
						    </Form.Control>
						  </Form.Group></Col>
						   <Col xs={12} md={3} lg={3}>
						   <Form.Group controlId="exampleForm.SelectCustomSizeLg">
						    <Form.Control as="select" size="lg" >
						      <option>Children</option>
						      <option>2</option>
						      <option>3</option>
						      <option>4</option>
						      <option>5</option>
						    </Form.Control>

						  </Form.Group>
						  </Col>
						  <Col xs={12} md={3} lg={3}>
						  <Button variant="dark" className="button" type="submit"><span>Check Rates</span></Button>
						  </Col>
						 </Row>
					</form>
				</div>
			</Container>
		</div>
		)
}

export default SearchSelect