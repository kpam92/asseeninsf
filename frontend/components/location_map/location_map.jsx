import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13,
  streetViewControl: false,
  mapTypeControl: false
};

const styledMapType = new google.maps.StyledMapType(

[
  {
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#0F0919"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#E4F7F7"
          }
      ]
  },
  {
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#002FA7"
          }
      ]
  },
  {
      "featureType": "poi.attraction",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#E60003"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#FBFCF4"
          }
      ]
  },
  {
      "featureType": "poi.business",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#FFED00"
          }
      ]
  },
  {
      "featureType": "poi.government",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#D41C1D"
          }
      ]
  },
  {
      "featureType": "poi.school",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#BF0000"
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "saturation": -100
          }
      ]
  }
],
    {name: 'Styled Map'})

class LocationMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map')
    this.MarkerManager = new MarkerManager(this.map,this.handleMarkerClick.bind(this));
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.locations);
    }

    componentDidUpdate() {
      this.MarkerManager.updateMarkers(this.props.locations);

    }

    registerListeners() {

      google.maps.event.addListener(this.map, 'idle', () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: { lat:north, lng: east },
          southWest: { lat: south, lng: west } };
        this.props.updateFilter('bounds', bounds);
      });
      // google.maps.event.addListener(this.map, 'click', (event) => {
      //   const coords = getCoordsObj(event.latLng);
      //   this.handleClick(coords);
      // });
    }

    handleMarkerClick(location, marker) {
      // debugger;
      this.props.fetchLocationDetail(location.title,location.release_year)

      this.map.panTo(marker.getPosition())
      // marker.setIcon('http://res.cloudinary.com/dt5viyxyq/image/upload/v1497492302/map-localization_hh6uet.png')
      // this.props.history.push(`locations/${location.id}`);
    }

    // handleClick(coords) {
    //   this.props.history.push({
    //     pathname: 'locations/new',
    //     search: `lat=${coords.lat}&lng=${coords.lng}`
    //   });
    // }

  render(){
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default (LocationMap);
