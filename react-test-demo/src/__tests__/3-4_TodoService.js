import todoService from "../services/todoService";
jest.mock('../utils/axiosTodo');

test('todo mock file', async () => {
  // act
  const res = await todoService.getTodoTitle(1);

  // assert
  expect(res).toEqual('todo test');
});
