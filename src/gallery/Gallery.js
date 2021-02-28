import React from 'react';
import { Button, Container, Card, Row, Col, Form  } from 'react-bootstrap';

const imgs = [{tag:"Room", src:"/images/room_gallery.jpg?raw=true"},
              {tag:"Room", src:"/images/room_gallery1.jpg?raw=true"},
              {tag:"Room", src:"/images/room_gallery2.jpg?raw=true"},
              {tag:"Room", src:"/images/room_gallery3.jpg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel.jpeg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel1.jpeg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel2.jpeg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel3.jpeg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel4.jpeg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel5.jpeg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel6.jpeg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel7.jpeg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel8.jpeg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel9.jpg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel10.jpg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel11.jpg?raw=true"},
              {tag:"Traveller", src:"/images/room_travel12.jpg?raw=true"},
             
];

const filters = [
  {name:"Room", status: false},
  {name:"Traveller", status: false},
 
];

const Filters = ({onClickAll, all, onClick, filters}) =>
  <form>
    <ul>
      <li onClick={onClickAll}>
        <input 
          type="checkbox"
          checked={all}
        />
        <label htmlFor="all">All PHOTOS</label>
      </li>
       {filters.map(
        (filter, i)=>
          <li  key={i} data-index={i} onClick={onClick} >
            <input 
              id={filter.name} 
              type="checkbox" 
              checked={filter.status}
            />
            <label htmlFor={filter.name}>{filter.name}</label>
          </li>)}
    </ul>
  </form>

const Cards = ({imgs}) =>
  <ul>
    {imgs.map(
      (img, i)=>
      <li  key={i}>
        <figure>
          <img src={process.env.PUBLIC_URL + img.src}  alt={img.author}/>
          <figcaption> 
            <div>{img.author} </div>
            <span>{img.tag}</span>
          </figcaption>
        </figure>
      </li>)}
  </ul>

class Gallery extends React.Component{
  state ={
    imgs, 
    filters,
    all: true
  };

  setFilter = (e) =>{
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;
   
    filters[index].status = !filters[index].status;
    this.setState({
      filters
    });
    
    this.updateFilters();
    this.updateImgs();
  }
  
  setAll = () =>{
    const {filters} = this.state;
    
    filters.forEach( 
      filter => {
        filter.status = false;
      }
    );
    
    this.setState({
      all: true,
      filters
    });
  }
  
  updateFilters(){
    const allFiltersTrue = filters.every( filter => filter.status === true);
    const allFiltersFalse = filters.every( filter => filter.status === false);
    
    if(allFiltersTrue||allFiltersFalse){
      this.setAll();
    }else{
      this.setState({
        all: false
      });
    } 
  }
  
  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;
    
    imgs.forEach((img, imgKey) => { 
      filters.forEach((filter, filterKey)=> {  
        if((img.tag==filter.name)&&(filter.status==true)){
          newImgs[a] = img;
          a++;
        }
      })
    });
        
    this.setState({
      imgs: newImgs
    });
  }

  render(){
    const {filters, all} = this.state;  
    return(
      <div className="photoGallery">
      <Container>
            <Filters 
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters} />
        {(all)?(
            <Cards imgs = {imgs}/>
          ):(
            <Cards imgs = {this.state.imgs}/>
        )}
        
      </Container>
      </div>
    );
  }
}

export default Gallery