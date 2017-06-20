import React from 'react';

import IndexItem from './location_index_item';
import LocationDetail from './location_detail';

class LocationIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { locations,fetchLocationDetail, handleIndexClick } = this.props;
    const locationDetails = this.props.locations.map(location => (
        <li key={location.id}>{location.title}</li>

      )
    );
    const locationIndexDetails = this.props.locations.map(location => (
      <IndexItem
        location={location}
        fetchLocationDetail={fetchLocationDetail}
        handleIndexClick={handleIndexClick}
        key={location.id}
        id={location.id}
      />
      )
    );
    return(
      <div>
        <div>
         <h1>Movies: </h1>
         {locationIndexDetails}
       </div>
     </div>
    )
  }
};

export default LocationIndex;
