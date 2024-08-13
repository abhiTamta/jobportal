import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import EmployesLogin from "../pages/employes/employes_login"
import EmployesRegistors from "../pages/employes/employes_registors"
import EmployeLayout from "../routers/EmployeLayout"

const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },

    ]
  },
  {
    path: "/user",
    element: <EmployeLayout />,
    children: [
      {
        path: "login",
        element: <EmployesLogin />
      },
      {
        path: "registor",
        element: <EmployesRegistors />
      }
    ]
  },
  {
    path : "/recruit",
    children : [
      {
        path : "login",
        element : <h1>Login</h1>
      },
      {
        path : "registor",
        element : <h1>Registor</h1>
      }
    ]
  }
])

export default pageRouter