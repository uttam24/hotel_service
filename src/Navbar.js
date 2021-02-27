import React, {useState, useEffect} from 'react'
import {Container, Button} from 'react-bootstrap'
import { NavLink} from "react-router-dom";

const Navbar =()=>{


	const [active, setActive]=useState(false)
	const clickhandler =()=>{
		setActive(!active);
		document.body.classList.toggle('overflow');
	}
	
	 
	
	return (
			<>

				<div className="hotello_is_sticky">
					<Container>
						<Button id="menuToggle" variant="light" className="menu" onClick={clickhandler}><span></span><span></span><span></span>
							
						</Button> 
						<div className="logo">
								Ritz-Carlton Hotel
						</div>
						<div className="phoneIcon">
						<i className="fa fa-volume-control-phone" aria-hidden="true"></i>
						<span>804-821-4196</span>
						</div>

						<nav className={active ? "nav active": "nav"}>
						<ul>
							<li><NavLink exact activeClassName="active_menu" to='/'>Home</NavLink></li>
							<li><NavLink exact activeClassName="active_menu" to='/room'>Rooms</NavLink></li>
							<li><NavLink exact activeClassName="active_menu" to='/gallery'>Gallery</NavLink></li>
							<li><NavLink exact activeClassName="active_menu" to='/about'>About Us</NavLink></li>
							<li><NavLink exact activeClassName="active_menu" to='/contact'>Contact Us</NavLink></li>
							</ul>
						</nav>

						</Container>
					</div>
				</>
			)

}

export default Navbar;