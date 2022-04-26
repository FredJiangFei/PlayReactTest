const get = () => {
  return Promise.resolve({
    data: {
      userId: 2,
      id: 4,
      title: "todo test",
      completed: true
    },
  });
};

export default {
  get,
};
