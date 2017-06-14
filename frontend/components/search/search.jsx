import React from 'react';

import LocationIndex from './location_index';
import FilterForm from './filter_form';
import LocationDetail from './location_detail';
import LocationMap from '../location_map/location_map';

const Search = ({
  locations,
  fetchLocations,
  updateBounds,
  updateFilter,
  fetchLocationDetail,
  movie
  }) => (
    <div>
      <div className="user-pane">
        <div className="left-half">
          <LocationMap locations={locations}  updateBounds={updateBounds} updateFilter={updateFilter}/>
        </div>
        <div>
          <FilterForm updateFilter={updateFilter}/>
          <div className='right-half'>
            <LocationIndex locations={locations} fetchLocationDetail={fetchLocationDetail}/>
          </div>
      </div>
      </div>
      <div className='bottom-half'>
        <LocationDetail movie={movie}/>
      </div>
    </div>
);

export default Search;
