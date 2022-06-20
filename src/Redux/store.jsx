import { configureStore } from "@reduxjs/toolkit"
import { exampleApi } from "./api/ExampleApi"
import ExampleReducer from "./reducer/ExampleReducer"

export const Store = configureStore({
  reducer: {
    example: ExampleReducer,
    [exampleApi.reducerPath]: exampleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exampleApi.middleware),
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ serialize: true }),
})
