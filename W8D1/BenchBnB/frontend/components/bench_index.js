import React from 'react';
import { withRouter } from 'react-router-dom';
import {fetchBench} from '../actions/bench_actions.js';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches(
      // this.props.benchId
    );
  }

  render() {
    const { description } = this.props.benches;
    return(
      <div>
        { description || "No description" }
      </div>
    );
  }
}
export default BenchIndex;
