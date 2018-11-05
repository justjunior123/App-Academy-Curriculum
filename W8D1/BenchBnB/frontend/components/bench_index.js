
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


// ******************************************************************
// works 1
import React from 'react';
import { withRouter } from 'react-router-dom';
import {fetchBenches,fetchBench} from '../actions/bench_actions.js';

class BenchIndex extends React.Component {
  componentDidMount() {
    console.log("Component Mounted");
    this.props.fetchBenches(
      console.log("Inside fetchBenches")
    );
    console.log("What does this.props look like before mounted", this.props);
  }
    render() {
      console.log("In the render function",this.props);
      // console.log(this.props.benches);
      const  {benches} = this.props || '';
      // var bench = this.props.benches[0] || '';
      // var description = bench.description || '';
      console.log('nil');
      return(
        // console.log(bench.description),
        console.log('In the return block'),
        <div>
          <ul>
            <li>{  "No Description" }</li>
          </ul>
        </div>
      );
    }
  }
  export default BenchIndex;

// *****************************************************
// All working state
//   render() {
//     // console.log(this.props.benches);
//     const {benches} = this.props;
//     console.log({benches});
//     // const {description} = benches[0];
//     // console.log(description);
//     return(
//       <div>
//         { benches[0] || "No Description" }
//       </div>
//     );
//   }
// }
// export default BenchIndex;
