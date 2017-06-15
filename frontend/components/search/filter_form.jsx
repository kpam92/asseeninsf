import React from 'react';

class FilterForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: 'title',
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleChange(e) {

    this.props.updateFilter(this.state.selected,e.currentTarget.value)
    this.setState({ input: e.target.value})
  }
  handleRadioChange(event) {
    console.log(event.target.value)
    this.setState({
      selected: event.target.value
    });
  }

  render(){

    return(
      <div>
        <span className="filter">Filter results:</span>
        <br/>
        <label>Title</label>
        <input
          type="text"
          value={this.state[this.state.selected]}
          onChange={this.handleChange}
        />
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="title" checked={this.state.selected == 'title'} onChange={this.handleRadioChange}/>
              Title
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="person" checked= {this.state.selected == 'person'}  onChange={this.handleRadioChange}/>
              Person
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default FilterForm;
