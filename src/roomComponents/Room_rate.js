import React from 'react';
import { Button, Container, Card, Row, Col, Form  } from 'react-bootstrap';
const Room_rate = ()=>{
	return(
		<>
		<div className="filter_group">Filter Group</div>
					<div className="check_box">
					<Form>
					  {[ 'radio'].map((type) => (
					    <div key={`default-${type}`} className="mb-3">
					      <Form.Check 
					        type={type}
					       
					        label={`Breakfast and dinner included`}
					      />
					      <Form.Check
					        type={type}
					        label={`Breakfast  included`}
					      />
					   
					    </div>
					  ))}
					</Form>
		</div>
		</>
	)
}

export default Room_rate