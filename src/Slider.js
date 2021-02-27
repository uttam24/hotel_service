import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class Slider extends React.Component{
	render(){
		return (
				<div className="carouselDiv">
				 <div>
				 <Carousel>
	                <div>
	                    <img src="images/slider-2.jpg" />
	                    <p className="legend">Make yourself at home</p>
	                </div>
	                <div>
	                    <img src="images/slider-1.jpg" />
	                    <p className="legend">FOr your hotel business</p>
	                </div>
	                <div>
	                    <img src="images/slider-3.jpg" />
	                    <p className="legend">Welecome to Ritz-Carlton Hotel</p>
	                </div>
            	</Carousel>
				 </div>
				</div>
			)
	}
}

export default Slider;