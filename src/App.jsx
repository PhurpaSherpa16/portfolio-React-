import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Index from "./pages/Index"
import Contact from "./pages/Contact"
import Public from "./layout/PublicRoute"

function App() {
  return (
    <BrowserRouter>
      <Public/>
    </BrowserRouter>
  )
}

export default App
