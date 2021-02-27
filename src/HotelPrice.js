import React, { Suspense } from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import Sdata from './Sdata';
// console.log(Sdata[0].title)

const PriceCard = React.lazy(() => import('./PriceCard'));

class HotelPrice extends React.Component{

	render(){
		return(
		<div className="pb-5 pt-5">
		 <Container>
		 <Row>
		   <Suspense fallback={<div>loading...</div>}>
				
				{Sdata.map((val, index) =>{
					return(
					<PriceCard 
					key={val.id}
					imgsrc={val.imgsrc} 
					title={val.title} 
					descr={val.descr}/>
					)
				})}
		   </Suspense>
		</Row>	
		 </Container>
		</div>
		)
	}
}


export default HotelPrice