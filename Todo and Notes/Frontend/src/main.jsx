import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>,
)

createRoot(document.getElementById("navbardiv")).render(
  <BrowserRouter>
  <Navbar />
  </BrowserRouter>
)
