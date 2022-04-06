import React from 'react';
import ReactDOM from 'react-dom';
import UserList from '../components/UserList';

test('renders "no users" when the user list is empty', () => {
    // arrange
    const container = document.createElement('div');

    //act
    ReactDOM.render(<UserList users={[]} />, container);

    //assert
    expect(container.textContent).toMatch('no users');
});

test('renders the users in a list', () => {
    // arrange
    const container = document.createElement('div');

    // act
    var users = [
        {
            id: 7,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar: "https://reqres.in/img/faces/7-image.jpg"
        },
        {
          id: 8,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg"
        }
    ];
    ReactDOM.render(<UserList users={users} />, container);

    // assert
    expect(container.textContent).toMatch('Michael Lawson');
    expect(container.textContent).toMatch('Lindsay Ferguson');
});
