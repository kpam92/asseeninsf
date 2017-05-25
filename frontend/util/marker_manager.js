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
    debugger;
    const position = new google.maps.LatLng(location.latitude, location.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      locationId: location.id
    });

    marker.addListener('click', () => this.handleClick(location));
    this.markers[marker.locationId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.LocationId].setMap(null);
    delete this.markers[marker.LocationId];
  }
}
