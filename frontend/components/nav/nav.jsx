import React from 'react';

import FilterForm from '../search/filter_form'

class Nav extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const { updateFilter, removeFilter } = this.props
    return(
      <div className='navigation-bar'>
        <div className='title'>
          <h1>As Seen in SF</h1>
        </div>
        <div className='filter-form'>
          <FilterForm
            updateFilter={updateFilter}
            removeFilter={removeFilter}
          />
        </div>
      </div>
    )
  }
}


export default Nav;
