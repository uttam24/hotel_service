import React,{useState} from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import Room_box from './Room_box';
import Rdata from './Rdata';
import {BrowserRouter as Router, Link, Switch, Route  } from "react-router-dom";

const Room_Item= () => {
	const [item, setItem] =useState();
	const [visible, setVisible] =useState(4);
	

	const showMoreItems = ()=> {
		setVisible((prevValue) => prevValue+3)
	};


  return (
    <>
 
		  <Row>
		     <Router>
			{Rdata.slice(0,visible).map((val, index) =>{
					return(
						<Col xs={12} md={6} lg={6}>
							<Link target="_blank" to={"/booking_page/"+val.roomprice} className="paramhit"><Room_box  roomprice={val.roomprice} imgsrc={val.imgsrc} hoteTitle={val.hoteTitle} textC={val.textC} user={val.user} bell={val.bell} chart={val.chart}/></Link>
						</Col>
					)
				})}
				</Router>
				<Col xs={12} md={12} lg={12} className="text-center">
			<Button variant="dark" onClick={showMoreItems} >View more</Button>
			</Col>
		  </Row>
	
    </>
  )
}

export default Room_Item;
