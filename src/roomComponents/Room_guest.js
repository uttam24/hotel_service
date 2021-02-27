import React from 'react';
import { Button, Container, Card, Row, Col, Form  } from 'react-bootstrap';
const Room_guest = ()=>{
	return(
		<>
		<div className="filter_group">Filter Group</div>
					<div className="check_box">
					<Form>
					  {[ 'checkbox'].map((type) => (
					    <div key={`default-${type}`} className="mb-3">
					      <Form.Check 
					        type={type}
					       
					        label={`2`}
					      />
					      <Form.Check
					        type={type}
					        label={`3`}
					      />
					   		<Form.Check
					        type={type}
					        label={`4`}
					      />
					   	<Form.Check
					        type={type}
					        label={`5`}
					      />
					   <Form.Check
					        type={type}
					        label={`6`}
					      />
					   
					    </div>
					  ))}
					</Form>
		</div>
		</>
	)
}

export default Room_guest