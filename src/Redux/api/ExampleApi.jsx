import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const exampleApi = createApi({
  reducerPath: "example_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    // prepareHeaders: (headers, { getState }) => {
    //   headers.set("Authorization", getState().auth.token)
    //   return headers
    // },
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({ url: "todos/1" }),
    }),
  }),
})

export const { useGetTodosQuery } = exampleApi
