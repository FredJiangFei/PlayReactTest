import React, { useState, useEffect } from 'react'
import todoService from '../services/todoService'
import TodoList from './../components/TodoList'

function Todo() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = async () => {
    const res = await todoService.getTodos();
    setTodos(res);
  }

  return <TodoList items={todos} />
}

export default Todo
