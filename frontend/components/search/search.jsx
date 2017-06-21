import React from 'react';

import LocationIndex from './location_index';
import FilterForm from './filter_form';
import LocationDetail from './location_detail';
import LocationMap from '../location_map/location_map';


class Search extends React.Component {
  constructor(props){
    super(props)
    this.handleIndexClick = this.handleIndexClick.bind(this);
  }


  handleIndexClick(position,id, title, release_year){

    var latLng = new google.maps.LatLng(position[0], position[1]);
    var currMarker = this.map.MarkerManager.markers[id];
    this.map.MarkerManager.handleIt({title: title, release_year: release_year}, currMarker)

  }

  render(){
    var {
      locations,
      fetchLocations,
      updateBounds,
      updateFilter,
      fetchLocationDetail,
      movie,
      focus,
      addFocus,
      deleteFocus
    } = this.props
    return(
      <div className='content'>
        <div className="user-pane row" >

            <LocationMap
              ref={(map) => this.map = map}
              locations={locations}
              updateBounds={updateBounds}
              updateFilter={updateFilter}
              fetchLocationDetail={fetchLocationDetail}
              focus={focus}
              addFocus={addFocus}
              deleteFocus={deleteFocus}
              />


            <div className='right-half col-sm-6'>
              <LocationIndex
                locations={locations}
                fetchLocationDetail={fetchLocationDetail}
                handleIndexClick={this.handleIndexClick}
              />
            
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
