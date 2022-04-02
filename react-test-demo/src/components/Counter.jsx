import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Counter() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const increment = () => dispatch({ type: 'INCREMENT' })
  const decrement = () => dispatch({ type: 'DECREMENT' })
  return (
    <>
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span aria-label="count">{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export { Counter }
