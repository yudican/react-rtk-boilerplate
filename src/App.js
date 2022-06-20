import "./App.css"
import "antd/dist/antd.css"
import { Route, Routes } from "react-router-dom"
import TodoPages from "./Pages/TodoPages"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoPages />} />
      </Routes>
    </div>
  )
}

export default App
