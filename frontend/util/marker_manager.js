export default class MarkerManager {

  constructor(map) {
    this.map = map;
    this.markers = {};
    this.geocoder = new google.maps.Geocoder();
  }

  updateMarkers(locations){
    const locationsObj = {};
    locations.forEach(location => locationsObj[location.id] = location);

    locations
      .filter(location => !this.markers[location.id])
      .forEach(newLocation => this.createMarkerFromLocation(newLocation, this.handleClick))

    Object.keys(this.markers)
      .filter(locationId => !locationsObj[locationId])
      .forEach((locationId) => this.removeMarker(this.markers[locationId]))
  }

  createMarkerFromLocation(location) {
    // debugger;
    // const geocoder = new google.maps.Geocoder();
    const position1 = this.geocodeAddress(this.geocoder, location.locations);
    // debugger;
    // const position = new google.maps.LatLng(initial['lat'],initial['lng']);
    // const position = new google.maps.LatLng(37.7906652, -122.3913878);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      locationId: location.id
    });
    // debugger;

    marker.addListener('click', () => this.handleClick(location));
    this.markers[marker.locationId] = marker;
  }

  geocodeAddress(geocoder, location) {

      geocoder.geocode({'address': location}, function(results, status) {

        if (status === 'OK') {
          debugger;
          return (results[0].geometry.location);
        } else {
          debugger;
          console.log('hwat')
          return new google.maps.LatLng(37.7906652, -122.3913878);
        }
      });
    }

}
