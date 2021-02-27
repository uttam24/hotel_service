import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ItemCarousel from './ItemCarousel';

const CarouselAll = () =>{
	const responsive = {
	  superLargeDesktop: {
	    // the naming can be any, depends on you.
	    breakpoint: { max: 4000, min: 3000 },
	    items: 5
	  },
	  desktop: {
	    breakpoint: { max: 3000, min: 1024 },
	    items: 2
	  },
	  tablet: {
	    breakpoint: { max: 1024, min: 464 },
	    items: 1
	  },
	  mobile: {
	    breakpoint: { max: 464, min: 0 },
	    items: 1
	  }
	};

	return(
		<Carousel responsive={responsive}>
		   <div><ItemCarousel price="Book now from $90.00" imgsrc="images/c-1.jpeg" title="Standart Blue Room" text="Massive three bedroom, two full bathroom corner apartment located in a beautiful midtow..." footertext="2 adult(s) and 1 child(ren)"/></div>
		   <div><ItemCarousel price="Book now from $20.00" imgsrc="images/c-2.jpeg" title="Studio Corporate Room" text="Whether you are travelling on business or on leisure, our corporate studio room's locat..." footertext="2 adult(s) and 1 child(ren)"/></div>
		   <div><ItemCarousel price="Book now from $50.00" imgsrc="images/c-3.jpeg" title="Studio Room of Creativity" text="Lving in an open-plan city apartment, packed with innovative storage, some expert inter..." footertext="6 adult(s) and 1 child(ren)"/></div>
		   <div><ItemCarousel price="Book now from $80.00" imgsrc="images/c-4.jpeg" title="Studio Small Kids Room" text="Kit out your kids room for less with our affordable children's furniture. Loads of styl... " footertext="2 adult(s) and 6 child(ren)"/></div>
		   <div><ItemCarousel price="Book now from $50.00" imgsrc="images/c-5.jpeg" title="Studio Room of Creativity" text="Lving in an open-plan city apartment, packed with innovative storage, some expert inter..." footertext="6 adult(s) and 1 child(ren)"/></div>
		   <div><ItemCarousel price="Book now from $20.00" imgsrc="images/c-6.jpeg" title="Studio Small Kids Room" text="Kit out your kids room for less with our affordable children's furniture. Loads of styl... " footertext="2 adult(s) and 6 child(ren)"/></div>
		</Carousel>
		)
}

export default CarouselAll