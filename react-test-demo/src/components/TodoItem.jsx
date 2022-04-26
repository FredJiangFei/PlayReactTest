import React from 'react'

const TodoItem = ({ id, title }) => {
  return (
    <>
      {title} <button>X</button>
    </>
  )
}

export default TodoItem
