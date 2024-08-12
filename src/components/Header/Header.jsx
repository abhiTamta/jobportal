import { Link, useNavigate } from "react-router-dom"
import { FaToolbox } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  function loginHandlers (){  
    navigate("employe/login")
  }
  return (
    <header className="w-screen bg-white h-12 px-5 shadow-sm flex justify-between items-center">
      <div className="logo">
        <Link className="flex gap-2" to={"/"}>
          <span><FaToolbox className="text-amber-500" size={25} /></span>
          <span className="text-xl font-bold">Pixels<span className="text-red-500">JOBS</span></span></Link>
      </div>
      <div className="menu">menu</div>
      <div className="search">search</div>
      <div className="flex items-center gap-5">
        <div className="flex gap-3">
          <button onClick={loginHandlers} className="border border-blue-500 text-blue-500 rounded-md px-5 py-1 font-bold hover:bg-slate-100" type="button">Login</button>
          <button className="border rounded-md px-5 py-1 bg-orange-700 text-white font-bold hover:bg-orange-500" type="button">Register</button>
        </div>
        <div className="">
          For Employers
        </div>
      </div>
    </header>
  )
}

export default Header