import React from 'react';
import { Link } from 'react-router-dom';

function UserList({ users }) {
  return users.length ? (
    <ul>
      {users.map((x) => (
        <li key={x.id}>
          <Link to={{ pathname:"/userDetails", state: { userId: x.id }}}>
            {`${x.first_name} ${x.last_name}`}
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    'no users'
  );
}

export default UserList;
