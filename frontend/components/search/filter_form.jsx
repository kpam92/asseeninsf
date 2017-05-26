import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ updateFilter }) => (
  <div>
    <span className="filter">Filter results:</span>
    <br/>
    <label>Title</label>
    <input
      type="number"
      value='1'
      onChange={handleChange('minSeating', updateFilter)}
    />
     <br/>
    <label>Release Year</label>
    <input
      type="number"
      value='1'
      onChange={handleChange('maxSeating', updateFilter)}
    />
  </div>
);

export default FilterForm;
