import React from 'react'

function UserList({ users }) {
  return users.length ? (
    <ul>
      {users.map((x) => (
        <li key={x.id}>{`${x.first_name} ${x.last_name}`}</li>
      ))}
    </ul>
  ) : (
    'no users'
  )
}

export default UserList
