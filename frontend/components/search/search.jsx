import React from 'react';

import LocationIndex from './location_index';
import LocationMap from '../location_map/location_map';

const Search = ({ locations, fetchLocations }) => (
  <div className="user-pane">
    <div className="left-half">
      <LocationMap locations={locations}/>
      <LocationIndex locations={locations} fetchLocations={fetchLocations}/>
    </div>
  </div>
);

export default Search;
