import { Link } from "react-router-dom"
import { FaToolbox } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-screen bg-white h-12 px-5 shadow-sm flex justify-between items-center">
      <div className="logo">
        <Link className="flex gap-2" to={"/"}>
          <span><FaToolbox className="text-amber-500" size={25} /></span>
          <span className="text-xl font-bold">Pixels<span className="text-red-500">JOBS</span></span></Link>
      </div>
      <div className="menu">menu</div>
      <div className="search">search</div>
      <div className="button">buttom</div>
    </header>
  )
}

export default Header