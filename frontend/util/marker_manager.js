
var symbolIcon = {
  path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
  fillColor: '#ffed00',
  fillOpacity: 0.8,
  scale: .5,
  // strokeColor: 'gold',
  // strokeWeight: 4
};

export default class MarkerManager {

  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;

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
    const position = new google.maps.LatLng(location.latitude, location.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      locationId: location.id,
      icon: symbolIcon
    });

    marker.addListener('click', () => this.handleClick(location,marker));
    this.markers[marker.locationId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.locationId].setMap(null);
    delete this.markers[marker.locationId];
  }
}
