import { Button, Drawer } from "antd";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaToolbox } from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  return (
    <header className="bg-white py-4 px-5 h-16 shadow-md flex justify-between">
      <div className="logo flex items-center">
        <Link className="flex gap-2" to={"/"}>
          <span><FaToolbox className="text-amber-500" size={25} /></span>
          <span className="text-xl font-bold">Pixels<span className="text-red-500">JOBS</span></span>
        </Link>
      </div>
      <div className="font-bold flex lg:hidden">
        <Button className="w-auto h-auto p-0 border-none" onClick={showDrawer}>
          <CiMenuFries size={25} />
        </Button>
      </div>

      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <Link
          to={"/user/login"}
          className="w-6/12 border border-blue-500 text-blue-500 rounded-md px-5 py-1 font-bold hover:bg-slate-100"
        >
          Login
        </Link>
        <Link
          to={"/user/registor"}
          className="w-6/12 border rounded-md px-5 py-1 bg-orange-700 text-white font-bold hover:bg-orange-500"
          type="button"
        >
          Register
        </Link>
      </Drawer>
    </header>
  );
};

export default Header;
