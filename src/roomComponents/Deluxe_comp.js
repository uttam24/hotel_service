import React,{useState} from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import Deluxe_box from './Deluxe_box';
import Deluxe_room from './Deluxe_room';


const Deluxe_comp= () => {
  return (
    <>
		<Row>
			{Deluxe_room.map((val, index) =>{
					return(
						<Col xs={12} md={6} lg={6}>
							<Deluxe_box roomprice={val.roomprice} imgsrc={val.imgsrc} hoteTitle={val.hoteTitle} textC={val.textC} user={val.user} bell={val.bell} chart={val.chart}/>
						</Col>
					)
				})}
			
		</Row>
    </>
  )
}

export default Deluxe_comp;
