import axios from "../utils/axios"
import userService from '../services/userService';

jest.mock('../utils/axios');

test('should return format user async/await', async () => {
    // arrange
    const user = {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver"
    };
    const resp = { data: user };
    axios.get.mockResolvedValue(resp);

    // act
    const res = await userService.getUserName(4);

    // assert
    expect(res).toEqual(`${user.first_name} ${user.last_name} ${user.email}`);
});