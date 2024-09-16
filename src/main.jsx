import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import pageRouter from "./routers"
import './global.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={pageRouter} />
)
