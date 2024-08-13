import { Link, Outlet, useLocation } from 'react-router-dom'
import Logo from '../components/Header/Logo'
import Footer from "../components/Footer/Footer"
import Header from '../components/Header/Header'

const EmployeLayout = () => {
    const location = useLocation()
    const { ...pathName } = location.pathname.split("/")
    let isLoginPath
    for (const key in pathName) {
        if (pathName[key] === "login") {
            isLoginPath = true;
        } else {
            isLoginPath = false
        }
    }

    console.log(isLoginPath)
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default EmployeLayout