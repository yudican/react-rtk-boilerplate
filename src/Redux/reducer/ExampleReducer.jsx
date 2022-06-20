import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todos: [],
}

// 2. create reducer
export const ExampleReducer = createSlice({
  name: "example",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload
    },
  },
})

// 1. create list action for each case
export const { setTodos } = ExampleReducer.actions

// last export reducer
export default ExampleReducer.reducer
