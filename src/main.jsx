import { createRoot } from 'react-dom/client'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import pageRouter from "./routers"

createRoot(document.getElementById('root')).render(
  <RouterProvider router={pageRouter} />
)
