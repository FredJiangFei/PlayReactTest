import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ items, onRemoveTodo }) {
  return (
    <div>
      <h3>Lists</h3>
      {!items.length ? (
        <p className='no-task'>No task!</p>
      ) : (
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <TodoItem {...item} onRemoveTodo={onRemoveTodo}/>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default TodoList
