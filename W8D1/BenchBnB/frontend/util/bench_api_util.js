export const fetchBenches = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/benches',
  });
};

export const createBench = bench => {
  return $.ajax ({
    method: 'POST',
    url: 'api/benches',
    data: {bench}
  });
};

export const fetchBench = id => (
  $.ajax({
    method: 'GET',
    url: `api/benches/id`,
    data: {id}
  })
);
