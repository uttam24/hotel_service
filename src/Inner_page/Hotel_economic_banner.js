import React from 'react';


function Hotel_economic_banner() {
  return (
   <div className="about_header">
    <img src={process.env.PUBLIC_URL + '/images/black_deluxe_room.jpg'}/>
    <div className="content">
    	Book Room
    </div>
  </div>
  );
}

export default Hotel_economic_banner;