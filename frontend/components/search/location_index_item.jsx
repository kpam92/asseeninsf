import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const locationId = this.props.location.id;
    this.props.history.push(`/locationes/${locationId}`);
  }

  render() {
    const { average_rating, description, picture_url } = this.props.location;
    return (
      <div
        className="location-index-item"
        onClick={this.handleClick}
      >
        <div className="index-item-info">
          <span className="index-item-category">Rating:</span>
          <span className="index-item-copy">
            {average_rating || 'No reviews yet'}
          </span>
          <span className="index-item-category">Description:</span>
          <span className="index-item-copy">{description}</span>
        </div>
        <img src={picture_url}/>
      </div>
    );
  }
}

export default withRouter(IndexItem);
