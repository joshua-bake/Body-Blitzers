import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Exercises from "./Components/Exercises"
import Collection from "./Components/Collection"

function App() {


  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App