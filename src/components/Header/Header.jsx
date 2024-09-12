import { Button, Drawer, Menu, Space } from 'antd'
import Logo from './Logo'
import NavbarD from './NavBar/NavbarD'
import { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import items from "./NavBar/MenuItem";
import { Link, useNavigate } from 'react-router-dom';
import "../../assets/css/header.modules.css"


const Header = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate()

  const onClick = (e) => {
    navigate(e.key)
    setCurrent(e.key);
    onClose()
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className="bg-white py-2 px-5 shadow-md">
      <div className="container mx-auto flex justify-between gap-5">
        <Logo />
        <NavbarD />

        <div className="font-bold flex lg:hidden">
          <Button className="w-auto h-auto p-0 border-none" onClick={showDrawer}>
            <CiMenuFries size={25} />
          </Button>
        </div>

        <Drawer title="Menu" onClose={onClose} size={100} open={open}>
          <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={items} />
          <div className="">
            <Link className="loginBtn" to={"/user/login"}>Login</Link>
            <Link className="registorBtn" to={"/user/registor"} type="button">Register</Link>
          </div>
        </Drawer>
      </div>
    </header>
  )
}

export default Header