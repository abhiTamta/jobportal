import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import EmployesLogin from "../pages/employes/employes_login"
import EmployesRegistors from "../pages/employes/employes_registors"
import EmployeLayout from "../routers/EmployeLayout"
import EmployesForgot from "../pages/employes/employes_forgot"
import EmployesResetPass from "../pages/employes/employes_resetPass"
import CompanyLogin from "../pages/employers/companyLogin"

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
      },
      {
        path: "forgot",
        element: <EmployesForgot />
      },
      {
        path: "resetpassword",
        element: <EmployesResetPass />
      }
    ]
  },
  {
    path : "/recruit",
    element : <EmployeLayout />,
    children : [
      {
        path : "login",
        element : <CompanyLogin />  
      },
      {
        path : "registor",
        element : <h1>Registor</h1>
      }
    ]
  }
])

export default pageRouter