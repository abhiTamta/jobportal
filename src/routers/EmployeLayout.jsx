import { Outlet } from 'react-router-dom'
import Logo from '../components/Header/Logo'
import Footer from "../components/Footer/Footer"

const EmployeLayout = () => {
    return (
        <>
            <header className='bg-white py-4 px-5 h-16 shadow-md flex items-center sticky'>
                <div className="container mx-auto">
                    <Logo /></div>
            </header>
            <Outlet />
            <Footer />
        </>
    )
}

export default EmployeLayout