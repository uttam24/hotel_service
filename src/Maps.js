import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class Maps extends React.Component {

  render() {
    const containerStyle = {
  position: 'relative',  
  width: '100%',
  height: '500px'
}
    return (
      <Map containerStyle={containerStyle} google={this.props.google} zoom={14} >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDulaP5xyKDZkonHE0QGK2R3Zq4zti9H0o')
})(Maps)