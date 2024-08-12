import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <div className="w-screen relative">
    <RouterProvider router={<App />} />
  </div>
)
