import React from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';

class PriceCard extends React.Component{
	render(){
		return (
		<div className="box">
					<div className="imgBox">
						<img src={this.props.imgsrc}/>
					</div>
					<div className="detail">
						<div className="content">
							<h2>{this.props.title}</h2>
							<p>{this.props.descr}</p>
						</div>
					</div>
				</div>
				)
	}
}
	


export default PriceCard