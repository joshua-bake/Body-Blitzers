import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Exercises from "./Components/Exercises"
import VideoLibrary from "./Components/VideoLibrary"

function App() {


  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/videolibrary" element={<VideoLibrary />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App