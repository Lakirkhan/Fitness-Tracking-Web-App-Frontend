"use client"
import { BrowserRouter as Router } from "react-router-dom"
import App from "../src/App"
import "../src/index.css"

export default function Page() {
  return (
    <Router>
      <App />
    </Router>
  )
}
