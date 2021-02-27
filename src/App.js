import React from 'react';
import Navbar from './Navbar';
import Comppage from './Comppage';
import Roompage from './Roompage';
import Gallerypage from './Gallerypage';
import About_Comp from './About_Comp';
import Footer from './Footer';
import Contact_us from './contact_us/Contact_us';
import Hotel_economic from './Inner_page/Hotel_economic';
import {Route, Switch } from "react-router-dom";


const App = ()=> {
  return (
    <div className="App">
     <Navbar/>
           <Switch>
            <Route exact path='/' component ={Comppage}/>
            <Route path='/room' component ={Roompage}/>
            <Route path='/gallery' component ={Gallerypage}/>
            <Route path='/about' component ={About_Comp}/>
            <Route path='/contact' component ={Contact_us}/>
            <Route path='/booking_page/:roomprice'  component ={Hotel_economic}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
