import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import './css/index.css'

const root: HTMLElement = document.getElementById('root')!

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />  
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
