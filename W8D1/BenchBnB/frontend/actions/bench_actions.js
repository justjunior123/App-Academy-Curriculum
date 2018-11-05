import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

export const recieveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const receiveBench = bench => ({ /*reviews, authors*/
  type: RECEIVE_BENCH,
  bench
  // reviews,
  // authors,
});

export const fetchBenches = (filters) => dispatch => (
  APIUtil.fetchBenches(filters).then(benches => (
    dispatch(recieveBenches(benches))
  ))
);

export const fetchBench = id => dispatch => (
  APIUtil.fetchBench(id).then(payload => (
    dispatch(receiveBench(payload))
  ))
);
