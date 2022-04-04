import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '30%'
};

export class MapContainer extends Component {

    static  defaultProps  =  { 
        center : { 
          lat : 59.95 , 
          lng : 30.33 
        } , 
        zoom : 11 
      } ;    
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

MapContainer = GoogleApiWrapper({
  apiKey: "AIzaSyAhOT_0tRXTa2kaLT473uSNVoxprJeJ3eU",
  language: "FR"
})(MapContainer);



