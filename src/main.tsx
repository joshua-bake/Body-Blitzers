import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/main.scss"
import App from "./App"
import.meta.env.VITE_API_KEY

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
