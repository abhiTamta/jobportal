import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const navigate = useNavigate();
  function loginHandlers() {
    navigate("employe/login")
  }
  return (
    <header className="w-full px-5 py-4 flex justify-between bg-white">
      <Logo />        
        <div className="menu hidden lg:block">menu</div>
        <div className="search hidden lg:block">search</div>
        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex gap-3">
            <button onClick={loginHandlers} className="border border-blue-500 text-blue-500 rounded-md px-5 py-1 font-bold hover:bg-slate-100" type="button">Login</button>
            <button className="border rounded-md px-5 py-1 bg-orange-700 text-white font-bold hover:bg-orange-500" type="button">Register</button>
          </div>
          <div className="">
            For Employers
          </div>
        </div>

        <div className="font-bold lg:hidden">
            <CiMenuFries size={25} />
          </div>
    </header>
  )
}

export default Header