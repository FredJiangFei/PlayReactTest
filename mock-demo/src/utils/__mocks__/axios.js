const get = () => {
  return Promise.resolve({
    data: {
      id: 2,
      email: 'fred.jiang@shinetech.in',
      first_name: 'Fred',
      last_name: 'Jiang',
    },
  });
};

export default {
  get,
};
