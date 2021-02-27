import React,{useState} from 'react';
import { Button, Container, Card, Row, Col, Radio, Form} from 'react-bootstrap';
import Room_Item from './Room_item';
import Room_rate from './Room_rate';
import Room_guest from './Room_guest';
import Standart_comp from './Standart_comp';
import Deluxe_comp from './Deluxe_comp';
const Room_card = () => {
	  const [room, setRoom] = useState('deluxe');
		 const handleGender =(event)=>{
		  console.warn(event.target.value)
		  setRoom(event.target.value)

		   if(document.getElementById('deluxeRoom').checked)
		   {
		  	 document.getElementById("add1").style.display='block';
		  	 document.getElementById("add2").style.display='none';
		  	 document.getElementById("add3").style.display='none';
			}
			if(document.getElementById('standartRoom').checked)
		   {
		  	 document.getElementById("add2").style.display='block';
		  	 document.getElementById("add1").style.display='none';
		  	 document.getElementById("add3").style.display='none';
			}
			if(document.getElementById('studioRoom').checked)
		   {
		  	 document.getElementById("add3").style.display='block';
		  	 document.getElementById("add1").style.display='none';
		  	 document.getElementById("add2").style.display='none';
			}
		}

  return (
    <>
   		<Container>
			<Row className="DiscoverHeading pb-5 pt-5">
				<Col xs={12} md={3} lg={3}>
					<div className="filter_group">Filter Group</div>
						<div className="check_box">
							<Form>
						          <Form.Check label="Deluxe" 
						           type="radio" 
						           value="deluxe" 
						           checked={room === 'deluxe'}
						           onChange={handleGender}
						           name="room" 
						           id="deluxeRoom" 
						          />

						          <Form.Check label="Standart" 
						           type="radio" 
						           value="Standart" 
						           checked={room === 'Standart'}
						           onChange={handleGender}
						           name="room"
						           id="standartRoom" 
						          />

						          <Form.Check label="Studio" 
						           type="radio" 
						           value="Studio" 
						           checked={room === 'Studio'}
						           onChange={handleGender}
						           name="room"
						           id="studioRoom"
						          />
						      </Form>
						</div>
				
				</Col>
				<Col xs={12} md={9} lg={9}>
					{/*Room :- {room}*/}
					<div id="add1" >	
					 <Room_Item />
					 </div>
					 <div id="add2">	
					 <Standart_comp/>
					 </div>
					 <div id="add3">	
					  <Deluxe_comp/>
					  </div>
					  
				</Col>
			</Row>
		</Container>
    </>
  )
}


export default Room_card;
