import { connect } from 'react-redux';

import { fetchBenches } from '../actions/bench_actions';
import BenchIndex from './bench_index';

const mapStateToProps = (state, { match }) => {
const benchId = parseInt(match.params.benchId);
// const benchId = 1;
return {
    benchId,
    bench: state.entities.benches
    // reviews
  };
};


const mapDispatchToProps = dispatch => ({
  fetchBenches: id => dispatch(fetchBenches(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
