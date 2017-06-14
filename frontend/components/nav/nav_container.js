import Nav from './nav';
import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';

//
// const mapStateToProps = state => ({
//   locations: allLocations(state),
//   filters: state.filters,
//   movie: state.detail
// })

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  null,
  mapDispatchToProps
)(Nav);
