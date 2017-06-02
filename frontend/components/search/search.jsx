import React from 'react';

import LocationIndex from './location_index';
import FilterForm from './filter_form';
import LocationDetail from './location_detail';
import LocationMap from '../location_map/location_map';

const Search = ({ locations, fetchLocations, updateBounds, updateFilter }) => (
  <div className="user-pane">
    <div className="left-half">
      <LocationMap locations={locations}  updateBounds={updateBounds} updateFilter={updateFilter}/>
      <LocationIndex locations={locations}/>
      <FilterForm updateFilter={updateFilter}/>
    </div>
  </div>
);

export default Search;
