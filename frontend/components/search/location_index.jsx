import React from 'react';

class LocationIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    const { locations } = this.props;
    const locationDetails = this.props.locations.map(location => (
        <li key={location.id}>{location.title}</li>

      )
    );
    return(
      <div>
        <ul>
          {locationDetails}
        </ul>
      </div>
    )
  }
};

export default LocationIndex;
