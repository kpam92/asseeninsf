import React from 'react';

class LocationIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    return(
      <h1>hi from index</h1>
    )
  }
};

export default LocationIndex;
