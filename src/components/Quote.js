import React,{useState} from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import { css } from '@emotion/css'

const Quote =()=>{

	const quotes ={
		0:{
			client:'David S. Morris',
			quote:'Amet, consectetur adipisicing elit, sed do eiusmo incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, Lorem ipsum dolor si...'
		},
		1:{
			client:'Dalmar Johnson',
			quote:'“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ” '
		},
		2:{
			client:'Richard M. Blalock',
			quote:'Amet, consectetur adipisicing elit, sed do eiusmo incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, Lorem ipsum dolor si...'
		},
		3:{
			client:'David S. Morris',
			quote:'“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ” '
		},
	}

	const [current, setCurrent] = useState(quotes[0]);
	const [active, setActive] = useState(0);
	const handleSetClick =(event)=>{
		setCurrent(quotes[event.target.getAttribute('data-quote')])
		setActive(event.target.getAttribute('data-quote'))
	}
	return(
		<div className="searchBox  pb-4 pt-4">
		<div 
		className={css`
			display:flex;
			flex-direction:column;
			align-items:center;
			max-width:700px;
			margin:40px auto;
			text-align:center;

			p
			{
				text-align:center;
				margin-bottom:20px;
				color:#454545;
				transition:.5s ease;
			}
			`}
			>
			<Container>
				<h2>{current.client}</h2>
				<p>{current.quote}</p>
				<div className={css`
					display:flex;
					justify-content: center; 
					span{
						height:20px;
						width:20px;
						margin:0 3px;
						display:flex;
						justify-item:center;
						cursor:pointer;

					}

					span::before{
						content:'';
						height:10px;
						width:10px;
						background-color:#d4d4d4;
						border-radius:50%;
						transition:background-color 0 3s ease;
					}
					span:hover::before{
						background-color:#454545;
					}
					span[data-quote="${active}"]::before{
						background-color:#454545;
					}
				`}
				>
				{Object.keys(quotes).map(index=>(
					<span 
						onClick={event=>handleSetClick(event)}
						data-quote={index}
						key={index}
					 />
					))}
				</div>

			</Container>	
		</div>
		</div>
		)
}

export default Quote