import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import { ToastContainer } from "react-toastify"
import Modal from "react-modal"
import "react-toastify/dist/ReactToastify.css"

// Set the app element to prevent screen readers from reading the background content when a modal is open
Modal.setAppElement("#root")

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  )
}

export default App
