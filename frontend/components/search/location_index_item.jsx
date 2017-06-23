import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { fetchLocationDetail } = this.props
    const { title, release_year, latitude, longitude } = this.props.location

    fetchLocationDetail(title, release_year)
    this.props.handleIndexClick([latitude, longitude],this.props.id, title,release_year)
  }

  render() {
    const { title, locations, release_year } = this.props.location;
    return (
      <div
        className="location-index-item col-md-12"
        onClick={this.handleClick}
      >
        <div className="index-item-info col-sm-12">
          <div className='col-sm-6'>
            <span className="index-item-category">Movie:</span>
            <span className="index-item-copy">{title}</span>
          </div>

          <div className='col-sm-6'>
            <span className="index-item-copy">{release_year}</span>
          </div>
          <div className='col-sm-12'>
            <span className="index-item-category">Location:</span>
          </div>
          <div className='col-sm-12'>
            <span className="index-item-copy">{locations.slice(0, locations.length - 19)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default (IndexItem);
