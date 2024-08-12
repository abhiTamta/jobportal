import { FaToolbox } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className="logo flex items-center">
            <Link className="flex gap-2" to={"/"}>
                <span><FaToolbox className="text-amber-500" size={25} /></span>
                <span className="text-xl font-bold">Pixels<span className="text-red-500">JOBS</span></span>
            </Link>
        </div>
    )
}

export default Logo