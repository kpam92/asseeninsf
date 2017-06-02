import Search from './search';
import { connect } from 'react-redux';

import { fetchLocations } from '../../actions/location_actions';
import { updateBounds, updateFilter } from '../../actions/filter_actions';
import { allLocations } from '../../reducers/selectors'

const mapStateToProps = state => ({
  locations: allLocations(state),
  filters: state.filters,
  movie: state.detail
})

const mapDispatchToProps = dispatch => ({
  fetchLocations: () => dispatch(fetchLocations()),
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
