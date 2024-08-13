import { CiMenuFries } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Navbar from "./NavBar/Navbar";
import Searchbar from "./Searchbar/Searchbar";

const Header = () => {
  return (
    <header className="bg-white py-4 px-5 h-16 shadow-md">
      <div className="container mx-auto flex justify-between">
        <Logo />
        <Navbar />
        <Searchbar />
        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex gap-3">
            <Link
              to={"/user/login"}
              className="border border-blue-500 text-blue-500 rounded-md px-5 py-1 font-bold hover:bg-slate-100"
            >
              Login
            </Link>
            <Link
              to={"/user/registor"}
              className="border rounded-md px-5 py-1 bg-orange-700 text-white font-bold hover:bg-orange-500"
              type="button"
            >
              Register
            </Link>
          </div>
          <div className="">For Employers</div>
        </div>
        <div className="font-bold flex lg:hidden">
          <CiMenuFries size={25} />
        </div>
      </div>
    </header>
  );
};

export default Header;
