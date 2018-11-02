import React from 'react';
import { withRouter } from 'react-router-dom';


class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches(
      this.props.benchId
    );
  }

  render() {
    const { description } = this.props.benches;
    return(
      <div className="#">
        { description }
      </div>
    );
  }
}
export default BenchIndex;
