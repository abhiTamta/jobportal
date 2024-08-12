import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import EmployesLogin from "../pages/employes/employes_login"
import EmployesRegistors from "../pages/employes/employes_registors"

const pageRouter  = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path: "employe/login",
        element : <EmployesLogin />
      },
      {
        path: "employe/registor",
        element : <EmployesRegistors />
      }
    ]
  }
])

export default pageRouter