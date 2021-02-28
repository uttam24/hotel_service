import React from 'react';



const Room_header = () => {
  return (
    <>
   	 <div className="header_room">
      	<img src={process.env.PUBLIC_URL + '/images/hotel_room.jpg'} />
      	<span>BOOK NOW AND <br/>GET BENEFITS</span>
     </div>
    </>
  )
}


export default Room_header;
