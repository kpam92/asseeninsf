import React from 'react';

// const handleChange = (filter, updateFilter) => e => (
//   updateFilter(filter, e.currentTarget.value)
// );
//
// const FilterForm = ({ updateFilter }) => (
//   <div>
//     <span className="filter">Filter results:</span>
//     <br/>
//     <label>Title</label>
//     <input
//       type="number"
//       value='1'
//       onChange={handleChange('minSeating', updateFilter)}
//     />
//     <input type="radio" name="gender" value="male" checked> Male<br>
//     <input type="radio" name="gender" value="female"> Female<br>
//     <input type="radio" name="gender" value="other"> Other
//      <br/>
//     <label>Release Year</label>
//     <input
//       type="number"
//       value='1'
//       onChange={handleChange('maxSeating', updateFilter)}
//     />
//   </div>
// );

// export default FilterForm;

class FilterForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { selected: 'title'};
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleChange() {
    this.props.updateFilter(this.state.selected,e.currentTarget.value)
  }
  handleRadioChange(filter) {
    console.log(filter)
  }

  render(){

    return(
      <div>
        <span className="filter">Filter results:</span>
        <br/>
        <label>Title</label>
        <input
          type="number"
          value='1'
          onChange={this.handleChange}
        />
      <form>
        <label>Title</label>
        <input type="radio" value="title" onChange={() => (this.handleRadioChange('title'))}/>
        <label>Year</label>
        <input type="radio" value="year" onChange={() => (this.handleRadioChange('release_year'))}/>
        <label>Person</label>
        <input type="radio" value="person" onChange={() => (this.handleRadioChange('person'))}/>        
      </form>
      </div>
    )
  }
}

export default FilterForm;
