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

  createMarkerFromLocation(Location) {
    const position = new google.maps.LatLng(Location.latitude, Location.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      LocationId: Location.id
    });

    marker.addListener('click', () => this.handleClick(Location));
    this.markers[marker.LocationId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.LocationId].setMap(null);
    delete this.markers[marker.LocationId];
  }
}
