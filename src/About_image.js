import React from 'react';

const About_image = ()=> {
  return (
    <>
    	<div className="about_img">
       		<img src={process.env.PUBLIC_URL + '/images/about_hotel.jpg'}/>
       		<div className="overlay">
       			<div className="content">
       				<h2>Book Now And<br/> Get Benefit</h2>
       			</div>
       		 </div>

       	</div>	
    </>
  );
}

export default About_image;
