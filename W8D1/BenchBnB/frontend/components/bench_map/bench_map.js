import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class BenchMap extends React.Component {

  render (){
    return (
      <div className='map' ref="map"> Map </div>
    );
  }
}
export default withRouter(BenchMap);
