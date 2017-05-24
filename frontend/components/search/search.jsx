import React from 'react';

import LocationIndex from './location_index';

const Search = ({ locations, fetchLocations }) => (
  <div className="user-pane">
    <div className="left-half">
      <LocationIndex locations={locations} fetchLocations={fetchLocations} />
    </div>
  </div>
);

export default Search;
