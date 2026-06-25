import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Name from './myscript.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Name />
  </>
)
