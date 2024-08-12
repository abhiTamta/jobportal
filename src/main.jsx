import { createRoot } from 'react-dom/client'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import pageRouter from "./routers"

createRoot(document.getElementById('root')).render(
  <div className="w-screen relative">
    <RouterProvider router={pageRouter} />
  </div>
)
