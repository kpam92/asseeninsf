import React from 'react';

import LocationIndex from './location_index';
import FilterForm from './filter_form';
import LocationDetail from './location_detail';
import LocationMap from '../location_map/location_map';


class Search extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    var {
      locations,
      fetchLocations,
      updateBounds,
      updateFilter,
      fetchLocationDetail,
      movie
    } = this.props
    return(
      <div>
        <div className="user-pane">
          <div className="left-half">
            <LocationMap
              locations={locations}
              updateBounds={updateBounds}
              updateFilter={updateFilter}
              fetchLocationDetail={fetchLocationDetail}
              />
          </div>
          <div>
            <div className='right-half'>
              <LocationIndex locations={locations} fetchLocationDetail={fetchLocationDetail}/>
            </div>
          </div>
        </div>
        <div className='bottom-half'>
          <LocationDetail movie={movie}/>
        </div>
      </div>

    )
  }
}
export default Search;
