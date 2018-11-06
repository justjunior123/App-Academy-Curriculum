
// ******************************************************************

  // render() {
  //   if (this.props.benches) {
  //     const benchIndexLis = this.props.benches.map((bench, index) => {
  //       return <BenchIndexItem bench={bench} key={bench.description + index}/>;
  //     });
  //     return (<ul>{benchIndexLis}</ul>);
  //   }
  // }
  //
  // }
  // export default BenchIndex;

// *****************************************************
// All working state
import React from 'react';
import { withRouter } from 'react-router-dom';
import {fetchBenches,fetchBench} from '../actions/bench_actions.js';
// import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    // console.log("Component Mounted");
    // this.props.fetchBenches(
    //   console.log("Inside fetchBenches")
    // );
    // console.log("What does this.props look like before mounted", this.props);
  }

render() {
  console.log("In the render function",this.props);
  console.log(this.props.benches);
  var bench = this.props.benches[0] || '';
  var description = bench.description || '';

  return(
    // console.log(bench.description),
    console.log('In the return block'),
    <div>
      { description || "No Description" }
    </div>
  );
}
}
export default BenchIndex;
// ********************************************************************
// import React from 'react';
// import BenchIndexItem from './bench_index_item';
//
// const BenchIndex = ({ benches }) => (
//   <div>
//     <h1>Benches: </h1>
//     {benches.map(bench => (
//       <BenchIndexItem
//         bench={bench}
//         key={bench.id}
//       />
//     ))}
//   </div>
// );
//
// export default BenchIndex;
