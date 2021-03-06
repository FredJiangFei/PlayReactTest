let data = [
  {
    id: 1,
    title: 'delectus aut autem',
  },
  {
    id: 2,
    title: 'quis ut nam facilis et officia qui',
  },
];

const get = (url) => {
  switch (url) {
    case 'todos':
      return Promise.resolve(data);
    case 'todos/1':
      return Promise.resolve({
        userId: 2,
        id: 4,
        title: 'todo test',
        completed: true,
      });
    default:
      break;
  }
};

const post = (url, { title }) => {
  return Promise.resolve({
    id: data.length + 1,
    title: title,
  });
};

const deleteMock = (url) => {
  return Promise.resolve({
    status: 'ok',
  });
};

export default {
  get,
  post,
  delete: deleteMock,
};
