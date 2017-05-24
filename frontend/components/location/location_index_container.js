import LocationIndex from './location_index';
import { connect } from 'react-redux';

import { fetchLocations } from '../../actions/location_actions';
import { allLocations } from '../../reducers/selectors'

const mapStateToProps = state => ({
  locations: allLocations(state)
})

const mapDispatchToProps = dispatch => ({
  fetchLocations: () => dispatch(fetchLocations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationIndex);
