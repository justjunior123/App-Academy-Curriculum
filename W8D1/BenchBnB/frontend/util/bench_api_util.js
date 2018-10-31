export const fetchBenches = id => {
  return $.ajax ({
    method: 'GET',
    url: 'api/benches',
    data: {id}
  });
};

export const createBench = bench => {
  return $.ajax ({
    method: 'POST',
    url: 'api/benches',
    data: {bench}
  });
};
