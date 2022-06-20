import React from "react"
import { useGetTodosQuery } from "../../Redux/api/ExampleApi"

const TodoPages = () => {
  const todos = useGetTodosQuery()
  return (
    <div>
      <h1>Todo Pages</h1>
    </div>
  )
}

export default TodoPages
