import React,{useState} from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import Standart_box from './Standart_box';
import Standart_room from './Standart_room';


const Standart_comp= () => {
  return (
    <>
		<Row>
			{Standart_room.map((val, index) =>{
					return(
						<Col xs={12} md={6} lg={6}>
							<Standart_box roomprice={val.roomprice} imgsrc={val.imgsrc} hoteTitle={val.hoteTitle} textC={val.textC} user={val.user} bell={val.bell} chart={val.chart}/>
						</Col>
					)
				})}
		</Row>

    </>
  )
}

export default Standart_comp;
