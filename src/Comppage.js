import React from 'react';
import Slider from './Slider';
import SearchSelect from './SearchSelect';
import DiscoverRoom from './DiscoverRoom';
import Accommodation from './Accommodation';
import HotelPrice from './HotelPrice';
import Quote from './components/Quote';
import Maps from './Maps';


import 'bootstrap/dist/css/bootstrap.min.css';

function Comppage() {
  return (
    <div className="App">
      <Slider/>
      <SearchSelect/>
      <DiscoverRoom/>
      <Accommodation/>
      <HotelPrice/>
      <Quote/>
      <Maps/>
  
    </div>
  );
}

export default Comppage;
