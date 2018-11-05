import { connect } from 'react-redux';
import {asArray} from '../reducers/selectors';
import { fetchBenches,fetchBench } from '../actions/bench_actions';
import BenchIndex from './bench_index';

const mapStateToProps = (state, { match }) => {
const benchId = parseInt(match.params.benchId);
// const benchId = 1;

// console.log(state.entities.benches[0]);
// console.log(benchId);
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
