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
        <h1>{location.title}</h1>

      )
    );
    return(
      <div>
        {locationDetails}
      </div>
    )
  }
};

export default LocationIndex;
