import { connect } from 'react-redux';

import { fetchBenches } from '../actions/bench_actions';
import BenchIndex from './bench_index';

const mapStateToProps = (state, { match }) => {
// const benchId = parseInt(match.params.benchId);
console.log(state);
// console.log({match});
const benchId = 1;
return {
    benchId,
    benches: state.entities.benches
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
