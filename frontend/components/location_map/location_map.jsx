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
          "stylers": [
              {
                  "hue": "#007fff"
              },
              {
                  "saturation": 89
              }
          ]
      },
      {
          "featureType": "water",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
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
      // marker.setAnimation(google.maps.Animation.BOUNCE)
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
