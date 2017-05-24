// import React from 'react';
// import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router-dom';
//
// // import MarkerManager from '../../util/marker_manager';
//
// class LocationMap extends React.Component {
//   //...
//
//   componentDidMount() {
//     // set the map to show SF
//     const mapOptions = {
//       center: { lat: 37.7758, lng: -122.435 }, // this is SF
//       zoom: 13
//     };
//
//     // wrap the mapDOMNode in a Google Map
//     this.map = new google.maps.Map(this.mapNode, mapOptions);
//   }
//
//   render() {
//     return (
//       <div className="map" ref="map">
//         Map
//       </div>
//     );
//   }
//
//   //...
// }
//
// export default LocationMap;

import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';


const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 12
};

class LocationMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    }


  render(){
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(LocationMap);
