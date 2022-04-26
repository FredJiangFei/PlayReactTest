import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ items }) {
  return (
    <div>
      <h3>Lists</h3>
      {!items.length ? (
        <p>No task!</p>
      ) : (
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <TodoItem {...item} />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default TodoList
